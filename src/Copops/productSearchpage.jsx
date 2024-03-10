import React, { useContext } from 'react'
import { CartContext } from '../Context/productContext'
import { useParams } from 'react-router-dom'

function ProductSearchpage() {
	const {search} = useParams;
	const {products} = useContext(CartContext)
	
	return (
		<>
		<div>
		{products.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-blue-gray-900 shadow-md dark:border-x-8 dark:border-gray-900 rounded-lg px-10 py-10"
              >
                <Link to={`/${product.id}`}>
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
                  </div>
                </Link>
              </div>
            ))}
		</div>
		</>
	)
}

export default ProductSearchpage
