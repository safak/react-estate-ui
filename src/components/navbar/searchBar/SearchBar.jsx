import React, { useState } from 'react';
import "./searchBar.scss";
  
// creating an array of types
const types = ["buy", "rent"];

export default function SearchBar() {
  // Creating a usestate hook that will store type min and max price
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  })
  // creating a function to change a type from rent to buy

  const switchType = (val) => {
    // We are changing only the type by using setquery
    setQuery((prev) => ({ ...prev, type: val }));

  };

  return (
    <div className='searchBar'>
      <div className="type">
        {/* Paaing a function when you click on the button from buy to rent and vice versa */}
        {types.map((type) => (
          // if query.type is equal to type of this button give it a classname as active otherwise it is empty
          <button key={type} onClick={() => switchType(type)} className={query.type === type ? "active" : ""}>
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name='location' placeholder='City Location' />
        <input
          type="number"
          name='minPrice'
          min={0}
          max={10000000}
          placeholder='Min Price'
        />
        <input
          type="number"
          name='maxPrice'
          min={0}
          max={10000000}
          placeholder='Max Price'
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  )
}
