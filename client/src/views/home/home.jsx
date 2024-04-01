import { useEffect, useState } from "react";
import './home.styles.css';
import Cards from "../../components/cards/cards"
import Navbar from "../../components/navbar/navbar"


function Home() {
  


  return (
    <div className="home">
      <p>HOME</p>
      <Navbar />
      <Cards />
    </div>
  );
}

export default Home;
