import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };



  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <NavLink to="/">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            </NavLink>
            <Link to="/">
              <span className="text-xl tracking-tight">VirtualR</span>
            </Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <NavLink
                to={`/${item.href}`}
                key={index}
                className={({ isActive }) =>
                  `text-sm ${index !== 0 ? "border-neutral-300/20 pl-2" : ""} ${isActive ? "text-orange-700" : "text-white"}`
                }>


                {item.label}
              </NavLink>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link
              to="#" className="py-2 px-3 border rounded-md">
              Sign In
            </Link>
            <Link
              to="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
              Create an account
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2" >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 
                ${isActive ? "text-0range-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 
                lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }>
                About
              </NavLink>
            </li>

          </ul>
        </div> */}

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <NavLink to={`/${item.href}`}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link to="#" className="py-2 px-3 border rounded-md">
                Sign In
              </Link>
              <Link
                to="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </Link>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
