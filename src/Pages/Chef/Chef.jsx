import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Chef = () => {
    return (
        <div>
            <SectionTitle
            subHeading={'should Try'}
            heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
           
           {/* ----------- */}
           <div className="grid grid-cols-3">
           <div>
               <div className="card w-96 bg-base-100 shadow-xl">
               <img className="w-[424px] h-[300px]" src="https://i.ibb.co/LNXyV4j/slide5.jpg" alt="" />
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn text-[#BB8506]">add to cart</button>
    </div>
  </div>
</div>
            </div>
            <div>
               <div className="card w-96 bg-base-100 shadow-xl">
               <img className="w-[424px] h-[300px]" src="https://i.ibb.co/LNXyV4j/slide5.jpg" alt="" />
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn bg-[#1F2937] text-[#BB8506]">add to cart</button>
    </div>
  </div>
</div>
            </div>
            <div>
               <div className="card w-96 bg-base-100 shadow-xl">
               <img className="w-[424px] h-[300px]" src="https://i.ibb.co/LNXyV4j/slide5.jpg" alt="" />
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn text-[#BB8506]">add to cart</button>
    </div>
  </div>
</div>
            </div>
           </div>
        </div>
    );
};

export default Chef;