import { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  { CartContext } from "../Context/productContext";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {

  const [search , setSearch] = useState("")
  const [products, setProducts] = useState([]);
  const [loading , setLoading] = useState(true)
  const [like , setLike] = useState(false)
  const { cartIteams, removeFromCart, addToCart  , addToWishlist } = useContext(CartContext); // Use the context directly




  useEffect(() => {
    const controller = new AbortController();
  
    // Set loading state to true initially
    setLoading(true);
  
    // Introduce a 3-second delay using setTimeout
    setTimeout(async () => {
      try {
        // Fetch data
        const fetchedData = await axios.get('https://dummyjson.com/products/search?q=' + search, {
          signal: controller.signal
        });
  
        // Update the products state with fetched data
        setProducts(fetchedData.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Set loading state to false after 3 seconds
        setLoading(false);
      }
    }, 500);
  
    // Cleanup function to handle component unmounting
    return () => {
      controller.abort(); // Cancel the fetch request if component unmounts
    };
  
  }, [search]);
  

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

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notifyRemovedFromCart(product);
  };

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
      <div className="flex flex-col justify-center bg-gray-100">
      <ToastContainer />
      <div className="fixed top-0 z-10 w-full h-20 bg-amber-300 flex justify-between items-center px-2 md:px-20 xl:px-20 py-5">
        <h1 className="text-2xl uppercase font-bold mt-10 text-center mb-10">
          Shop
        </h1>

        <div>
        <Link to="/wishlist">
        wishlist
        </Link>
      </div>

		<div className=" mr-[rem] xl:mr-[-50rem] lg:mr-[-20rem] px-2">

     
		<form onSubmit={handleSubmit}>
      <input
        id="searchInput"
        type="text"
        className="rounded-2xl px-1 py-1 xl:px-4  bg-white border-none border-white"
      />
      <button type="submit" className="ml-2 scale-150">🔍</button>
    </form>


		</div>

        
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            
          >
			<Link to="/cart">
				Cart {cartIteams.length}
			</Link>
			
          </button>
        
      </div>
      <div className="my-24 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
        {products.map((product) => (
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
              <h1 className="text-lg uppercase font-bold">{product.title}</h1>
              <p className="mt-2 text-gray-600 text-sm">
                {product.description.slice(0, 40)}...
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
                    onClick={() =>
						addToCart(product)}
                  >
                    +
                  </button>

                  <p className="text-gray-600">
                    {cartIteams.find((item) => item.id === product.id)
                      ?.quantity || 0}
                  </p>

                  <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() =>{
						handleRemoveFromCart(product)
						removeFromCart(product)
					}}
                  >
                    -
                  </button>

                </div>
              )
              
              }

<button
  onClick={()=>{
  addToWishlist(product)
  }}
className="px-4 py-2 mx-3">
 add wishlist
</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
    }
    
    </>
  );
}

