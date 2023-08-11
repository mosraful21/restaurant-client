import FoodCard from "../Shared/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-3">
      {items.map((item, index) => (
        <FoodCard key={index} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
