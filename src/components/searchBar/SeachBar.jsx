import { useState } from "react";
import "./searchbar.scss";

const types = ["buy", "rent"];

const SeachBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="SeachBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="city location" />
        <input
          type="number"
          name="Min Price"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="Max Price"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button>
          <img src="search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SeachBar;
