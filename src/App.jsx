import React from "react";
import Cards from "./cards.jsx";

function App() {
  return (
    <div>
      <div className="bg-white w-[32%] mx-auto rounded-md">
        <header className=" shadow-md  py-3 px-6">
          <img src="/assets/airbnb1.svg" alt="Airbnb" />
        </header>
        <div className="w-[75%] mx-auto">
          <div className=" py-10">
            <img src="/assets/Group 77.svg" alt="" />
          </div>
          <div>
            <h1 className="text-4xl font-bold pt-4">Online Experiences</h1>
            <p className="text-base py-3">
              Join unique interactive activities led by one-of-a-kind hosts—all
              without leaving home.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
        <Cards 
         img='/assets/image12.svg'
         status='SOLD OUT'
         rate='5.0'
         country='(6) USA'
         title='Life lessons with Katie Zaferes'
         amount='From $136'
         person='/ person'
        />
         <Cards 
         img='/assets/wedding-photography1.svg'
         status='ONLINE'
         rate='5.0'
         country='(6) USA'
         title='Life lessons with Katie Zaferes'
         amount='From $136'
         person='/ person'
        />
         <Cards 
         img='/assets/mountain-bike1.svg'
         rate='5.0'
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
