import React from 'react'
import "./singlePage.scss"
import Slider from '../../components/slider/Slider';
import { singlePostData, userData } from '../../lib/dummydata';

function SinglePage() {
  // You can use JavaScript expressions directly within JSX using curly braces {}.
  return (
    <div className='singlePage'>
      {/* In this we are two div one for left and one for right */}
      <div className="details">
        {/* Wrapper class for padding purpose */}
        <div className="wrapper">
          {/* Now we can import our images array from dummydata.js */}
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>

            <div className="bottom">
              {singlePostData.description}

            </div>
          </div>
        </div>
      </div>

      {/* Right side div */}
      <div className="features">
        <div className="wrapper"></div>
      </div>
    </div>
  );
}

export default SinglePage;