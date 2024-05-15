import { useState, useEffect } from "react";
import "./QuizCard.css";
import ResultPage from "./ResultPage";

const QuizCard = ({ questionCount, setQuestionCount }) => {
  const quizOptions = {
    country: ["Japan", "USA"],
    type: ["Movie", "Series"],
    audio: ["Japanese", "English", "Chinese", "Spanish", "Korean"],
    subtitle: ["Japanese", "English", "Chinese", "Spanish"],
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
    decade: ["60s", "70s", "80s", "90s", "2000s", "2010s", "2020s", "ALL!"],
  };

  const quizOptionsKeys = Object.keys(quizOptions);

  //use States
  const [optionCount, setOptionCount] = useState(0);
  const [endOfQuiz, setEndOfQuiz] = useState(false);
  const [responses, setResponses] = useState([]);

  //use Effects
  useEffect(() => {
    console.log("responses", responses);
    setQuestionCount(optionCount);
  }, [optionCount]);

  //handler Functions
  const handleClick = () => {
    setOptionCount((previous) => {
      if (previous + 1 === 7) {
        setEndOfQuiz(true);
      }
      return previous + 1;
    });
  };

  return (
    <>
      {endOfQuiz ? (
        <ResultPage responses={responses}></ResultPage>
      ) : (
        quizOptions[quizOptionsKeys[optionCount]].map((option, index) => (
          <input
            className="quizCard"
            type="button"
            value={option}
            key={index}
            onClick={(e) => {
              handleClick();
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
