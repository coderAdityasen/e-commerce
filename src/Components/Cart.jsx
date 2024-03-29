import React, { useContext } from "react";
import { CartContext } from "../Context/productContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Navbar from "../Copops/Navbar";

function Cart() {
  const {cartIteams, addToCart, removeFromCart, clearCart, getCartTotal} =
    useContext(CartContext);
  const notifyRemovedFromCart = (item) =>
    toast.error(`${item.title} removed from cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const notifyCartCleared = () =>
    toast.error(`Cart cleared!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notifyRemovedFromCart(product);
  };

  return (
    <>
    <Navbar/>
        <div className="flex-col flex items-center inset-0   bg-white dark:bg-black gap-8  p-10  text-black dark:text-white font-normal uppercase text-sm">
          <ToastContainer />
          <h1 className="text-2xl font-bold">Cart</h1>
          <div className=" my-10 absolute right-16 top-10">
            <button
              className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
				<Link to="/">
				Close
				</Link>
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {cartIteams.map((item) => {
              return (
                <div
                  className="flex justify-between items-center"
                  key={item.id}
                >
                  <div className="flex gap-10 justify-between">
                    <div className="flex items-center gap-11 ">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="rounded-md w-24 h-24"
                    />
                    <div className="flex gap-8 justify-center dark:text-white">
                      <h1 className="text-lg font-bold">{item.title}</h1>
                      <p className="text-gray-600 dark:text-white">${item.price}</p>
                    </div>
                    </div>
                   
                  </div>
                  <div className="flex ml-10 gap-4">
                    <button
                      className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => {
                        addToCart(item);
                      }}
                    >
                      +
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => {
                        const cartItem = cartIteams.find(
                          (product) => product.id === item.id
                        );
                        if (cartItem.quantity === 1) {
                          handleRemoveFromCart(item);
                        } else {
                          removeFromCart(item);
                        }
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {cartIteams.length > 0 ? (
            <div className="flex flex-col justify-between items-center">
              <h1 className="text-lg font-bold ">Total: ${getCartTotal()}</h1>
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={() => {
                  clearCart();
                  notifyCartCleared();
                }}
              >
                Clear cart
              </button>
            </div>
          ) : (
            <h1 className="text-lg font-bold dark:text-white">Your cart is empty</h1>
          )}
        </div>
      
   
	 </>
  );
}

export default Cart;
