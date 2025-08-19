import React from "react";
import { Routes, Route } from "react-router-dom";
import AllPages from "../src/Home/AllPages";
// import Homepage from "./components/Homepage";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
     import ProductDetail1 from "./components/ProductDetail1";
import ProductDetail2 from "./components/ProductDetail2";
// export default function App() {
//   return (
//     <Header/>
//     <Routes>
//       <Route path="/" element={<AllPages />} />

//       {/* <Route path="/Homepage" element={<Homepage />} /> */}
//       <Route path="/about" element={<About />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//     <Footer/>
//   );
// }


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AllPages />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
   

<Route path="/productDetail1" element={<ProductDetail1 />} />
<Route path="/productDetail2" element={<ProductDetail2 />} />

      </Routes>
      <Footer />
    </>
  );
}
