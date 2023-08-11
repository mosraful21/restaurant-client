import { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

const NavBar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  const closeNavMenu = () => {
    setIsNavMenuOpen(false);
  };

  const menuItem = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">Contact Us</a>
      </li>
      <li>
        <a href="/">Dashboard</a>
      </li>
      <li>
        <a href="/menu">Our Menu</a>
      </li>
      <li>
        <a href="/">Our Shop</a>
      </li>
    </>
  );

  return (
    <header className="fixed z-10 w-full bg-gray-700 bg-opacity-30 flex justify-around items-center py-4 px-6">
      <div className="text-white">
        <p className="text-lg font-semibold">logo</p>
      </div>

      {/* Display menu items */}
      <nav className="hidden sm:block">
        <ul className="flex space-x-4 text-white">{menuItem}</ul>
      </nav>

      {/* Toggle button for small devices */}
      <IoMenuOutline
        className="text-white text-2xl cursor-pointer hover:bg-blue-500 rounded-full p-1 sm:hidden"
        onClick={toggleNavMenu}
      />

      {/* Navigation menu for small devices */}
      {isNavMenuOpen && (
        <nav className="fixed top-0 right-0 text-center bg-green-800 text-white w-3/5 h-full p-6">
          <IoCloseOutline
            className="absolute top-4 right-6 text-2xl cursor-pointer hover:bg-blue-500 rounded-full p-1"
            onClick={closeNavMenu}
          />
          <ul className="flex flex-col mt-8 space-y-10">{menuItem}</ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
