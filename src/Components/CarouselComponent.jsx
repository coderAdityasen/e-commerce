import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { CartContext } from '../Context/productContext';
import { Link } from "react-router-dom";

function CarouselComponent() {

	const {
		products,
		cartIteams,
		removeFromCart,
		addToCart,
		wishlistItems,
		addToWishlist,
		removeFromWishlist,
	  } = useContext(CartContext);
	
	  const handleRemoveFromCart = (product) => {
		removeFromCart(product);
	  };


	return (
		<>
		 <Swiper
      spaceBetween={10}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

		{products.map((product) => (
			<SwiperSlide>
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg px-10 py-10"
              >
                <Link to={`/${product.id}`}>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="rounded-md h-48"
                  />
                  <div className="mt-4">
                    <h1 className="text-lg uppercase font-bold">
                      {product.title.slice(0,20)}
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm">
                      {product.description.slice(0, 20)}...
                    </p>
                    <p className="mt-2 text-gray-600">${product.price}</p>
                  </div>
                </Link>
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
                          if (cartIteams[0].quantity === 1) {
                            handleRemoveFromCart(product);
                          } else {
                            removeFromCart(product);
                          }
                        }}
                      >
                        -
                      </button>
                    </div>
                  )}
                  <div>
                    {!wishlistItems.find((item) => item.id === product.id) ? (
                      <button
                        onClick={() => {
                          addToWishlist(product);
                        }}
                        className="px-4 py-2 mx-3 border-2 border-gray-300 "
                      >
                        💛
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          removeFromWishlist(product);
                        }}
                        className="px-4 py-2 mx-3  border-2 border-gray-300 "
                      >
                        ❤️
                      </button>
                    )}
                  </div>
                </div>
              </div>
        </SwiperSlide>    
		 ))}
      
    </Swiper>
		</>
	)
}

export default CarouselComponent
