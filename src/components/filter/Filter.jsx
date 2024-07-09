import './filter.scss';


const Filter = () => {
  return (
    <div className="filter">
      <h1>
        Search results for <b>Nigeria</b>
      </h1>
      {/* top */}
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="city location"
          />
        </div>
      </div>

      {/* bottom */}
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minprice">Min price</label>
          <input
            type="number"
            name="minprice"
            id="minprice"
            min={0}
            max={10000000}
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxprice">Max price</label>
          <input
            type="number"
            name="maxprice"
            id="maxprice"
            min={0}
            max={10000000}
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="text"
            name="bedroom"
            id="bedroom"
            placeholder="any"
          />
        </div>
        <button>
          <img src="search.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Filter;