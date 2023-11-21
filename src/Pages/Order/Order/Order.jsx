import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import CoverImg from "../../../assets/our Shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu()

    const dessert = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistor Boss | Our Shop</title>
      </Helmet>
      <Cover
        img={CoverImg}
        title={"OUR SHOP"}
        titleDiscrip={"Would you like to try a dish?"}
      ></Cover>

      {/* tab  mx-auto mt-10 w-56*/}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList className='uppercase'>
    <Tab >salab</Tab>
    <Tab>pizza</Tab>
    <Tab>soups</Tab>
    <Tab>desserts</Tab>
    <Tab>drinks</Tab>
  </TabList>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
</Tabs>
    </div>
  );
};

export default Order;
