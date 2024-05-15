import { useEffect } from "react";

const ResultPage = ({ responses, addResponseHistory, endOfQuiz }) => {
  //use state

  //use effect
  useEffect(() => {
    if (endOfQuiz === true) {
      addResponseHistory();
    }
  }, [endOfQuiz]);
  //handler func

  return (
    <>
      <h2>end of quiz! Please wait for your results</h2>
    </>
  );
};

export default ResultPage;

//post request. save to history page , show history tab
