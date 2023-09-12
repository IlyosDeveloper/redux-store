import React from "react";
import Navbar from "./components/Navbar";
import BasketProducts from "./components/BasketProducts";
import Total from "./components/Total";
import { useSelector } from "react-redux";

function App() {
  const { products } = useSelector((store) => store.basket);

  return (
    <div className="max-w-screen-lg mx-auto px-5">
      <Navbar />
      <h1 className="text-center py-3 text-5xl my-5">Redux Store</h1>
      {products.length == 0 ? (
        <div className="text-center py-3 text-3xl my-5">
          <h2>Your basket is empty 😒</h2>
        </div>
      ) : (
        <BasketProducts />
      )}

      <Total />
    </div>
  );
}

export default App;
