import { useContext, useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  const closeNavMenu = () => {
    setIsNavMenuOpen(false);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
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
        <a href="/order/salad">Order Food</a>
      </li>
      <li>
        <a href="/secret">Secret</a>
      </li>

      {user ? (
        <>
        <span>{user?.displayName}</span>
          <li onClick={handleLogOut}>
            <a href="/">Log Out</a>
          </li>
        </>
      ) : (
        <>
          <li>
            <a href="/login">Login</a>
          </li>
        </>
      )}
    </>
  );

  return (
    <header className="fixed z-10 w-full bg-gray-700 bg-opacity-30 flex md:justify-around justify-between items-center py-4 px-6">
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
