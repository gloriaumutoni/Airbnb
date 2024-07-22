const Cards = (props) => {
  let badge;
  if (props.item.openSpots === 0) {
    badge = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badge = "Online";
  }
  return (
    <div className="flex">
      <div className="bg-white">
        <div className="relative">
          <img src={`assets/${props.item.coverImg}`} alt="" />
          {badge && <div className="top-2 absolute bg-white py-1 px-2 rounded-sm  ml-2">{badge}</div>}
        </div>
        <div>
          <div className="flex">
            <img src="/assets/Star1.svg" alt="star" />
            <p>
              {props.item.stats.rating}
              <span className="text-gray-400 font-thin">{`(${props.item.stats.reviewCount})`}</span>
            </p>
            <p>{props.item.location}</p>
          </div>
          <p>{props.item.title}</p>
          <p className="font-thin text-gray-400">
            <span className="font-bold text-black">{`From $${props.item.price}`}</span>
            /person
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
