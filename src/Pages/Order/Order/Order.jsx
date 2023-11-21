import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import CoverImg from "../../../assets/our Shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const {category} = useParams()
const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    const dessert = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const drinks = menu.filter((item) => item.category === "drinks");
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
  <TabList className='uppercase mt-10'>
    <Tab >salab</Tab>
    <Tab>pizza</Tab>
    <Tab>soups</Tab>
    <Tab>desserts</Tab>
    <Tab>drinks</Tab>
  </TabList>
  <TabPanel>
   <OrderTab
   items={salad}
   ></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab
   items={pizza}
   ></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab
   items={soup}
   ></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab
   items={dessert}
   ></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab
   items={drinks}
   ></OrderTab>
  </TabPanel>
</Tabs>
    </div>
  );
};

export default Order;
