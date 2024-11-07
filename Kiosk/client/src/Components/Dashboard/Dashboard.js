import React, { useState } from "react";
import Navbar from "../Navbar/Navbar.js"
import Map from "../Map.js"
import axios from "axios";
import Searchbar from "../Navbar/Searchbar.js"

const Dashboard = () =>{
    const [suggestions, setSuggestions] = useState([]);

    const fetchSuggestions = async (query) => {
        if (query.length === 0) {
            setSuggestions([]);
            return;
        }
        try {
            const url = `http://localhost:5001/bbcroutes/${encodeURIComponent(query)}`;
            const response = await axios.get(url);
            setSuggestions(response.data);
        }
        catch (error) {
            console.error("Error fetching suggestions:", error);
        }
    }

    const handleSearch = (query) => {
        fetchSuggestions(query)
    }
    return (
        <div>
        </div>
    )
}
export default Dashboard;