import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function Total() {
  const { products } = useSelector((store) => store.basket);
  const [sumCount, setSumcount] = useState(0);

  useEffect(() => {
    let priceSum = 0;

    products.map((item) => {
      priceSum += item.price * item.amount;
    });
    setSumcount(priceSum.toFixed(2));
  }, [products]);

  return (
    <div className="flex h-14 justify-around text-3xl">
      {sumCount > 0 && (
        <>
          <p>Total: </p>
          <span className="text-lime-600"> {sumCount}$</span>
        </>
      )}
    </div>
  );
}
export default Total;
