import { useState, useEffect } from "react";
import "./App.css";
import QuizCard from "./components/QuizCard";

function App() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  return (
    <>
      <p>This or That?</p>
      <QuizCard></QuizCard>
      <QuizCard></QuizCard>
    </>
  );
}

export default App;
