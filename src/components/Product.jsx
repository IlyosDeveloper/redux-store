import { useDispatch } from "react-redux";
import { decrement, increment, removeOne } from "../redux/features/basketSlice";

function Product({ name, amount, price, image }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between mb-5">
      <div className="flex gap-14">
        <img src={image} alt={name + " glasses"} className="w-40" />

        <div className="flex flex-col gap-1 ">
          <p className="font-medium">{name}</p>
          <p className="font-medium">${price}</p>
          <button
            onClick={() => dispatch(removeOne(name))}
            className="text-red-500 tracking-wider"
          >
            Remove
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="text-4xl"
          onClick={() => {
            if (amount == 1) {
              dispatch(removeOne(name));
            } else {
              dispatch(decrement(name));
            }
          }}
        >
          -
        </button>
        <p className="text-2xl">{amount}</p>
        <button className="text-3xl" onClick={() => dispatch(increment(name))}>
          +
        </button>
      </div>
    </div>
  );
}

export default Product;
