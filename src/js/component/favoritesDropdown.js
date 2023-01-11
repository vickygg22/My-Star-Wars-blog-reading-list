import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";

const FavoritesDropdown = () => {
    const { store, actions } = useContext(Context)
    const [count, setCount] = useState([])

    const dropdownFav = store.favorites.map((favorite, i) => {
        return (
            <a className="dropdown-item" href="#">{favorite}<i class="fas fa-solid fa-trash"></i></a>
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
        <a className="dropdown-item" href="#">{dropdownFav}</a>
    </div>
</div>
)
} 
export default FavoritesDropdown;