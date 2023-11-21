import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg'
import DessertImage from '../../../assets/menu/dessert-bg.jpeg'
import soupImage from '../../../assets/menu/soup-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import Button from '../../Shared/Button/Button';
const Menu = () => {
const [menu] = useMenu()
    const dessert = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const offered = menu.filter((item) => item.category === "offered");
    return (
        <div className=''>
            <Helmet>
                <title>Bistor Boss | Our Menu</title>
            </Helmet>
           <Cover img={menuImage} title='our menu' titleDiscrip={' Would you like to try a dish?'}></Cover>
           {/* main cover */}
           <SectionTitle
           subHeading={"Dont't Miss"}
           heading={"Today's Offer"}
           ></SectionTitle>
         
           {/* offered menu items */}
           <MenuCategory
           items={offered}
           ></MenuCategory>
           <Button/>
           {/* dessert menu items*/}
           <MenuCategory
           items={dessert}
           title={'Dessert'}
           titleDiscrip={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
           coverImg={DessertImage}
           ></MenuCategory>
             <Button/>
{/* pizza  */}
           <MenuCategory
           items={pizza}
           title={'pizza'}
           titleDiscrip={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
           coverImg={pizzaImage}
           ></MenuCategory>
           <Button/>

           {/* salads */}
           <MenuCategory
           items={salad}
           title={'salad'}
           titleDiscrip={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
           coverImg={saladImage}
           ></MenuCategory>
           <Button/>
           {/* soups */}
           <MenuCategory
           items={soup}
           title={'soups'}
           titleDiscrip={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
           coverImg={soupImage}
           ></MenuCategory>
           <Button/>
        </div>
    );
};

export default Menu;