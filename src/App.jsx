import React from "react";
import Cards from "./cards.jsx";
import Navbar from "./navbar.jsx";

function App() {
  return (
    <div>
      <div className="bg-white w-[32%] mx-auto rounded-md">
      <Navbar/>
        <div className="flex gap-3 h-[298px]">
        <Cards 
         img='/assets/image12.svg'
         status='SOLD OUT'
         rate={5.0}
         country='(6) USA'
         title='Life lessons with Katie Zaferes'
         amount='From $136'
         person='/ person'
        />
         <Cards 
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
        />
        </div>
      </div>
    </div>
  );
}

export default App;
