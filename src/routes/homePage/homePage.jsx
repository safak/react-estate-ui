import Searchbar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function homePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos
            consequatur doloribus, aliquam, iusto, itaque possimus obcaecati
            quaerat dolorem aperiam eligendi corporis nemo reprehenderit
            officiis quibusdam quidem blanditiis! A, facilis?
          </p>
          <Searchbar></Searchbar>

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience+</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Properties Sold</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default homePage;
