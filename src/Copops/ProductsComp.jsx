import React, {  useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductsComp() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const fetchedData = await axios.get(
          `https://dummyjson.com/products/`
        );
        setProducts(fetchedData.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <>
      <div className="w-[80%] mx-auto   dark:bg-gray-900">
        <Slider {...settings}>
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-blue-gray-900 shadow-md dark:border-x-8 dark:border-gray-900 border-x-8 border-white rounded-lg px-10 py-10"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="rounded-md h-48"
                />
                <div className="mt-4">
                  <h1 className="dark:text-white text-lg uppercase font-bold">
                    {product.title.slice(0, 10)}
                  </h1>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                    Urban Shirts
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-white">
                    ₹{product.price}{" "}
                    <span className="text-gray-400 line-through">
                      ₹{product.price + 100}
                    </span>{" "}
                    <span className="text-green-500"> &#40;60% Off&#41; </span>{" "}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default ProductsComp;
