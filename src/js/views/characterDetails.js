import React from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
    const { id } = useParams()

    return (
        <div className="container">
            <div className="detailMainDiv">
            <img className="detailImg" src="https://via.placeholder.com/800x600"></img>
            <div className="detailText">
                <h2>Name</h2>
                <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet vestibulum turpis. Morbi condimentum efficitur massa, a congue nibh malesuada sed. Maecenas felis leo, rutrum ut nisl ac, semper ultrices mi. Cras efficitur dui eget magna suscipit vulputate. In hac habitasse platea dictumst. Vestibulum quis nisi ultrices, ornare est nec, congue felis. Aenean suscipit placerat metus id vestibulum. Integer pretium turpis ut finibus pretium. Quisque ac velit magna. Aliquam egestas ornare nulla, et tempus velit sagittis at.</p>
            </div>
            </div>
            <div>
                <ul>
                    <li>Name </li>
                    <li>Birth Year </li>
                    <li>Gender </li>
                    <li>Height </li>
                    <li>Skin Color</li>
                    <li>Eye Color</li>
                </ul>
            </div>
        </div>
    )
}
export default CharacterDetails;