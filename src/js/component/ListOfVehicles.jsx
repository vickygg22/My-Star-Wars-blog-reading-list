import React, { useState } from "react";
import SingleVehicle from "./SingleVehicle.jsx";

const ListOfVehicles = () => {
    const [vehicles, setVehicles] = useState([])
    fetch("https://www.swapi.tech/api/vehicles/")
    .then(res => res.json())
    .then(data =>
        setVehicles(data.results)
    )
    .catch(err => console.error(err))
    return (
        <div>
            <h2 className="text-danger mt-5 mb-4">Vehicles</h2>
            <div className="row flex-nowrap scrolling">
            {vehicles.map(vehicle => {return <SingleVehicle vehicle={vehicle}/>})}
            </div>
        </div>
    )
}
export default ListOfVehicles;