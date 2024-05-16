import { useState, useEffect } from "react";
import "./QuizCard.css";
import ResultPage from "./ResultPage";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const QuizCard = ({ questionCount, setQuestionCount }) => {
  const quizOptions = {
    country: ["Japan", "USA"],
    type: ["movie", "series"],
    audio: ["japanese", "english", "chinese", "spanish", "korean"],
    subtitle: ["japanese", "english", "chinese", "spanish"],
    genre: [
      "Horror",
      "Comedy",
      "Action",
      "Non-Fiction",
      "Animated",
      "Sci-Fi and Fantasy",
      "Drama",
      "Romance",
    ],
    subgenre: [
      "Western",
      "Asian",
      "Kids",
      "Teens",
      "Based on Book/Game",
      "Music",
      "Sports",
      "Crime/Thriller",
    ],
    // decade: ["60s", "70s", "80s", "90s", "2000s", "2010s", "2020s", "ALL!"],
  };

  const quizOptionsKeys = Object.keys(quizOptions);

  //use States
  const [optionCount, setOptionCount] = useState(0);
  const [endOfQuiz, setEndOfQuiz] = useState(false);
  const [responses, setResponses] = useState([]);
  const [history, setHistory] = useState([]);

  //use Effects
  useEffect(() => {
    console.log("responses", responses);
    setQuestionCount(optionCount);
  }, [optionCount]);

  useEffect(() => {
    handleGetResponseHistory();
  }, []);

  //handler Functions
  const handleOptionClick = () => {
    setOptionCount((previous) => {
      if (previous + 1 === 6) {
        setEndOfQuiz(true);
      }
      return previous + 1;
    });
  };

  const addResponseHistory = async () => {
    const newResponse = await fetch(`${BASE_URL}/result`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: responses[0],
        type: responses[1],
        audio: responses[2],
        subtitle: responses[3],
        genre: responses[4],
        sub_genre: responses[5],
        decade: responses[6],
      }),
    });
  };

  const handleGetResponseHistory = async () => {
    let fetchedData = await fetch(`${BASE_URL}/history`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let historyData = await fetchedData.json();
    setHistory([...historyData]);
  };

  return (
    <>
      {endOfQuiz ? (
        <ResultPage
          responses={responses}
          addResponseHistory={addResponseHistory}
          endOfQuiz={endOfQuiz}
        ></ResultPage>
      ) : (
        quizOptions[quizOptionsKeys[optionCount]].map((option, index) => (
          <input
            className="quizCard"
            type="button"
            value={option}
            key={index}
            onClick={(e) => {
              handleOptionClick();
              setResponses((previous) => {
                return [...previous, e.target.value];
              });
            }}
          ></input>
        ))
      )}
    </>
  );
};

export default QuizCard;
