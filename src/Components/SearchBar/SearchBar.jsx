import React from "react";
import { useState } from "react";
import "./SearchBar.scss";
const types = ["resorts", "hotels"];

const SearchBar = () => {
  const [querry, setQuerry] = useState({
    type: types[0], // Initialize with the first type (e.g., "resorts")
    location: "",
    minPrice: "",
    maxPrice: "",
  });

  const switchType = (val) => {
    setQuerry((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchbar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)} // Pass the correct type value
            className={querry.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="location"
          placeholder="City Location "
          value={querry.location} // Bind the input to the state
          onChange={(e) =>
            setQuerry((prev) => ({ ...prev, location: e.target.value }))
          } // Handle location change
        />
        <img className="location " src="./loc.png" alt="" />
        <input
          type="number"
          min={0}
          max={10000000}
          placeholder="₹ Min Price"
          name="minPrice"
          value={querry.minPrice} // Bind the input to the state
          onChange={(e) =>
            setQuerry((prev) => ({ ...prev, minPrice: Number(e.target.value) }))
          } // Handle min price change
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="₹ Max Price"
          value={querry.maxPrice} // Bind the input to the state
          onChange={(e) =>
            setQuerry((prev) => ({ ...prev, maxPrice: Number(e.target.value) }))
          } // Handle max price change
        />
        <button type="submit">
          {" "}
          {/* Add type="submit" to the button */}
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
