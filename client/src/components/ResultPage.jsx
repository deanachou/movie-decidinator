import { useEffect, useState } from "react";
import "./ResultPage.css";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const ResultPage = ({ responses, addResponseHistory, endOfQuiz }) => {
  //use state
  const [result, setResult] = useState([]);
  const [resultClick, setResultClick] = useState(false);

  //use effect
  //add response to history when quiz ends
  useEffect(() => {
    if (endOfQuiz === true) {
      addResponseHistory();
    }
  }, [endOfQuiz]);

  useEffect(() => {
    console.log("button clicked, handleGetResult done");
    console.log("click", resultClick);
    console.log("result", result);
  }, [resultClick]);

  //handler func
  const handleGetResult = async () => {
    const fetchedResult = await fetch(`${BASE_URL}/result`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    const parsedResult = await fetchedResult.json();
    console.log("parsedResult", parsedResult);
    setResult(parsedResult.results);
    setResultClick(true);
  };

  return (
    <main>
      <h1>end of quiz!</h1>
      <button className="resultButton" onClick={handleGetResult}>
        Click here for results
      </button>
      <p></p>
    </main>
  );
};

export default ResultPage;
