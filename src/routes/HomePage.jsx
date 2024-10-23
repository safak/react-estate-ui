import "./HomePage.scss";
import React, { useRef, useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar/SearchBar";
import { listData } from "../Lib/dummydata";
import CardGrid from "../Components/Cardgrid/Cardgrid"; // Import the updated CardGrid
import MyMap from "../Components/Map/MyMap"; // Ensure you're importing the correct map component
import Navbar from "../Components/Navbar/Navbar"; // Import your Navbar component
import DrawerComponent from "../Components/Card/New";
import AirbnbCard from "../Components/Card/New";
import Newlist from "../Components/List/Newlist";
import NewHomee from "../Components/Home/NewHomee";
import { Link } from "react-router-dom";
import ClientLogo8 from "../Components/Testimonail/Testimonail";
import TourGrid from "../Components/Card/Banner";
import Travel1 from "../Components/SearchBar/Search2";
import SearchSection from "../Components/SearchBar/Search2";
import Home2 from "../Components/Home/Home2";

const HomePage = () => {
  const data = listData;
  const [isMapOpen, setIsMapOpen] = useState(false); // State to manage map visibility
  const [showButton, setShowButton] = useState(true); // State to manage button visibility
  const mapRef = useRef(null); // Reference to the map container
  const btnRef = useRef();

  const toggleMap = () => {
    setIsMapOpen((prev) => !prev); // Toggle map visibility

    // Handle full-screen API
    if (!isMapOpen) {
      // Open the map in full-screen mode
      if (mapRef.current) {
        const mapElement = mapRef.current;
        if (mapElement.requestFullscreen) {
          mapElement.requestFullscreen(); // Request full screen
        } else if (mapElement.mozRequestFullScreen) {
          mapElement.mozRequestFullScreen(); // Firefox
        } else if (mapElement.webkitRequestFullscreen) {
          mapElement.webkitRequestFullscreen(); // Chrome, Safari, Opera
        } else if (mapElement.msRequestFullscreen) {
          mapElement.msRequestFullscreen(); // IE/Edge
        }
      }
    } else {
      // Close full screen if the map is already open
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }
  };

  // Function to handle scroll event
  // Function to handle scroll event
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Current scroll position
    const documentHeight = document.documentElement.scrollHeight; // Total height of the document
    const windowHeight = window.innerHeight; // Height of the viewport

    // Calculate the percentage scrolled
    const scrollPercent =
      (scrollPosition / (documentHeight - windowHeight)) * 100;

    // Show button after scrolling past 20% and hide after 80%
    if (scrollPercent > 15 && scrollPercent < 80) {
      setShowButton(true); // Show the button
    } else {
      setShowButton(false); // Hide the button
    }
  };

  // Add the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="homepage">
      <div className="content-wrapper">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">
              Explore <span>Luxurious Resorts</span> Near You for the Perfect
              Getaway.
            </h1>
            <p>
              Discover top-rated resorts nearby for a relaxing and unforgettable
              escape for your next vacation, closer than you think.
            </p>
            <SearchBar />

            <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <h2>Years Of Experience</h2>
              </div>
              <div className="box">
                <h1>200</h1>
                <h2>Awards Gained</h2>
              </div>
              <div className="box">
                <h1>500+</h1>
                <h2>Resorts Listed</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="imageContainer">
          <img src="/bag.png" alt="Travel Bag" />
        </div>
      </div>{" "}
      {/* Cards Section
      {/* <Home2 /> */}
      <div className="cardSection">
        <h2 className="cardSectionTitle">
          Top Resorts in <span>Palghar</span>
          <Link to="/list">
            <p>
              Explore More
              <img src="/arrow-up.png" alt="" />
            </p>
          </Link>
        </h2>

        <Newlist />
        <NewHomee />
        <ClientLogo8 />
        <TourGrid />

        {/* Button to open the map in full screen */}
        {showButton && (
          <button className="open-map-button" onClick={toggleMap}>
            {isMapOpen ? "Close Map" : "Open Map"}
          </button>
        )}
      </div>
      {/* Include the MyMap component with a ref */}
      {isMapOpen && (
        <div
          ref={mapRef}
          style={{
            position: "fixed", // Use fixed positioning to cover the viewport
            top: 0,
            borderRadius: "0",
            left: 0,
            height: "100vh", // Full height
            width: "100vw", // Full width
            zIndex: 1000, // Ensure it's on top
            backgroundColor: "white", // Optional: Add a background color
          }}
        >
          <Navbar /> {/* Render Navbar only when map is open */}
          <MyMap items={data} /> {/* Ensure you're passing the right items */}
        </div>
      )}
    </div>
  );
};

export default HomePage;
