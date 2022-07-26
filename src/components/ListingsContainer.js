import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({list}) {
  console.log(list)
  const listingArray = list.map(object=>{
      return(
        <ListingCard
          key={object.id}
          description={object.description}
          image={object.image}
          location={object.location}
        />
      )
  })
  
  return (
    <main>
      <ul className="cards">
        {listingArray}
      </ul>
    </main>
  );
}

export default ListingsContainer;
