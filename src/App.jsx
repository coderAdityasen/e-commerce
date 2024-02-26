import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import { CartContextProvider } from "./Context/productContext";

function App() {

  return (
    <>
      <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
