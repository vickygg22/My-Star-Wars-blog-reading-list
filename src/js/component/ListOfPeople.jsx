import React, { useState } from "react";
import SingleCharacter from "./SingleCharacter.jsx";
const ListOfPeople = () => {
    const [characters, setCharacters] = useState([])
    fetch("https://www.swapi.tech/api/people/")
    .then(res => res.json())
    .then(data =>
        setCharacters(data.results)
    )
    .catch(err => console.error(err))

    return (
        <div>
            <h2 className="text-danger mb-4">Characters</h2>
            <div className="row flex-nowrap scrolling">
            {characters.map(character => {return <SingleCharacter character={character}/>})}
            </div>
        </div>
    )
}
export default ListOfPeople;