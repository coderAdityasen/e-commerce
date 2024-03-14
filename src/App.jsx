import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import { CartContextProvider } from "./Context/productContext";
import WishList from "./Components/WishList";
import ProductLandingPage from "./Components/productLandingPage";
import Home from "./Copops/Home";
import ProductSearchpage from "./Copops/productSearchpage";

function App() {

  return (
    <>
      <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/product/:prodid" element={<ProductLandingPage />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/wishlist" element={<WishList/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/:prodname" element={<ProductSearchpage/>}/>
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
