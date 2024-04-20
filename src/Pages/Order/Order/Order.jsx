import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import shop from "../../../assets/shop/banner2.jpg";
import Cover from "../../../Components/Shared/Cover";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import { OrderTab } from "./Tab/OrderTab";
import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const { category } = useParams();
  const categories = ["desserts", "salad", "soup", "pizza", "offered"];
  const initialsIndex = categories.indexOf(category);
  console.log(category);
  const [tabIndex, setTabIndex] = useState(initialsIndex);
  const [menu] = useMenu();
  const dessert = menu?.filter((item) => item.category === "dessert");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const soup = menu?.filter((item) => item.category === "soup");
  const salad = menu?.filter((item) => item.category === "salad");
  const offered = menu?.filter((item) => item.category === "offered");

  return (
    <div className="">
      <Helmet>
        <title>BISTRO BOSS | ORDER FOOD</title>
      </Helmet>
      <Cover
        img={shop}
        title="Our Shop"
        message="would you like to try a dish"
      ></Cover> 
      <Tabs
        defaultIndex={tabIndex}
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <div className="my-10 w-fit mx-auto">
          <TabList>
            <Tab>DESSERT</Tab>
            <Tab>SALAD</Tab>
            <Tab>SOUP</Tab>
            <Tab>PIZZA</Tab>
            <Tab>OFFERED</Tab>
          </TabList>
        </div>
        <TabPanel>
          <OrderTab data={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab data={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab data={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab data={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab data={offered}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
