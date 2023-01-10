import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const VehicleDetails = () => {
    const [vehicleDetails, setVehicleDetails] = useState([])
    const { id } = useParams()
    const location = useLocation()
    console.log(location)
    useEffect(() => {
        fetch(`https://www.swapi.tech/api${location.pathname}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.result.properties)
            setVehicleDetails(data.result.properties)
        })
    }, [])

    return (
        <div className="container">
            <div className="detailMainDiv">
            <img className="detailImg" src="https://via.placeholder.com/800x600"></img>
            <div className="detailText">
                <h1>{vehicleDetails.name}</h1>
                <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet vestibulum turpis. Morbi condimentum efficitur massa, a congue nibh malesuada sed. Maecenas felis leo, rutrum ut nisl ac, semper ultrices mi. Cras efficitur dui eget magna suscipit vulputate. In hac habitasse platea dictumst. Vestibulum quis nisi ultrices, ornare est nec, congue felis. Aenean suscipit placerat metus id vestibulum. Integer pretium turpis ut finibus pretium. Quisque ac velit magna. Aliquam egestas ornare nulla, et tempus velit sagittis at.</p>
            </div>
            </div>
            <div className="setOfDetails">
                <div className="sectionOfDetails">
                    <div>
                        Name
                    </div>
                    <ul>
                        <li>{vehicleDetails.name}</li>
                    </ul>
                </div>
                <div className="sectionOfDetails">
                    <div>
                        Model
                    </div>
                    <ul>
                        <li>{vehicleDetails.model}</li>
                    </ul>
                </div>
                <div className="sectionOfDetails">
                    <div>
                        Passengers
                    </div>
                    <ul>
                        <li>{vehicleDetails.passengers}</li>
                    </ul>
                </div>
                <div className="sectionOfDetails">
                    <div>
                        Crew
                    </div>
                    <ul>
                        <li>{vehicleDetails.crew}</li>
                    </ul>
                </div>
                <div className="sectionOfDetails">
                    <div>
                        Consumables
                    </div>
                    <ul>
                        <li>{vehicleDetails.consumables}</li>
                    </ul>
                </div>
                <div className="sectionOfDetails">
                    <div>
                        Vehicle Class
                    </div>
                    <ul>
                        <li>{vehicleDetails.vehicle_class}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default VehicleDetails;