import { MapContainer, TileLayer } from 'react-leaflet';
import './map.scss';
import "leaflet/dist/leaflet.css";
import Pin from '../pin/Pin';
import {  itemsdata } from '../../lib/dummydata';

function Map() {
 const items = itemsdata;
 console.log("items");

  return (
    <MapContainer center={[52.4797, -1.90269]} zoom={5} scrollWheelZoom={true} className='map'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map(items => (
        <Pin items={items} key={items.id} />
      ))}
    </MapContainer>
  );
}

export default Map;
