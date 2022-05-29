import React, { useEffect, useState } from "react";
import Header from "../components/Header";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
        setRandomBeer(responseJson);
      })
      .catch((err) => console.log(err));
  }, []);

  if (randomBeer === null) {
    return <h3>...Loading</h3>;
  }
  return (
    <div>
      <Header />

      <img src={randomBeer.image_url} alt="beer" width={"100px"} />
      <h1>{randomBeer.name}</h1>
      <h3>{randomBeer.tagline}</h3>
      <h4>{randomBeer.contributed_by}</h4>
    </div>
  );
}

export default RandomBeer;
