import React from 'react'
import { Carousel } from "@material-tailwind/react";

function Carouselcontainer() {
	return (
		<>
		<Carousel className="rounded-xl">
      <img
        src="https://www.beyoung.in/api/catalog/homepage-28/Plain-tshirt-home-page-banner-29-02-2024-desktop-view.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.beyoung.in/api/catalog/homepage-28/Plain-tshirt-home-page-banner-29-02-2024-desktop-view.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.beyoung.in/api/catalog/homepage-28/Plain-tshirt-home-page-banner-29-02-2024-desktop-view.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
		</>
	)
}

export default Carouselcontainer
