import React from "react";
import "./SinglePage.scss";
import MyMap from "../../Components/Map/MyMap";
import Faq from "../../Components/Faq/Faq";
import Slider from "../../Components/slider/Slider";
import { singlePost, userData } from "../../Lib/dummydata"; // Adjust the path based on your project structure

const SinglePage = () => {
  const post = singlePost[0];
  const user = userData[0];

  return (
    <div className="singlepage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="./pin.png" alt="Location Pin" />
                  <span>{post.address}</span>
                </div>
                <div className="price">₹{post.price}</div>
              </div>
              <div className="user">
                <img src={user.profileImage} alt="" />
                <span>{user.name}</span>
              </div>
            </div>
            <div className="bottom">{post.description}</div>
          </div>
        </div>
      </div>

      {/* Ensure the features section is separated clearly */}
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Resnter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must Have 3x the rent.</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80Sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 Bed</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 Bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m Away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>50m Away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m Away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <MyMap items={[post]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save Resort
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
