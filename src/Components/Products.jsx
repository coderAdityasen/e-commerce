import { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../Context/productContext";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Products() {
  // const [search , setSearch] = useState("")
  // const [products, setProducts] = useState([]);
  const {
    loading,
    setSearch,
    products,
    cartIteams,
    removeFromCart,
    addToCart,
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
  } = useContext(CartContext);

  const notifyAddedToCart = (item) =>
    toast.success(`${item.title} added to cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#fff",
        color: "#000",
      },
    });

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


  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.elements.searchInput.value);
  };

  return (
    <>
      {loading ? (
        <div className="my-24 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10 ">
          <div
            role="status"
            className="bg-white h-[25rem]  px-10 py-10 max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
          >
            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
            <div className="flex items-center mt-4"></div>
          </div>
          <div
            role="status"
            className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
          >
            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
            <div className="flex items-center mt-4"></div>
          </div>
          <div
            role="status"
            className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
          >
            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
            <div className="flex items-center mt-4"></div>
          </div>
          <div
            role="status"
            className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
          >
            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
            <div className="flex items-center mt-4"></div>
          </div>
        </div>
      ) : (
        <>
        <div className="flex flex-col justify-center bg-gray-100">
          <ToastContainer />
          <div className="fixed top-0 z-10 w-full h-20 bg-amber-300 flex justify-between items-center px-2 md:px-20 xl:px-20 py-5">
            <h1 className="text-2xl uppercase font-bold mt-10 text-center mb-10">
              Shop
            </h1>

            <div>
              <button className="px-3 py-2 bg-pink-600 text-white font-bold rounded-xl">
                <Link to="/wishlist">wishlist</Link>
              </button>
            </div>

            <div className=" mr-[1rem] xl:mr-[-19rem] lg:mr-[-20rem] px-2">
              <form onSubmit={handleSubmit}>
                <input
                  id="searchInput"
                  type="text"
                  className="rounded-2xl px-1 py-1 xl:px-4  bg-white border-none border-white"
                />
                <button type="submit" className="ml-2 scale-150">
                  🔍
                </button>
              </form>
            </div>
            <button className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
              <Link to="/cart">Cart {cartIteams.length}</Link>
            </button>
          </div>

          <div className="my-24 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
            
          </div>
        </div>
      </>)}
    </>
  );
}
