const Cards = () => {
  return (
    <div>
      <div className="card1 bg-white">
        <div className="relative bg-[url('/assets/mountain-bike1.svg')]">
          <div className="top-2 absolute">SOLD OUT</div>
        </div>
        <div>
          <div className="flex">
            <img src="/assets/star1.svg" alt="" />
            <p>5.0 (6) USA</p>
          </div>
          <p>Life lessons with Katie Zaferes</p>
          <p>
            <span>From $136</span> / person
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
