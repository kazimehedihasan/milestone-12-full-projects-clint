import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Featured = () => {
  return (
    <div
      className="h-[700px] pt-10 my-14 bg-fixed text-white"
      style={{ backgroundImage: "url(https://i.ibb.co/sJZwwxy/featured.jpg)" }}
    >
      <div>
        <SectionTitle
          subHeading={"Check it out"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>
      </div>
      <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center pb-20 pt-12 px-36 text-white">
        <div>
          <img
            className="w-[600px] h-[350px]"
            src="https://i.ibb.co/sJZwwxy/featured.jpg"
            alt=""
          />
        </div>
        <div className="md:ml-10">
          <p>March 20, 2023</p>
          <h5 className="uppercase">where can i get some?</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Error
            
            voluptate facere, deserunt dolores maiores quod nobis quas
            quasi. Eaque repellat recusandae ad laudantium tempore <br />
            consequatur consequuntur omnis ullam maxime tenetur.
          </p>

          <button className="btn btn-outline border-0 border-b-4 text-white ">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
