import React from "react";
import Card from "../../Components/Card/Card";
import CardGrid from "../../Components/Cardgrid/Cardgrid";
import Filter from "../../Components/filter/Filter";
import Newlist from "../../Components/List/Newlist";
import MyMap from "../../Components/Map/MyMap";
import { listData } from "../../Lib/dummydata";
import "./listpage.scss";

function ListPage() {
  const data = listData;

  return (
    <div className="listpage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
        </div>
        <div className="mapContainer">
          <MyMap items={data} />
        </div>
        {/* {data.map((item) => (
          <Card key={item.id} item={item} />
        ))} */}
        {/* <CardGrid items={data} /> */}
        <Newlist items={data} />
      </div>
    </div>
  );
}

export default ListPage;
