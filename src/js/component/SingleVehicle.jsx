import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const SingleVehicle = (props) => {
    const [vehicleUrl, setVehicleUrl] = useState(props.url)
    const [vehicleProperty, setVehicleProperty] = useState([])

    const { store, actions } = useContext(Context)

    const getVehicles = async () => {
        await fetch(vehicleUrl)
        .then(res => res.json())
        .then(data => {
            setVehicleProperty(data.result.properties)
        })
    }

    useEffect(() => {
        getVehicles()
    }, [vehicleUrl])

    const handleVehicleFavoritesClick = () => {
        actions.addFavorites(vehicleProperty.name)
    }

    return (
        <div className="card">
            <img className="card-img-top imgSize" src="https://via.placeholder.com/400x200" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{vehicleProperty.name}</h5>
                <p className="card-text">Model: {vehicleProperty.model}</p>
                <p className="card-text1">Passengers: {vehicleProperty.passengers}</p>
                <Link to={`/vehicles/${props.vehicle.uid}`}>
					<button className="btn btn-outline-primary">Learn more!</button>
				</Link>
                <a href="#" className="btn btn-outline-warning float-end" onClick={handleVehicleFavoritesClick}><i className="fas fa-regular fa-heart"></i></a>
            </div>
        </div>
    )
}
export default SingleVehicle;