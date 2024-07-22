const Navbar = () => {
    return ( 
        <div>
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
        </div>
       
     );
}
 
export default Navbar;