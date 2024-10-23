import React from "react";
import "./Home2.scss";
import SearchSection from "../SearchBar/Search2";

const Home2 = () => {
  return (
    <div>
      <div className="mainn">
        <div className="text">
          <h1>Travel Memories You'll Never Forget</h1>
          <p>
            From local escapes to far-flung adventures, find what makes you
            happy anytime, anywhere
          </p>
          <SearchSection />
        </div>
      </div>
    </div>
  );
};

export default Home2;
