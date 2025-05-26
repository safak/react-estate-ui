import React from 'react'
import "./homePage.scss"
import SearchBar from '../../components/navbar/searchBar/SearchBar';

// tHIS IS OUR FUNCTIONAL COMPONENETS
function HomePage() {
    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>
                        Find Real Estate Without any Headache
                        {/* & get your Dream Place. */}
                    </h1>
                    <p>
                        Situated in the heart of the city, this project offers 
                        easy access to major landmarks, business hubs, and entertainment areas, 
                        providing convenience and a vibrant lifestyle 
                    </p>
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>100</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200</h1>
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
}

export default HomePage
