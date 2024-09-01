import SearchBar from "../../components/searchbar/SearchBar.jsx";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate $ Get Your Dream Place </h1>
          <p>
            The Future of Real Estate is a five episode series that profiles
            global CEOs on the forces shaping our buildings and cities in a time
            of unprecedented change. Each episode explores topics that include
            hybrid work, housing affordability, resilience, decarbonization and
            real estate in the metaverse.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property readly</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="background" />
      </div>
    </div>
  );
}

export default HomePage;
