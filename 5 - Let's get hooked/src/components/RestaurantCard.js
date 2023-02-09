import {IMG_CDN_URL} from "../constants";

const RestaurantCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString}) =>{
    return (
        <div className="card">
            <img alt="Restaurant Image" src={IMG_CDN_URL+cloudinaryImageId}></img>
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{lastMileTravelString}</h5>
        </div>
    )
}

export default RestaurantCard;