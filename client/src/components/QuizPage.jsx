import QuizCard from "./QuizCard";
import "./QuizPage.css";

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
