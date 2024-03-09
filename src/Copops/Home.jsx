
import Carouselcontainer from './CarouselComp';
import Footer from './Footer';
import Navbar from './Navbar';
import ProductsComp from './ProductsComp';

function Home() {
	
	return (
	<>
	<Navbar/>
	<div className='my-20'>
	<Carouselcontainer/>	
	</div>
	
	<div className='w-full my-20'>
		<img className='mx-auto' src="https://www.beyoung.in/api/catalog/homepage-28/strip-desktop.png" alt="" />

		<img className='mx-auto my-10' width="78%" src="https://www.beyoung.in/api/catalog/homepage-28/Cargo-joggers-desktop-view.jpg" alt="" />
	</div>

{/* products cards  */}

	<div>
	<h1 className='dark:text-white my-10 text-center text-4xl font-bold underline'>Urban Shirts</h1>

		<ProductsComp/>
	</div>

	<div className='w-full my-32'>
		<img className='mx-auto' width="78%" src="https://www.beyoung.in/api/catalog/homepage-5-dec/strip/desktop/offfer-strip-desktop5.jpg" alt="" />
	</div>
	
	<div>
	<h1 className='text-center text-4xl font-bold underline dark:text-white my-10'>Womens Collection</h1>
		<ProductsComp/>
	</div>

	<div className='w-full my-32'>
		<img src="https://www.beyoung.in/api/catalog/homepage-3-10/bbimages/new/Bhuvan-strip-banner-desktop.jpg" alt="" />
	</div>

	<div className='ml-20 my-10 text-3xl flex items-center gap-4'>
		<span className='block h-[50px] w-[12px] bg-yellow-300 text-yellow-300 '>1</span> <span className='dark:text-white'>BEST SELLER</span>
		<div></div>
	</div>

	<div>
		<ProductsComp/>
	</div>

	<div className='w-full mt-20'>
		<Footer/>
	</div>
	</>
	)
}

export default Home
