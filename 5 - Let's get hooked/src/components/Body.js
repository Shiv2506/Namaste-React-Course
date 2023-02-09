import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchTxt, restaurants) {
    const filteredData = restaurants.filter((restaurant) => restaurant?.data?.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
    return filteredData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchTxt, setSearchTxt] = useState("");
  //   const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);
 
  return (
    <>
      <div className="search-container">
        <input
        className="search-input"
          type="text"
          placeholder="Search a restaurant you want .."
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchTxt, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
