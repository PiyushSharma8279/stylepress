import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./Pages/HomePages";
import OverSizedTshirtsPage from "./Pages/OverSizedTshirts/OverSizedTshirtspage";
import RegularTshirtsPage from "./Pages/RegularTshirtsPage/RegularTshirtsPage";
import ContactPage from "./Pages/Contact/Contact";
import ReturnPolicy from "./Pages/ReturnPolicy/ReturnPolicy";
import ProductDetails from "./Pages/ProductDetailPage/ProductDetailPage";
import { CartProvider } from "./Context/CartContext";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/CheckOut";

function App() {
  return (
   <>
  <BrowserRouter>
  <CartProvider>
  <Routes>
    <Route path="/" element={<HomePages/>} />
    <Route path="/oversized-tshirts" element={<OverSizedTshirtsPage/>} />
    <Route path="/regular-tshirts" element={<RegularTshirtsPage/>} />
    <Route path="/contact-us" element={<ContactPage/>} />
    <Route path="/return-policy" element={<ReturnPolicy/>} />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/checkout" element={<Checkout />} />





  

  </Routes>
  </CartProvider>
  
  </BrowserRouter>
   
   </>
  );
}

export default App;
