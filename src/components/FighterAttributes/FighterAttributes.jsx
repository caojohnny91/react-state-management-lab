const FighterAttributes = (attributes) => {
  const { img, name, price, strength, agility, handleAddFighter } = attributes;

  return (
    <li>
      <img src={img} />
      <p>{name}</p>
      <p>Price: {price}</p>
      <p>Strength: {strength}</p>
      <p>Agility: {agility}</p>
      <button onClick={handleAddFighter}>Add</button>
    </li>
  );
};

export default FighterAttributes;
