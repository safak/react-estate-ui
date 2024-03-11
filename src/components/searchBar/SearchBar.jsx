import "./searchBar.scss";

function Searchbar() {
  return (
    <div className="searchBar">
      <div className="type"></div>
      <form>
        <input type="text" name="location" placeholder="City Location"></input>
        <input type="number" name="minPrice"min={0}max={1000000} placeholder="Min Price"></input>
        <input type="number" name="maxPrice"min={0}max={1000000} placeholder="Max Price"></input>
      <button>
        <img src="/search.png" alt=""></img>
      </button>
      
      
      </form>
    </div>
  );
}

export default Searchbar;
