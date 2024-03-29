import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/productContext';
import ThemeBtn from '../Components/ThemeButton';

function Navbar() {
	const { cartIteams , search , setSearch } = useContext(CartContext);
  const [inputval , setinputval] = useState("")

  const handleSearchButtonClick = () => {
    setSearch(inputval); 
  };

	return (
		<>
		<div className='dark:bg-gray-900 dark:text-white fixed top-0 z-10 w-full  overflow-hidden text-center flex justify-between px-32 bg-white  py-3 items-center'>
<ul className="flex items-center justify-center gap-5 font-bold">
 <li><Link to="/"><h1 className=" dark:text-white text-3xl font-bold text-gray-800">BEYOUNG</h1></Link></li>
 <li><Link><h1>MEN</h1></Link></li>
 <li><Link>WOMEN</Link></li>
 <li><Link>COMBO</Link></li>
 <li><Link>MEN'S SHIRTS</Link></li>
</ul>

<ul className="z-[1] flex gap-5 items-center justify-end ">
  <li>
    <form onSubmit={(e) => { e.preventDefault()}} className="max-w-md mx-auto">
  <label
    htmlFor="default-search"
    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  >
    Search
  </label>
  <div className="relative">
    <input
    value={inputval}
    onChange={(e)=>setinputval(e.target.value)}
      type="search"
      id="default-search"
      className="block w-full px-6 py-2 ps-2 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search iphone,shirts ..."
    />
    <button
    onClick={handleSearchButtonClick}
      type="submit"
      className="text-white absolute end-0 bottom-0.5  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <Link to={`/${inputval}`}>
     <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
        className='dark:stroke-white'
          d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>  
      </Link>
    </button>
  </div>
</form>
  </li>
 <li><Link to="/wishlist">
 <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
        className='dark:stroke-white'
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 8.06253C22 15.0874 12.0004 21 12.0004 21C12.0004 21 2 15 2 8.07677C2 5.25003 4.22222 3.00003 7 3.00003C9.77778 3.00003 12 6.37503 12 6.37503C12 6.37503 14.2222 3.00003 17 3.00003C19.7778 3.00003 22 5.25003 22 8.06253Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg> </Link>
   </li>
 <li className=" relative flex">
   <Link to="/cart">
   <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
        className='dark:stroke-white'
          d="M3 3L5.5 3L6 5M6 5L8 13M6 5H21L19 13H8M8 13H7.5C6.67157 13 6 13.6716 6 14.5C6 15.3284 6.67157 16 7.5 16H19M19 20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19C18.5523 19 19 19.4477 19 20ZM9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>  <span className="absolute dark:text-black bg-yellow-300 rounded-[20px] h-[18px] w-[18px] text-center text-[12px] top-[-9px] left-3">{cartIteams.length}</span>
   </Link>
   </li>
   <li className='mx-5'>
    <ThemeBtn/>
   </li>
</ul>
</div>
   </>
	)
}

export default Navbar
