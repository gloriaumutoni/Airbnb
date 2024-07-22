import React from "react";
import Cards from "./cards.jsx";
import Navbar from "./navbar.jsx";
import data from "./data.js";

function App() {
 
  let cards = data.map((item) => {
    return (
      <Cards
        key = {item.id}
        item={item}
      />
    );
  });
  return (
    <div>
      <div className="bg-white w-[32%] mx-auto rounded-md">
        <Navbar />
        <div className="flex gap-3 h-[298px]">
          {cards}
          {/* <Cards 
         img='/assets/wedding-photography1.svg'
         status='ONLINE'
         rate={5.0}
         country='(6) USA'
         title='Life lessons with Katie Zaferes'
         amount='From $136'
         person='/ person'
        />
         <Cards
         img='/assets/mountain-bike1.svg'
         rate={5.0}
         country='(6) USA'
         title='Life lessons with Katie Zaferes'
         amount='From $136'
         person='/ person'
        /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
