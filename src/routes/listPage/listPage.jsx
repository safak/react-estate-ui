import './listPage.scss'
import React from 'react'
import { listData } from '../../lib/dummydata'
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';

function ListPage() {
  // We  are storing our listdata inside data
  const data = listData;
  return (
    <div className='listPage'>
      {/* In this we have two section left and right */}
      {/* This is our left section  */}
      <div className="listContainer">
        <div className="wrapper">
          {/* we have two filter component */}
          <Filter />
          {/* For each item in a map call the card componenet */}
          {/* In this Card component key should be unique */}
          {data.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      {/* This is our right section */}
      <div className="mapContainer">
        {/* Mounting our Map Component here */}
        <Map items={data}/>
      </div>
    </div>
  )
}

export default ListPage