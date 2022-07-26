//import React from "react";
import React, { useState, useEffect } from "react";

function ListingCard({description, image, location}) {
 
  console.log(image)
  const [toggleFavorite, setToggleFavorite] = useState(true)
  // function clickHandler
  // console.log(description, image, location, "This is from listingCard")
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {true ? (
          <button onClick={clickHandler} className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
