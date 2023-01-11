import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SinglePlanet = (props) => {
    const [planetUrl, setPlanetUrl] = useState(props.url)
    const [planetProperty, setPlanetProperty] = useState([])

    const getPlanets = async () => {
        await fetch(planetUrl)
        .then(res => res.json())
        .then(data => {
            setPlanetProperty(data.result.properties)
            
        })
    }

    useEffect(() => {
        getPlanets()
    }, [planetUrl])

    return (
        <div className="card">
            <img className="card-img-top imgSize" src="https://via.placeholder.com/400x200" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{planetProperty.name}</h5>
                <p className="card-text">Population: {planetProperty.population}</p>
                <p className="card-text1">Terrain: {planetProperty.terrain}</p>
                <Link to={`/planets/${props.planet.uid}`}>
					<button className="btn btn-outline-primary">Learn more!</button>
				</Link>
                <a href="#" className="btn btn-outline-warning float-end"><i className="fas fa-regular fa-heart"></i></a>
            </div>
        </div>
    )
}
export default SinglePlanet;