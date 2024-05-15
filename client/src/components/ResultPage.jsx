const ResultPage = ({ responses }) => {
  //use state

  //use effect

  //handler func
  const uploadToDatabase = async () => {
    const response = await fetch(`${BASE_URL}/result`, {
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

  return (
    <>
      <h3>end of quiz! Please wait for your results</h3>
      <p>{responses}</p>
    </>
  );
};

export default ResultPage;

//post request. save to history page , show history tab
