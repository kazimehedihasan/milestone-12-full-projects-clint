import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg'
const Menu = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Bistor Boss | Menu</title>
            </Helmet>

           <Cover img={menuImage} title='our menu'></Cover>
        </div>
    );
};

export default Menu;