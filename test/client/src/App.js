import { useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  useEffect(() => {
    Axios.get("http://localhost:7777").then((res) =>
      console.log(res.data)
    );
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
      </header>
    </div>
  );
}

export default App;