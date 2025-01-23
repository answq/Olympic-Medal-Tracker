import { useState } from "react";
import "./App.css";
import MedalForm from "./components/MedalForm";

function App() {
  const [Countries, setCountries] = useState([]);
  return (
    <div className="medal-container">
      <h1 className="title">2024 파리 올림픽</h1>
      <MedalForm countries={Countries} setCountries={setCountries} />
    </div>
  );
}

export default App;

