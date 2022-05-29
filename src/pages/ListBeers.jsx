import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function ListBeers() {
  const [beerList, setBeerList] = useState(null);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
        setBeerList(responseJson);
      })
      .catch((err) => console.log(err));
  }, []);

  if (beerList === null) {
    return <h3>...Loading</h3>;
  }
  return (
    <div>
      <Header />

      {beerList.map((beer) => {
        return (
          <li>
            <img src={beer.image_url} alt="beer" width={"100px"} />
            <Link to={`/beer/${beer._id}`}>
              <h2>{beer.name}</h2>
            </Link>
            <h3>{beer.tagline}</h3>
            <h4>{beer.contributed_by}</h4>
          </li>
        );
      })}
    </div>
  );
}

export default ListBeers;
