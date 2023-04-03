import { useState } from "react";
import "./App.css";
import Btn from "./components/Btn";

function App() {
  const [blue, setBlue] = useState(0);
  const [red, setRed] = useState(0);

  return (
    <div className="App">
      <div className="blue">
        <h1>Time Blue</h1>
        <h1>{blue}</h1>
        <div className="btn">
          <Btn setCount={setBlue} valor={+1} />
          <Btn setCount={setBlue} valor={+3} />
          <Btn setCount={setBlue} valor={+5} />
          <Btn setCount={setBlue} valor={+10} />
          <Btn setCount={setBlue} valor={-1} />
          <Btn setCount={setBlue} valor={-3} />
          <Btn setCount={setBlue} valor={-5} />
          <Btn setCount={setBlue} valor={-10} />
        </div>
      </div>

      <div className="red">
      <h1>Time Red</h1>
        <h1>{red}</h1>
        <div className="btn">
        <Btn setCount={setRed} valor={+1} />
          <Btn setCount={setRed} valor={+3} />
          <Btn setCount={setRed} valor={+5} />
          <Btn setCount={setRed} valor={+10} />
          <Btn setCount={setRed} valor={-1} />
          <Btn setCount={setRed} valor={-3} />
          <Btn setCount={setRed} valor={-5} />
          <Btn setCount={setRed} valor={-10} />
        </div>
      </div>
    </div>
  );
}

export default App;
