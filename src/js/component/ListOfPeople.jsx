// import React, { useContext } from "react";
// import { Context } from "../store/appContext.js";
import React, {useState, useEffect} from "react";
import SingleCharacter from "./SingleCharacter.jsx";
const ListOfPeople = () => {
    // const {store, actions} = useContext(Context)

    // console.log(store.characters)

    const [characters, setCharacters] = useState([])

    const [properties, setProperties] = useState([])


    useEffect( () => { 
                fetch("https://www.swapi.tech/api/people/")
                            .then(res => res.json())
                            .then(data => {
                                setCharacters(data.results)
                            }
                            )
                    .catch(err => console.error(err))
    }, [])
    

    return (
        <div>
            <h2 className="text-danger mb-4">Characters</h2>
            <div className="row flex-nowrap scrolling">
            {characters.map((character) => {return <SingleCharacter url={character.url} character={character} key={character.uid} properties={properties}/>})}
            </div>
        </div>
    )
}
export default ListOfPeople;