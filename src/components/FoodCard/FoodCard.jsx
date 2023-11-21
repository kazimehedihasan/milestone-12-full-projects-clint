/* eslint-disable react/prop-types */
const FoodCard = ({item}) => {
    const {image, price, recipe, name} = item;

  return (
    <div>
      <div className="card w-[424px] h-[541px] bg-base-100 mt-10 shadow-xl">
        <img
          className="w-[424px] h-[300px]"
          src={image}
          alt=""
        />
        <p className="absolute right-0 w-[89px] h-[48px] bg-black text-white mr-7 mt-7 px-7">${price}</p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className=" uppercase btn btn-outline border-0 border-b-4  text-[#BB8506] hover:bg-[#111827] border-[#BB8506]">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
