import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import React, { useState, useEffect } from "react";

function App() {
  const [listings, setListings] = useState([]); 
  
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => 
        setListings(data)
      
    )},[]);
console.log(listings)

  return (
    <div className="app">
      <Header />
      <ListingsContainer list={listings}/>
    </div>
  );
}

export default App;
