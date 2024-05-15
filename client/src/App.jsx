import { useState, useEffect } from "react";
import "./App.css";
import QuizCard from "./components/QuizCard";
import QuizPage from "./components/QuizPage";

function App() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  return (
    <>
      <QuizPage></QuizPage>
      
    </>
  );
}

export default App;
