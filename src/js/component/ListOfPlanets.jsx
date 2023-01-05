import React, { useState } from "react";
import SinglePlanet from "./SinglePlanet.jsx";

const ListOfPlanets = () => {
    const [planets, setPlanets] = useState([])
    fetch("https://www.swapi.tech/api/planets/")
    .then(res => res.json())
    .then(data =>
        setPlanets(data.results)
    )
    .catch(err => console.error(err))
    return (
        <div>
            <h2 className="text-danger mt-5 mb-4">Planets</h2>
            <div className="row flex-nowrap scrolling">
            {planets.map(planet => {return <SinglePlanet planet={planet}/>})}
            </div>
        </div>
    )
}
export default ListOfPlanets;