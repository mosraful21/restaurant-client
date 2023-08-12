import { Link } from "react-router-dom";
import CommonButton from "../../../components/CommonButton/CommonButton";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, img, title, desc }) => {
  return (
    <div className="pt-8">
      {title && <Cover bgImg={img} title={title} desc={desc}></Cover>}

      <div className="grid md:grid-cols-2 gap-4 py-8">
        {items.map((item, index) => (
          <div className="flex space-x-2 hover:bg-slate-100 p-5" key={index}>
            <img
              style={{ borderRadius: "0 200px 200px 200px" }}
              className="w-[120px]"
              src={item.image}
              alt="item__image"
            />
            <div className="">
              <div className="flex justify-between">
                <h3 className="uppercase">{item.name} ----------</h3>
                <p className="text-yellow-500">${item.price}</p>
              </div>
              <p className="md:flex hidden">{item.recipe}</p>
            </div>
          </div>
        ))}
      </div>

      <Link to={`/order/${title}`}>
        <CommonButton button="ORDER YOUR FAVOURITE FOOD"></CommonButton>
      </Link>
    </div>
  );
};

export default MenuCategory;
