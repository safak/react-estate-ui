
import Slider from '../../components/slider/slider';
import './singlePage.scss';
import {singlePostData, userData} from "../../lib/dummydata";
import Map from "../../components/map/Map";

function SinglePage(){
    return (
        <div className='singlePage'>
            <div className="details">
                <div className="wrapper">
                    <Slider images={singlePostData.images}/>
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
            <div className="features">
                <div className="wrapper">
                    <p className="title">General</p>
                    <div className="listVertical">
                        <div className="feature">
                            <img src="/utilty.png" alt="" />
                            <div className="featureText">
                                <span>Utilities</span>
                                <p>Renter is responsible</p>
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
                                <p>Must have 3x the rent in total household income</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Sizes</p>
                    <div className="sizes"></div>
                    <p className="title">Nearby Places</p>
                    <div className="listHorizontal"></div>
                    <p className="title">Location</p>
                    <div className="mapContainer">
                        <Map items={[singlePostData]}/>
                    </div>
                    <div className="buttons">
                        <button>
                            <img src="/chat.png" alt="" />
                            Send a Message
                        </button>
                        <button>
                            <img src="/save.png" alt="" />
                            Save the Place
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SinglePage