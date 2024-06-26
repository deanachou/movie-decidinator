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
    console.log("click", resultClick);
    console.log("result", result);
  }, [resultClick]);

  //handler func
  const handleGetResult = async () => {
    const fetchedResult = await fetch(`${BASE_URL}/result`, {
      method: "GET",
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
    <main className="mainResultContainer">
      <h1>End of quiz!</h1>
      <button className="resultButton" onClick={handleGetResult}>
        Click for results!
      </button>
      <div className="resultCardContainer">
        {result ? (
          result.map((item, index) => {
            return (
              <div className="resultCard" key={index}>
                <img className="resultImg" src={item.img}></img>
                <h3>{item.title}</h3>
                <p>{item.synopsis}</p>
              </div>
            );
          })
        ) : (
          <div className="resultCard">
            <p>Oh no! There are no results for your search. Please try again</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ResultPage;
