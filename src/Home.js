import React from "react";
import Banner from "./components/Banner";
import "./Home.css";
import Cards from "./components/Cards";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="cards__heading">
        <h1>Explore</h1>
        <h3>
          Beachfront villas to high rise apartments and penthouses, experience
          your next stay with Stella.
        </h3>
      </div>
      <div className="home__section">
        <Cards
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="Cozy Beachfront Villa | Private Pool | 4BDR"
          description="Dubai . 8 guests"
          price="from AED 2500/night"
        />
        <Cards
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="Cozy Beachfront Villa | Private Pool | 4BDR"
          description="Dubai . 8 guests"
          price="from AED 2500/night"
        />
        <Cards
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="Cozy Beachfront Villa | Private Pool | 4BDR"
          description="Dubai . 8 guests"
          price="from AED 2500/night"
        />
      </div>
    </div>
  );
}

export default Home;
