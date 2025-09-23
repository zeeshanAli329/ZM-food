import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../reduxtookit-cart/CartSlice";
import NavBar from "../../header/NavBar";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartItemRemoveToast from "../../notification/toastsNotification/CartItemRemoveToast";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [notification, setNotification] = useState(false);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    setNotification("Item removed from cart");
    setTimeout(() => setNotification(false), 3000);
  };
  const handleClear = () => {
    dispatch(clearCart());
    setNotification("Cart cleared");
    setTimeout(() => setNotification(false), 3000);
  };

  return (
    <div className=" flex justify-center items-center mt-10 bg-black h-full pb-20 pt-15">
    
      {notification && <CartItemRemoveToast message={notification} />}

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-auto w-[700px] bg-[#1c1816] p-3 rounded-3xl">
          <img
            src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
            alt="Empty Cart"
            className="w-40 mb-6"
          />

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-white ">
            Your Cart is <span className="text-red-600">Empty!</span>
          </h2>

          {/* Description */}
          <p className="mt-1 text-white text-sm md:text-base">
            Must add items on the cart before you proceed to check out.
          </p>

          {/* Button */}
          <Link
            to="/"
            className="mt-6 bg-red-500 hover:bg-white hover:text-black text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300 flex items-center gap-2"
          >
            🛍 RETURN TO SHOP
          </Link>
        </div>
      ) : (
        <>
          <div className="  w-[100%] pt-0 pb-20  ">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-2 bg-white px-15  "
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
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-white hover:bg-white transition hover:text-[red] px-3 py-1 rounded cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="bg-white px-15">

            <button
              onClick={handleClear}
              className="mt-6 bg-black text-white px-6 py-2 rounded cursor-pointer hover:bg-gray-800 mb-10"
              >
              Clear Cart
            </button>
              </div>
          </div>
        </>
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default Cart;
