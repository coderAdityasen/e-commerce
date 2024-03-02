import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import { CartContextProvider } from "./Context/productContext";
import WishList from "./Components/WishList";

function App() {

  return (
    <>
      <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/wishlist" element={<WishList/>}/>
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
