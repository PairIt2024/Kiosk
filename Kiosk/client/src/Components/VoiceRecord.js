import React, { useRef, useState, useEffect } from "react";
import MicIcon from "@mui/icons-material/Mic";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export default function VoiceRecord() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");
  const [transcript, setTranscript] = useState("");
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);
  const recognitionRef = useRef(null);

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

  return (
    <div className="voice-recorder-container">
      <div className="recording-button" onClick={toggleRecording}>
        <RadioButtonUncheckedIcon
          className="radio-button"
          style={{
            fontSize: 80,
            color: isRecording ? "red" : "#ffffff",
            position: "absolute",
            zIndex: 1,
            left: "66%",
          }}
        />
        <MicIcon
          className="mic-icon"
          style={{
            fontSize: 40,
            color: isRecording ? "red" : "white",
            position: "absolute",
            zIndex: 2,
            left: "67.15%",
            top: "92.6%",
          }}
        />
      </div>

      {/* {audioURL && <audio src={audioURL} controls />} debugging and downloading the audio */}
      {/* {transcript && <p>Transcript: {transcript}</p>} */}
    </div>
  );
}
