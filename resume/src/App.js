import React from 'react';
import './App.css';
// import axios from 'axios';
import Form from "./Components/form"
import { v4 as uuid } from "uuid";

function App() {
  // const automate = async() => {
  //   const response = await axios.post('http://localhost:5000/screenshot',{
    
  //   })
  //   console.log(response)
  // }
  return (
    <div className="App">
       <Form />
      {/* <button onClick={automate}>Automate</button> */}
    </div>
  );
}

export default App;