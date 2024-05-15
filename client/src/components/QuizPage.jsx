import QuizCard from "./QuizCard";
import "./QuizPage.css";

const questions = [
  "What country are you watching from?",
  "What type of content do you want to watch?",
  "What language audio do you want to listen to?",
  "What language subtitles do you need?",
  "Pick a genre!",
  "Choose another sub-genre!",
  "When should it be from?",
];

const QuizPage = () => {
  return (
    <section>
      <h2 className="question">What country are you watching from?</h2>
      <div className="cardContainer">
        <QuizCard></QuizCard>
      </div>
    </section>
  );
};

export default QuizPage;
