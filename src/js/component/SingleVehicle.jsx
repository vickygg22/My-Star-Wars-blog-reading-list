import React from "react";

const SingleVehicle = (props) => {
    return (
        <div className="card">
            <img className="card-img-top imgSize" src="https://via.placeholder.com/400x200" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.vehicle.name}</h5>
                <p className="card-text">Model:</p>
                <p className="card-text1">Passengers:</p>
                <a href="#" className="btn btn-outline-primary">Learn more!</a>
                <a href="#" className="btn btn-outline-warning float-end"><i className="fas fa-regular fa-heart"></i></a>
            </div>
        </div>
    )
}
export default SingleVehicle;