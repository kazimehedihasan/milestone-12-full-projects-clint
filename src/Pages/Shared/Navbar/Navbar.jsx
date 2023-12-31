import { Link } from "react-router-dom";

const Navbar = () => {

    const navbarLink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our menu</Link></li>
        <li><Link to='/order/salad'>Our Shop</Link></li>
        <li><Link to='/login'>Login</Link></li>
        
    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-7xl	 bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black/30 rounded-box w-52 uppercase">
    {navbarLink}
    </ul>

    </div>
   <div>
   <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
    <h4>Restaurant</h4>
   </div>
  </div>

  <div className="navbar-end">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 uppercase">
      {navbarLink}
    </ul>
  </div>
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;