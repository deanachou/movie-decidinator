import { useEffect, useState } from "react";
import QuizCard from "./QuizCard";
import "./QuizPage.css";

const QuizPage = () => {
  const quizQuestions = [
    "What country are you watching from?",
    "What type of content do you want to watch?",
    "What language audio do you want to listen to?",
    "What language subtitles do you need?",
    "Pick a genre!",
    "Choose another sub-genre!",
    "When should it be from?",
  ];
  //use states

  const [questionCount, setQuestionCount] = useState(0);

  //use effects

  //handler functions

  return (
    <section>
      {/* {questions.map((question, index) => (
        <h2 className="question" key={index}>
          {question}
        </h2>
      ))} */}

      <h2 className="question">{quizQuestions[questionCount]}</h2>

      <div className="cardContainer">
        <QuizCard></QuizCard>
      </div>
    </section>
  );
};

export default QuizPage;
