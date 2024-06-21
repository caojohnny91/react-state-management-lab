const FighterAttributes = (attributes) => {
    const{img, name, strength, agility} = attributes;

    return (
        <ul>
            <img src={img}/>
            <li>{name}</li>
            <li>Strength: {strength}</li>
            <li>Agility: {agility}</li>
            <button onClick>Add</button>
        </ul>

    )
}

export default FighterAttributes;