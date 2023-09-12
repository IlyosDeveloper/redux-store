import { useSelector } from "react-redux";

function Navbar() {
  const { products, amount } = useSelector((store) => store.basket);
  const basketCount = (products.length + amount);
  return (
    <div className="flex justify-between pt-5">
      <p className="font-medium">Home</p>
      <p className="font-medium">
        Basket
        <span className="bg-red-500 text-sm text-white py-2 px-1 rounded-full">
          {basketCount}
        </span>
      </p>
    </div>
  );
}

export default Navbar;
