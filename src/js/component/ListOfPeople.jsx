import React, { useState, useEffect } from "react";
import SingleCharacter from "./SingleCharacter.jsx";
const ListOfPeople = () => {
    const [characters, setCharacters] = useState([])
    // const [ids, setIds] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [properties, setProperties] = useState([])
    
//     ids.map(id => {fetch(`https://www.swapi.tech/api/people/${id}`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         setProperties(data.result.properties)
//     }
//     )
//     .catch(err => console.error(err))
//     console.log(properties)
// })


    useEffect( () => { 
                fetch("https://www.swapi.tech/api/people/")
                            .then(res => res.json())
                            .then(data => {
                                setCharacters(data.results)
                                data.results.forEach((item) => {
                                fetch(item.url)
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data)
                            })
                        })
                            }
                            )
                    .catch(err => console.error(err))
    }, [])
    

    return (
        <div>
            <h2 className="text-danger mb-4">Characters</h2>
            <div className="row flex-nowrap scrolling">
            {characters.map((character, index) => {return <SingleCharacter character={character} key={index} properties={properties}/>})}
            </div>
        </div>
    )
}
export default ListOfPeople;