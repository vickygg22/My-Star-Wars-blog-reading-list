import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const PlanetDetails = () => {
    const [planetDetails, setPlanetDetails] = useState([])
    const { id } = useParams()
    const location = useLocation()
    console.log(location)
    useEffect(() => {
        fetch(`https://www.swapi.tech/api${location.pathname}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.result.properties)
            setPlanetDetails(data.result.properties)
        })
    }, [])

    return (
        <div className="container">
            <div className="detailMainDiv">
            <img className="detailImg" src="https://via.placeholder.com/800x600"></img>
            <div className="detailText">
                <h1>{planetDetails.name}</h1>
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
                        <li>{planetDetails.name}</li>
                    </ul>
                </div>
                <div className="sectionOfDetails">
                    <div>
                        Climate
                    </div>
                    <ul>
                        <li>{planetDetails.climate}</li>
                    </ul>
                </div>
                <div className="sectionOfDetails">
                    <div>
                        Population
                    </div>
                    <ul>
                        <li>{planetDetails.population}</li>
                    </ul>
                </div>
                <div className="sectionOfDetails">
                    <div>
                        Orbital Period
                    </div>
                    <ul>
                        <li>{planetDetails.orbital_period}</li>
                    </ul>
                </div>
                <div className="sectionOfDetails">
                    <div>
                        Rotation Period
                    </div>
                    <ul>
                        <li>{planetDetails.rotation_period}</li>
                    </ul>
                </div>
                <div className="sectionOfDetails">
                    <div>
                        Diameter
                    </div>
                    <ul>
                        <li>{planetDetails.diameter}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default PlanetDetails;