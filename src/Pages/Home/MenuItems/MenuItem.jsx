import SectionTitle from "../../../Components/Shared/SectionTitle";
import MenuCard from "../../../Components/Shared/MenuCard";
import useMenu from "../../../Hooks/useMenu";

const MenuItem = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  console.log(popular);

  return (
    <section>
      <SectionTitle subheading="Check it out" heading="FROM OUR MENU" />
      <div className="grid md:grid-cols-2 gap-10 mx-3">
        {popular.map((item, idx) => (
          <MenuCard item={item} key={idx}></MenuCard>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline my-5 text-2xl font-bold ">
          View all
        </button>
      </div>
    </section>
  );
};

export default MenuItem;
