import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, InputGroup } from "@blueprintjs/core";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App2() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleClick = async () => {
    const res = await fetch("http://localhost:5000/api/calculator/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ a: Number(a), b: Number(b) }),
    });
    const json = await res.json();
    setResult(json.result);
  };

  const handleMinusClick = async () => {
    const res = await fetch("http://localhost:5000/api/calculator/subtract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ a: Number(a), b: Number(b) }),
    });
    const json = await res.json();
    setResult(json.result);
  };
  
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Simple Add App</h2>
      <InputGroup
          placeholder="First number"
          value={a}
          onChange={(e) => setA(e.target.value)}
      />
      <br />
      <InputGroup
          placeholder="Second number"
          value={b}
          onChange={(e) => setB(e.target.value)}
      />
      <br />
      <Button intent="primary" onClick={handleClick}>
        Add
      </Button>
      <Button intent="primary" onClick={handleMinusClick}> 
        Subtract
      </Button>
        {result !== null && <p>Result: {result}</p>}
    </div>
  );
}
export default App2;
