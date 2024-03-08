import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import { CartContextProvider } from "./Context/productContext";
import WishList from "./Components/WishList";
import ProductLandingPage from "./Components/productLandingPage";
import CarouselComponent from "./Components/CarouselComponent";
import Home from "./Copops/Home";

function App() {

  return (
    <>
      <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Products />} />
          <Route path="/:prodid" element={<ProductLandingPage />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/wishlist" element={<WishList/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
