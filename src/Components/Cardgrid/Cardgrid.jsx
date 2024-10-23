import React, { useState } from "react";
import Card from "../Card/Card";
import "./CardGrid.scss";

function CardGrid({ items }) {
  const [visibleCount, setVisibleCount] = useState(4); // Show 3 cards initially

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Increase the count by 3
  };

  return (
    <div className="card-grid">
      {items.slice(0, visibleCount).map((item, index) => (
        <div className={index < 2 ? "card-wrapper" : ""} key={item.id}>
          <Card item={item} />
        </div>
      ))}
      {visibleCount < items.length && (
        <div className="load-more-container">
          {" "}
          {/* Wrap in a container */}
          <button className="load-more" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default CardGrid;
