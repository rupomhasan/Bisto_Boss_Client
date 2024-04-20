import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import ServiceCard from "../../../Components/Shared/ServiceCard";

const Recommends = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  return (
    <section>
      <SectionTitle subheading="Should Try" heading="Chef Recommends" />
      <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-3 mx-5 ">
        {menu.slice(0, 3).map((item, idx) => (
          <ServiceCard key={idx} item={item}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Recommends;
