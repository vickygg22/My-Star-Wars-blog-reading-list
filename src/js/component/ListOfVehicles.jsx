import React, { useState, useEffect } from "react";
import SingleVehicle from "./SingleVehicle.jsx";

const ListOfVehicles = () => {
    const [vehicles, setVehicles] = useState([])
    // useEffect(() => {
    //     fetch("https://www.swapi.tech/api/vehicles/")
    // .then(res => res.json())
    // .then(data => {
    //     setVehicles(data.results)
    // })
    // .catch(err => console.error(err))
    // }, [])
    return (
        <div>
            <h2 className="text-danger mt-5 mb-4">Vehicles</h2>
            <div className="row flex-nowrap scrolling">
            {vehicles.map((vehicle, index) => {return <SingleVehicle vehicle={vehicle} key={index}/>})}
            </div>
        </div>
    )
}
export default ListOfVehicles;