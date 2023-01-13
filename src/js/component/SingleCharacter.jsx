import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const SingleCharacter = (props) => {
    const [url, setUrl] = useState(props.url)

    const [property, setProperty] = useState([])

    const { store, actions } = useContext(Context)

    const getCharts = async () => {
        await fetch(url)
        .then(res => res.json())
        .then(data => {
            setProperty(data.result.properties)
        })
    }

    useEffect(() => {
        getCharts()
    }, [url])
    
    const handleFavoritesClick = () => {
        actions.addFavorites(property.name);
        console.log("adding fav function worked")
    }

    return (
            <div className="card">
            <img className="card-img-top imgSize" src="https://via.placeholder.com/400x200" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{property.name}</h5>
                <p className="card-text">Gender: {property.gender}</p>
                <p className="card-text1">Hair Color: {property.hair_color}</p>
                <p className="card-text1">Eye-Color: {property.eye_color}</p>
                <Link to={`/people/${props.character.uid}`}>
					<button className="btn btn-outline-primary">Learn more!</button>
				</Link>
                <a href="#" className="btn btn-outline-warning float-end" onClick={handleFavoritesClick}><i className="fas fa-regular fa-heart"></i></a>
            </div>
        </div>
    )
}
export default SingleCharacter;