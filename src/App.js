import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./Pages/HomePages";
import OverSizedTshirtsPage from "./Pages/OverSizedTshirts/OverSizedTshirtspage";
import RegularTshirtsPage from "./Pages/RegularTshirtsPage/RegularTshirtsPage";
import ContactPage from "./Pages/Contact/Contact";

function App() {
  return (
   <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePages/>} />
    <Route path="/oversized-tshirts" element={<OverSizedTshirtsPage/>} />
    <Route path="/regular-tshirts" element={<RegularTshirtsPage/>} />
    <Route path="/contact-us" element={<ContactPage/>} />



  

  </Routes>
  
  </BrowserRouter>
   
   </>
  );
}

export default App;
