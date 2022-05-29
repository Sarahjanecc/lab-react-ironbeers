import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <li>
        <Link to="list">
          <h3>All Beers</h3>
        </Link>
        <Link to="random">
          <h3>Random Beer</h3>
        </Link>
        <Link to="new">
          <h3>New Beer</h3>
        </Link>
      </li>
    </div>
  );
}

export default Home;
