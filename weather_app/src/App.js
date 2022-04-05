import React, {useState}  from "react";
import Form from "./Form";
import MeteoDisplay from "./MeteoDisplay";

function App() {
  const [locations, setLocations] = useState("Paris");
  const [response, setResponses] = useState("");
  return (
    <>
      <h1>Weather App</h1>
      <Form/>
      <MeteoDisplay locations={locations} setResponses={setResponses}/>
    </>
  );
}

export default App;
