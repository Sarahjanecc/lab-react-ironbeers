import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListBeers from "./pages/ListBeers";
import SingleBeer from "./pages/SingleBeer";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="beer/:id" element={<SingleBeer />} />
        <Route path="list" element={<ListBeers />} />
        <Route path="random" element={<RandomBeer />} />
        <Route path="new" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
