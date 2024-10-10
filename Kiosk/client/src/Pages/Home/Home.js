import React from "react";
import Map from "../../Components/Map";

function Home() {
  const handleClick = () => {
    alert(" haha pairit!");
  };

  return (
    <div>
      <h1>Welcome to Pairit!</h1>
      <p>Test Pages!</p>
      <Map />
      <button onClick={handleClick}>Start</button>
    </div>
  );
}

export default Home;
