import { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  { CartContext } from "../Context/productContext";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {

  const [search , setSearch] = useState("")
  const [products, setProducts] = useState([]);
  const { showModal, toggle , cartIteams, removeFromCart, addToCart } = useContext(CartContext); // Use the context directly


  useEffect(() => {
	const controller = new AbortController()
    ;(async () => {
      const fetchedData = await axios.get('https://dummyjson.com/products/search?q=' + search , {
		signal : controller.signal
	  });
      setProducts(fetchedData.data.products);
    })()
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

  return (
    <div className="flex flex-col justify-center bg-gray-100">
      <ToastContainer />
      <div className="flex justify-between items-center px-20 py-5">
        <h1 className="text-2xl uppercase font-bold mt-10 text-center mb-10">
          Shop
        </h1>
		<div className="mr-[-50rem] px-2">
		<input value={search} onChange={(e)=> setSearch(e.target.value)} type="text" className="bg-white border-2 border-black " /> 
		<button className="ml-2 scale-150" >🔍</button>
		</div>

        
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            
          >
			<Link to="/cart">
				Cart {cartIteams.length}
			</Link>
			
          </button>
        
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
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
						handleRemoveFromCart()
						removeFromCart(product)
					}}
                  >
                    -
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
	 
	
    </div>
  );
}

