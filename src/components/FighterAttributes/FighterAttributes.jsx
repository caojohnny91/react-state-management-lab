const FighterAttributes = (attributes) => {
  const { img, name, price, strength, agility } = attributes;

  return (
    <li>
      <img src={img} />
      <p>{name}</p>
      <p>Price: {price}</p>
      <p>Strength: {strength}</p>
      <p>Agility: {agility}</p>
      <button onClick={() => handleAddFighter({ name })}>Add</button>
    </li>
  );
};

export default FighterAttributes;
