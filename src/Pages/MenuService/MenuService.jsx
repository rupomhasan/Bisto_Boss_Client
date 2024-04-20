import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import MenuCard from "../../Components/Shared/MenuCard";
import SectionTitle from "../../Components/Shared/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import desertImg from "../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import { Link } from "react-router-dom";
import MenuCategory from "./MenuCategory";

const MenuService = () => {
  const [menu] = useMenu();
  const offer = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");

  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | Menu</title>
      </Helmet>
      {/* MENU SECTION */}

      <MenuCategory
        message="Would you like to try a dish"
        title="offered"
        img={menuImg}
        item={offer}
      />

      {/* DESERT */}
      <MenuCategory
        message="Indulge in our decadent desserts, a sweet finale to savor."
        title="desserts"
        img={desertImg}
        item={dessert}
      />

      {/* PIZZA */}
      <MenuCategory
        message="Savor the perfection of our artisanal pizzas, hot from the oven."
        title="pizza"
        img={pizzaImg}
        item={pizza}
      />
      {/* SOUP */}
      <MenuCategory
        message="Savor our comforting soups, a warm embrace in every spoonful."
        title="soup"
        img={soupImg}
        item={soup}
      />

      {/* SALAD */}
      <MenuCategory
        message="Fresh, crisp salads bursting with vibrant flavors and wholesome ingredients."
        title="salad"
        img={saladImg}
        item={salad}
      />
    </div>
  );
};

export default MenuService;
