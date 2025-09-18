import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../reduxtookit-cart/CartSlice";
import NavBar from "../../header/NavBar";
import Footer from "../../footer/Footer";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className=" flex justify-center items-center mt-30 ">
      <NavBar />

      {cartItems.length === 0 ? (
        <h2 className="text-center mt-30">Cart is Empty</h2>
      ) : (
        <>
          <div className="  w-[87%]">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-2"
              >
                <div className="flex items-center gap-20">
                  <img src={item.image} alt={item.name} className="w-16 h-16" />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p>Qty: {item.quantity}</p>
                    <p>£ {(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={() => dispatch(clearCart())}
              className="mt-6 bg-black text-white px-6 py-2 rounded cursor-pointer"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default Cart;
