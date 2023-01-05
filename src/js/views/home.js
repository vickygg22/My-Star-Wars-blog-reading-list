import React from "react";
import ListOfPeople from "../component/ListOfPeople.jsx";
import ListOfPlanets from "../component/ListOfPlanets.jsx";
import ListOfVehicles from "../component/ListOfVehicles.jsx";
import "../../styles/home.css";

export const Home = () => (
	<div className="container">
		<ListOfPeople />
		<ListOfPlanets />
		<ListOfVehicles />
	</div>
);
