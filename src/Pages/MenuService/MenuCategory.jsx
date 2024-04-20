import { Link } from "react-router-dom";
import Cover from "../../Components/Shared/Cover";
import MenuCard from "../../Components/Shared/MenuCard";

const MenuCategory = ({ item, img, title, message }) => {
  return (
    <div className="space-y-10">
      <Cover message={message} title={title} img={img} />

      <div>
        <div className="grid md:grid-cols-2 gap-10 mx-3">
          {item.map((item, idx) => (
            <MenuCard item={item} key={idx}></MenuCard>
          ))}
        </div>
        <div className="flex justify-center my-5">
          <Link to={`/order/${title}`}>
            <button className="btn border-0 btn-outline border-b-4 uppercase">
              ORDER YOUR FAVORITE FOOD
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
