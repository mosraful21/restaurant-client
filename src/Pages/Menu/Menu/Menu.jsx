import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/menu-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import { FakeMenuData } from "../../../fakeData/fakeManuData";

const Menu = () => {
  const menu = FakeMenuData;
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter(item => item.category === 'pizza');
  const salads = menu.filter(item => item.category === 'salad');
  const soups = menu.filter(item => item.category === 'soup');

  return (
    <div>
      <Helmet>
        <title>Restaurant | Menu</title>
      </Helmet>

      <Cover
        bgImg={menuImg}
        title="our menu"
        desc="would you like to try a dish?"
      ></Cover>

      <div className="md:w-4/5 md:p-0 p-2 mx-auto my-10">
        <SectionTitle
          subHeading="Don't Miss"
          heading="Today's Offer"
        ></SectionTitle>
        {/* offered menu items */}
        <MenuCategory items={offered}></MenuCategory>

        {/* desserts menu items */}
        <MenuCategory
          items={desserts}
          img={dessertImg}
          title="dessert"
          desc="would you like to try a dish?"
        ></MenuCategory>

        {/* pizza menu items */}
        <MenuCategory
          items={pizza}
          img={pizzaImg}
          title="pizza"
          desc="would you like to try a dish?"
        ></MenuCategory>

        {/* salad menu items */}
        <MenuCategory
          items={salads}
          img={saladImg}
          title="salad"
          desc="would you like to try a dish?"
        ></MenuCategory>

        {/* soups menu items */}
        <MenuCategory
          items={soups}
          img={soupImg}
          title="soups"
          desc="would you like to try a dish?"
        ></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
