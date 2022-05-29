import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handletaglineChange = (e) => setTagline(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleFirst_brewedChange = (e) => setFirst_brewed(e.target.value);
  const handleBrewers_tipsChange = (e) => setBrewers_tips(e.target.value);
  const handleAttenuation_levelChange = (e) =>
    setAttenuation_level(e.target.value);
  const handleContributed_byChange = (e) => setContributed_by(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // donde vamos a enviar la info para crear una nueva cerveza

      const newBeer = {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
      };

      await fetch.post("https://ironbnb-m3.herokuapp.com/beers", newBeer);
      navigate("/new");
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
      <Header />

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <label htmlFor="name">Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handletaglineChange}
        />
        <br />
        <label htmlFor="name">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <br />
        <label htmlFor="name">First_brewed</label>
        <input
          type="text"
          name="first_brewed"
          value={first_brewed}
          onChange={handleFirst_brewedChange}
        />
        <br />
        <label htmlFor="name">Brewers_tips</label>
        <input
          type="text"
          name="brewers_tips"
          value={brewers_tips}
          onChange={handleBrewers_tipsChange}
        />
        <br />
        <label htmlFor="name">Attenuation_level</label>
        <input
          type="text"
          name="attenuation_level"
          value={attenuation_level}
          onChange={handleAttenuation_levelChange}
        />
        <br />
        <label htmlFor="name">Contributed_by</label>
        <input
          type="text"
          name="contributed_by"
          value={contributed_by}
          onChange={handleContributed_byChange}
        />
        <br />

        <button>Add Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
