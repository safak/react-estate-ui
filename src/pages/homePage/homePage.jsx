import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

const homePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit iure
            optio recusandae vitae numquam cupiditate rem ullam architecto,
            maiores sunt fuga veniam voluptas unde quasi molestias! Dolorum
            natus officia vel.
          </p>
          <SearchBar />

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default homePage;
