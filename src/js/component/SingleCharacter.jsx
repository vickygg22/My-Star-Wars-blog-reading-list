import React from "react";
import { Link } from "react-router-dom";

const SingleCharacter = (props) => {
    console.log(props.properties)
    return (
        <div className="card">
            <img className="card-img-top imgSize" src="https://via.placeholder.com/400x200" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.character.name}</h5>
                <p className="card-text">Gender: </p>
                <p className="card-text1">Hair Color: </p>
                <p className="card-text1">Eye-Color: </p>
                <Link to={`/people/${props.character.uid}`}>
					<button className="btn btn-outline-primary">Learn more!</button>
				</Link>
                <a href="#" className="btn btn-outline-warning float-end"><i className="fas fa-regular fa-heart"></i></a>
            </div>
        </div>
    )
}
export default SingleCharacter;