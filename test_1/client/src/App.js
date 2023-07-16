import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
 
  

  axios.get('http://localhost:7777/songs/getSongs').then((Response)=>{
      console.log('hello');
  }).catch((Error)=>{
      console.log(Error);
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
      </header>
    </div>
  );
}

export default App;