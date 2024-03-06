import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/productContext";

function WishList() {
  const {
    cartIteams,
    wishlistItems,
    addToCart,
    removeFromCart,
    removeFromWishlist,
    clearWishlist,
  } = useContext(CartContext);

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  return (
    <>
      <div>
        {/* Navbar */}
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-lg font-semibold">
              Home
            </Link>
            <div>
              <Link
                to="/cart"
                className="text-white text-lg font-semibold mr-4"
              >
                Cart
              </Link>
              <Link to="/wishlist" className="text-white text-lg font-semibold">
                Wishlist
              </Link>
            </div>
          </div>
        </nav>

        {/* Wishlist items */}
      </div>

      <div>
        {wishlistItems.every((prod) => !prod.wishlist) ? (
          <div className="">
            <h1 className=" my-[10rem] font-bold text-center text-4xl">
              Wishlist Some Item From
              <span className="text-green-600 ">
                <Link to="/"> Here</Link>
              </span>
            </h1>{" "}
          </div>
        ) : (
          <div className="w-full mx-auto my-5 text-center">
            <button
              className="px-3 py-2 bg-blue-600 rounded-xl text-white"
              onClick={() => clearWishlist()}
            >
              Clear list
            </button>
          </div>
        )}
      </div>

      <div className="my-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
        {wishlistItems.map((product) =>
          !product.wishlist ? null : (
            <>
              {" "}
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg px-10 py-10"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="rounded-md h-48"
                />
                <div className="mt-4">
                  <h1 className="text-lg uppercase font-bold">
                    {product.title}
                  </h1>
                  <p className="mt-2 text-gray-600 text-sm">
                    {product.description}...
                  </p>
                  <p className="mt-2 text-gray-600">${product.price}</p>
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

                      <p className="text-gray-600">
                        {cartIteams.find((item) => item.id === product.id)
                          ?.quantity || 0}
                      </p>

                      <button
                        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        onClick={() => {
                          handleRemoveFromCart(product);
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
                      console.log(wishlistItems);
                    }}
                    className="px-4 py-2 mx-3  border-2 border-gray-300 "
                  >
                    ❤️
                  </button>
                </div>
              </div>
            </>
          )
        )}
      </div>
    </>
  );
}

export default WishList;
