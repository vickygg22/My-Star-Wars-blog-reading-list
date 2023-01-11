import React, { useState, useEffect } from "react";
import SinglePlanet from "./SinglePlanet.jsx";

const ListOfPlanets = () => {
    const [planets, setPlanets] = useState([])


     useEffect(() => {
         fetch("https://www.swapi.tech/api/planets/")
             .then(res => res.json())
             .then(data =>
                 setPlanets(data.results)
             )
             .catch(err => console.error(err))
     }, [])

    return (
        <div>
            <h2 className="text-danger mt-5 mb-4">Planets</h2>
            <div className="row flex-nowrap scrolling">
            {planets.map((planet, index) => {return <SinglePlanet url={planet.url} planet={planet} key={index}/>})}
            </div>
        </div>
    )
}
export default ListOfPlanets;