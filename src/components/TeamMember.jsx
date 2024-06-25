import { useState } from "react";
// import App from "../App.jsx";
// import FighterAttributes from "./FighterAttributes/FighterAttributes.jsx";

const TeamMember = ({ team, handleRemoveFighter }) => {
  return (
    <ul>
      {team.map((fighter, index) => (
        <li key={index}>
          <img src={fighter.img} />
          <p>{fighter.name}</p>
          <p>Price: {fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TeamMember;
