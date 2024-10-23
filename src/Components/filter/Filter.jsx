import React from "react";
import "./Filter.scss";

const Filter = () => {
  return (
    <div className="filter">
      <h1>
        Search Results for <b>Palghar</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="resorts">Resorts</option>
            <option value="hotels">Hotels</option>
            <option value="rooms">Rooms</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="Property">Property</label>
          <select name="property" id="property">
            <option value="Beach Resort">Beach Resort</option>
            <option value="Mountain Resort">Mountain Resort</option>
            <option value="Spa & Wellness Resort">Spa & Wellness Resort</option>
            <option value="All-Inclusive Resort">All-Inclusive Resort</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="Min Price"
          />
        </div>
        <div className="item">
          <label htmlFor="city">Max- Price</label>
          <input
            type="number"
            id="maxprice"
            name="maxprice"
            placeholder="Max Price"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Rooms</label>
          <input type="text" id="bedroom" name="bedroom" placeholder="Rooms" />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
