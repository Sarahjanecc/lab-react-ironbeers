import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

function SingleBeer() {
  const { id } = useParams();

  const [detailBeer, setDetailBeer] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          console.log(responseJson);
          setDetailBeer(responseJson);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  if (detailBeer === null) {
    return <h3>...Loading</h3>;
  }
  return (
    <div>
      <Header />
      <h2>Beer Details</h2>
      <img src={detailBeer.image_url} alt="beer" width={"100px"} />
      <h1>{detailBeer.name}</h1>
      <h3>{detailBeer.tagline}</h3>
      <h4>{detailBeer.contributed_by}</h4>
    </div>
  );
}

export default SingleBeer;
