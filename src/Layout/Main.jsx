import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    const loction = useLocation();
    const noHeaderFooter = loction.pathname.includes('login') ||  loction.pathname.includes('register')
    console.log(loction);
    return (
        <div>
            {noHeaderFooter || <Navbar/>}
            <Outlet/>
           {noHeaderFooter || <Footer/>}
      
        </div>
    );
};

export default Main;