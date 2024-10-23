import React from "react";
import Card from "../Card/Card";
import { listData } from "../../Lib/dummydata";
import "./List.scss";

const List = () => {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card key={item.id} className="cardd" item={item} />
      ))}
    </div>
  );
};

export default List;
