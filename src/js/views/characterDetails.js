import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const CharacterDetails = () => {
    const [details, setDetails] = useState([])
    const { id } = useParams()
    const location = useLocation()

    
    useEffect(() => {
        fetch(`https://www.swapi.tech/api${location.pathname}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.result.properties)
            setDetails(data.result.properties)
        })
    }, [])

    return (
        <div className="container">
            <div className="detailMainDiv">
            <img className="detailImg" src="https://via.placeholder.com/800x600"></img>
            <div className="detailText">
                <h1>{details.name}</h1>
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
                        <li>{details.name}</li>
                    </ul>
                </div>
                <div className="sectionOfDetails">
                    <div>
                        Birth Year
                    </div>
                    <ul>
                        <li>{details.birth_year}</li>
                    </ul>
                </div>
                <div className="sectionOfDetails">
                    <div>
                        Gender
                    </div>
                    <ul>
                        <li>{details.gender}</li>
                    </ul>
                </div>
                <div className="sectionOfDetails">
                    <div>
                        Height
                    </div>
                    <ul>
                        <li>{details.height}</li>
                    </ul>
                </div>
                <div className="sectionOfDetails">
                    <div>
                        Skin Color
                    </div>
                    <ul>
                        <li>{details.skin_color}</li>
                    </ul>
                </div>
                <div className="sectionOfDetails">
                    <div>
                        Eye Color
                    </div>
                    <ul>
                        <li>{details.eye_color}</li>
                    </ul>
                </div>
                {/* <ul className="firstUl">
                    <li>Name {details.name}</li>
                    <li>Birth Year<br/>{details.birth_year}</li>
                    <li>Gender <br/>{details.gender}</li>
                    <li>Height<br/>{details.heigth}</li>
                    <li>Skin Color<br/>{details.skin_color}</li>
                    <li>Eye Color<br/>{details.eye_color}</li>
                </ul> */}
                {/* <ul className="secondUl">
                    <li>{details.name}</li>
                    <li>{details.birth_year}</li>
                    <li>{details.gender}</li>
                    <li>{details.height}</li>
                    <li>{details.skin_color}</li>
                    <li>{details.eye_color}</li>
                </ul> */}
            </div>
        </div>
    )
}
export default CharacterDetails;