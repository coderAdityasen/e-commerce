import React, { useContext } from "react";
import { CartContext } from "../Context/productContext";
import { useParams } from "react-router-dom";
import Navbar from "../Copops/Navbar";

function ProductLandingPage() {
  const {
    products,
    cartIteams,
    removeFromCart,
    addToCart,
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
  } = useContext(CartContext);
  const { prodid } = useParams();

  // Ensure products exist and prodid is valid before accessing productdetail
  const productdetail = products.filter((item) => item.id == prodid);

  return (
    <>
      <Navbar/>
      <div className="w-full dark:text-white my-10 container mx-auto px-4 py-8">
        {productdetail.length > 0 ? (
          <>
            <div className="mx-16 flex flex-col lg:flex-row justify-center items-center lg:items-start">
              <div className="w-full lg:w-1/2 mb-6 lg:mr-6">
                <img
                  className="rounded-lg shadow-lg"
                  src={productdetail[0].thumbnail}
                  alt=""
                />
              </div>

              <div className="w-full lg:w-1/2">
                <h1 className="text-2xl font-bold mb-4">
                  {productdetail[0].title}
                </h1>
                <p className="text-gray-700 dark:text-white mb-4">
                  {productdetail[0].description}
                </p>

                <div className="flex items-center mb-4">
                  <h2 className="text-lg font-bold mr-4">Price:</h2>
                  <span>${productdetail[0].price}</span>
                  <span className="ml-2 text-gray-500 line-through">
                    ${productdetail[0].price + 100}
                  </span>
                </div>

                <div className="mb-4">
                  {!cartIteams.find(
                    (item) => item.id == productdetail[0].id
                  ) ? (
                    <>
                      {" "}
                      <button
                        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        onClick={() => {
                          addToCart(productdetail[0]);
                        }}
                      >
                        Add to cart
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="flex gap-4">
                        <button
                          className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                          onClick={() => addToCart(productdetail[0])}
                        >
                          +
                        </button>
                        <p className="text-gray-600 dark:text-white">
                          {cartIteams.find(
                            (item) => item.id === productdetail[0].id
                          )?.quantity || 0}
                        </p>
                        <button
                          className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                          onClick={() => {
                            removeFromCart(productdetail[0]);
                          }}
                        >
                          -
                        </button>
                      </div>
                    </>
                  )}
                </div>

                {/* add to wishlist */}
                {!wishlistItems.find(
                  (item) => item.id === productdetail[0].id
                ) ? (
                  <button
                    onClick={() => {
                      addToWishlist(productdetail[0]);
                    }}
                    className="px-4 py-2 mx-3 border-2 border-gray-300 "
                  >
                    💛
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      removeFromWishlist(productdetail[0]);
                    }}
                    className="px-4 py-2 mx-3  border-2 border-gray-300 "
                  >
                    ❤️
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default ProductLandingPage;
