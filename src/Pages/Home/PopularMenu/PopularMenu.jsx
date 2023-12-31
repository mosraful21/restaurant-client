import CommonButton from "../../../components/CommonButton/CommonButton";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FakeMenuData } from "../../../fakeData/fakeManuData";


const PopularMenu = () => {
  const data = FakeMenuData;
  const popularItems = data.filter((item) => item.category === "popular");

  return (
    <section className="md:w-4/5 md:p-0 p-2 mx-auto my-10">
      <SectionTitle
        subHeading="Popular Items"
        heading="From our Menus"
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-4">
        {popularItems.map((item, index) => (
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
      <CommonButton button="View Full  Menu"></CommonButton>
    </section>
  );
};

export default PopularMenu;
