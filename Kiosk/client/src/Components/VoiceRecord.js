import React, { useRef, useState, useEffect } from "react";
import MicIcon from "@mui/icons-material/Mic";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import "../Styling/VoiceRecord.css";
import axios from "axios";
import ClassPopup from "./ClassPopup";
import { set } from "mongoose";

export default function VoiceRecord() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");
  const [transcript, setTranscript] = useState("");
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);
  const recognitionRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [transcriptResults, setTranscriptResults] = useState([]);
  const [finalClasses, setFinalClasses] = useState([]); 


  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    //speech recognition supported on google chrome
    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
    } else {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;

      //transcription part
      recognitionRef.current.onresult = (event) => {
        let interimTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          interimTranscript += event.results[i][0].transcript;
        }
        console.log("Transcript:", interimTranscript); //printed out in browser's console
        setTranscript(interimTranscript);
        sendTranscriptToAPI(interimTranscript);
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };
    }
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunks.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        audioChunks.current = [];
      };

      //start voice recording and transcription
      mediaRecorderRef.current.start();
      recognitionRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
    }
    recognitionRef.current?.stop();
    setIsRecording(false);
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const sendTranscriptToAPI = async (transcript) => {
    try {
      const response = await axios.post(
        "http://localhost:5002/query",
        {
          query: transcript,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        }
      );
      console.log("API response:", response.data);
      const classIds = extractIds(response.data);
      const classes = convertTranscriptToClasses(classIds);
      setTranscriptResults(classes);
    } catch (error) {
      console.error("Error sending transcript to API:", error);
    }
  };

  const extractIds = (response) => {
    // Split the response by line breaks and map the result to extract only the ID portion
    return response
      .split('\n') // split by new line
      .filter((line) => line.includes('.')) // keep only lines with ids
      .map((line) => line.split('. ')[1]) // extract the ID part
      .filter((id) => id); // remove any undefined or empty entries
  };
  

  const convertTranscriptToClasses = async (classIds) => {
    try {
      console.log(classIds);
  
      if (classIds.length === 0) {
        console.log("No valid class IDs found.");
        return []; // Return an empty array or handle accordingly
      }
  
      console.log("Valid Class IDs:", classIds);
      const url = `http://localhost:5001/courses/classes/byIds?ids=${classIds.join(",")}`;
      
      const response = await axios.get(url);
      console.log("Classes found:", response.data);
      if (response.data.length === 0) {
        console.log("No classes found for the provided IDs.");
        return [];
      }
      setShowPopup(true);
      setFinalClasses(response.data);
      return response.data;
    } catch (error) {
      console.error("Error converting transcript to classes:", error);
    }
  };
  

  return (
    <div className="voice-recorder-container">
      <div className="recording-button" onClick={toggleRecording}>
        <RadioButtonUncheckedIcon
          className={`radio-button ${
            isRecording ? "recording" : "not-recording"
          }`}
          fontSize="100%"
        />
        <MicIcon
          className={`mic-icon ${isRecording ? "recording" : "not-recording"}`}
          fontSize="100%"
        />
      </div>

      {showPopup && (
        <ClassPopup isVisible={showPopup}
        toggleVisibility={()=> setShowPopup(false)}
        classesData={finalClasses}
        />
      )}
    </div>
  );
}
