import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";

const FavoritesDropdown = () => {
    const { store, actions } = useContext(Context)
    const [count, setCount] = useState([])

    // const handleDeleteClick = () => {
    //     actions.deleteFavorites();
    //     console.log("removing fav function worked")
    // }

    const dropdownFav = store.favorites.map((favorite, i) => {
        return (
            <span className="dropdown-item" key={i} href="#" >
                {favorite}<i className="fas fa-solid fa-trash" onClick={() => {actions.deleteFavorites(i); console.log(i)}}></i>
            </span>
        )
    })

return store.favorites.length === 0 ? (
    <div className="dropdown favDropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Favorites <div className="numberOfFavs">{store.favorites.length}</div>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">(Empty)</a>
        </div>
    </div>
) : (
    <div className="dropdown favDropdown">
    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Favorites <div className="numberOfFavs">{store.favorites.length}</div>
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {dropdownFav}
    </div>
</div>
)
} 
export default FavoritesDropdown;