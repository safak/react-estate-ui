import React from 'react'
import './pin.scss'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom';
function Pin({item}) {
    // This file is for the point on the map
    return (
        // {/* For each item we are going to show diffrent markup */ }
        // {/* Marker is basicallly the point on the Map */ }
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
                <div className="popupContainer">
                    <img src={item.images} alt="" />
                    <div className="textContainer">
                        <Link to={`/${item.id}`}>{item.title}</Link>
                        <span>{item.bedroom} bedroom</span>
                        <b>$ {item.price}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    );
}

export default Pin;