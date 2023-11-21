const FoodCard = ({item}) => {
    const {image, price, recipe, name} = item;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <img
          className="w-[424px] h-[300px]"
          src={image}
          alt=""
        />
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn text-[#BB8506]">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
