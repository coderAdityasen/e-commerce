import React from 'react'
import { Link } from 'react-router-dom'

function Noitemwishlist() {
	return (
		<>
		<div className="w-full mx-auto h-[100vh]  text-center">
            <h1 className=" dark:text-white py-32 font-bold text-center text-4xl">
              Wishlist is Empty
            </h1>
            <span className="text-green-600 text-2xl dark:text-blue-300 ">
              <Link to="/">Add Some Items From Here</Link>
            </span>
          </div>
		</>
	)
}

export default Noitemwishlist
