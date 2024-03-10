import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/productContext";
import Navbar from "../Copops/Navbar";

function WishList() {
  const {
    wishlistItems,
    clearWishlist,
    addToCart,
    removeFromCart,
    removeFromWishlist,
    cartIteams
  } = useContext(CartContext);

  return (
    <>
        {/* Navbar */}
       
      
         <Navbar />
        {wishlistItems.length === 0 ? (
          <div className="w-full mx-auto text-center">
            <h1 className=" dark:text-white py-32 font-bold text-center text-4xl">
              Wishlist is Empty
            </h1>
            <span className="text-green-600 text-2xl dark:text-blue-300 ">
              <Link to="/">Add Some Items From Here</Link>
            </span>
          </div>
        ) : (
          <>

            <div className="py-20 h-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
            {wishlistItems.map((product) => (
              <div key={product.id} className="bg-white dark:bg-blue-gray-900 shadow-md rounded-lg px-10 py-10">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="rounded-md h-48"
                />
                <div className="mt-4">
                  <h1 className="text-lg uppercase dark:text-white font-bold">{product.title}</h1>
                  <p className="mt-2 dark:text-white text-gray-600 text-sm">{product.description}...</p>
                  <p className="mt-2 dark:text-white text-gray-600">${product.price}</p>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  {!cartIteams.find((item) => item.id === product.id) ? (
                    <button
                      className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => {
                        addToCart(product);
                        notifyAddedToCart(product);
                      }}
                    >
                      Add to cart
                    </button>
                  ) : (
                    <div className="flex gap-4">
                      <button
                        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        onClick={() => addToCart(product)}
                      >
                        +
                      </button>
                      <p className="text-gray-600 dark:text-white">
                        {cartIteams.find((item) => item.id === product.id)?.quantity || 0}
                      </p>
                      <button
                        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        onClick={() => {
                          removeFromCart(product);
                        }}
                      >
                        -
                      </button>
                    </div>
                  )}
                  <button
                    onClick={() => {
                      removeFromWishlist(product);
                    }}
                    className="px-4 py-2 mx-3  border-2 border-gray-300 "
                  >
                    ❤️
                  </button>
                </div>
              </div>
            ))}
            </div>
           
            <div className="w-full mx-auto my-5 text-center">
              <button
                className="px-3 py-2 my-10 bg-blue-600 rounded-xl text-white"
                onClick={() => clearWishlist()}
              >
                Clear Wishlist
              </button>
            </div>
          </>
        )}
      
    </>
  );
}

export default WishList;