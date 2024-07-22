const Cards = (props) => {
  return (
    <div className="flex">
      <div className="bg-white">
        <div className="relative">
          <img src={props.img} alt="" />
          <div className="top-2 absolute bg-white py-1 px-2 rounded-sm  ml-2">
            {props.status}
          </div>
        </div>
        <div>
          <div className="flex">
            <img src="/assets/Star1.svg" alt="star" />
            <p>
              {props.rate} <span className="text-gray-400 font-thin">{props.country}</span>
            </p>
          </div>
          <p>{props.title}</p>
          <p className="font-thin text-gray-400">
            <span className="font-bold text-black">{props.amount}</span> {props.person}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
