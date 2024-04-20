import SectionTitle from "../../../Components/Shared/SectionTitle";
import img from "../../../assets/home/featured.jpg";
const Features = () => {
  return (
    <div className=" text-white ">
      <div className="bg-[url('/src/assets/home/featured.jpg')] py-10 bg-cover bg-fixed ">
        <div className="z-10">
          <SectionTitle heading="from our menu" subheading="Check it out" />
        </div>
        <div className=" flex max-w-screen-md mx-auto gap-10 items-center justify-center  pb-20 pt-10">
          <div className="flex-1 opacity-1">
            <img className="" src={img} alt="" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-xl font-bold">
              April 12 , 2024 <br />
              <span className="uppercase">Where can i get some?</span>{" "}
            </h3>
            <p>
              Discover the powerful features of our product: streamlined
              interface for effortless navigation, robust search functionality
              for quick access.
            </p>
            <button className="btn btn-outline text-white text-xl  border-b- uppercase border-0 hover:bg-black  border-[#fff]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
