import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/productContext'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar';

function ProductSearchpage() {
  const [priceFilter, setPriceFilter] = useState(100)
	const {products} = useContext(CartContext)

  const filteredProducts = products.filter(product => product.price <= priceFilter);

  
	return (
		<>
    <Navbar/>
		<div className='mx-auto py-20'>
      <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={6}
            max={1000}
            value={priceFilter}
            className='cursor-pointer'
            onChange={(e) => setPriceFilter(e.target.value)}
          />
          <label className='dark:text-white'>Price: ₹{priceFilter}</label>
        </div>
      <div className='h-[100vh] overflow-y-auto '>
      {filteredProducts.map((product) =>
      (
              <div
                key={product.id}
                className="bg-white w-8/12 flex dark:bg-blue-gray-900 mx-auto shadow-md dark:border-x-8 dark:border-gray-900 rounded-lg px-10 py-10 my-10"
              >
                <Link className='w-full flex justify-between' to={`/product/${product.id}`}>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="rounded-md h-48"
                  />
                  <div className="mt-4">
                    <h1 className="dark:text-white text-lg uppercase font-bold">
                      {product.title.slice(0,10)}
                    </h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                      Urban Shirts
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-white">₹{product.price} <span className='text-gray-400 line-through'>₹{product.price + 100}</span> <span className='text-green-500'> &#40;60% Off&#41; </span> </p>
                   <button className='px-3 py-2 bg-light-green-700 my-5 hover:bg-light-green-600 text-white'>Buy Now</button>
                  </div>
                </Link>
              </div>
            ))}
      </div>
		
		</div>

		</>
	)
}

export default ProductSearchpage
