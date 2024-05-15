import "./QuizCard.css";

const QuizCard = () => {
  const options = {
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
    decade: [
      "60s",
      "70s",
      "80s",
      "90s",
      "2000s",
      "2010s",
      "2020 ~ now",
      "ALL!",
    ],
  };
  const countryMapping = options.country.map((option, index) => (
    <p key={index}>{option}</p>
  ));
  return (
    <>
      {options.country.map((option, index) => (
        <div className="quizCard" key={index}>
          <p>{option}</p>
        </div>
      ))}
    </>
  );
};

export default QuizCard;
