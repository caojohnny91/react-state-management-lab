const FighterAttributes = (attributes) => {
    const{img, name, price, strength, agility} = attributes;

    return (
        <ul>
            <img src={img}/>
            <li>{name}</li>
            <li>Price: {price}</li>
            <li>Strength: {strength}</li>
            <li>Agility: {agility}</li>
            <button onClick={() => handleAddFighter({name})}>Add</button>
        </ul>

    )
}

export default FighterAttributes;