// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import AllPages from "./Home/AllPages";
// import About from "./components/About";
// import Products from "./components/Products";
// import Contact from "./components/Contact";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import ProductDetail1 from "./components/ProductDetail1";
// import ProductDetail2 from "./components/ProductDetail2";
// import Cart from "./components/Cart";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Blog from "./components/Blog";
// import AdminDashboard from "./admin/components/Admindashboard";
// import OrdersPage from "./admin/components/OrdersPage";
// import CheckOut from "./components/CheckOut";
// import ProfilePage from "./components/ProfilePage"
// import Customers from "./admin/components/Customers";
// import Sidebar from "./admin/components/Sidebar";
// // import AdminProducts from "./admin/components/ProductsPage";
// import Coupons from "./admin/components/Coupons";
// import Leads from "./admin/components/Leads";
// import CelebrityLeads from "./admin/components/CelebrityLeads";
// import Myorders from "./components/Myorders";
// import AllProducts from "./admin/components/AllProducts";

// export default function App() {
//   const location = useLocation();


//   // ✅ Hide Header & Footer for Admin and OrdersPage
//   const hideLayout =
//     location.pathname.startsWith("/admin") ||
//     location.pathname.startsWith("/OrdersPage") ||
//     location.pathname.startsWith("/Customers")||
//     // location.pathname.startsWith("/ProductsPage")||
//     location.pathname.startsWith("/coupons") ||
//     location.pathname.startsWith("/leads")||
//     location.pathname.startsWith("/allproducts")||
//     location.pathname.startsWith("/celebrity-leads");
//     // location.pathname.startsWith("/celebrity-leads/:celebrityName");

//   return (
//     <>
    
//       {!hideLayout && <Header />}

//       <Routes>
//         <Route path="/" element={<AllPages />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/productDetail1" element={<ProductDetail1 />} />
//         <Route path="/productDetail2" element={<ProductDetail2 />} />
//         <Route path="/OrdersPage" element={<OrdersPage />} />
//         <Route path="/CheckOut" element={<CheckOut/>}/>
//         <Route path="/ProfilePage" element={<ProfilePage/>}/>
//         <Route path="/Myorders" element={<Myorders/>}/>
//         <Route path="/Customers" element={<Customers/>}/>
//         <Route path="/Sidebar" element={<Sidebar/>}/>
//         <Route path="/allproducts" element={<AllProducts/>}/>
//         {/* <Route path="/Productspage" element={<AdminProducts/>}/> */}
//         <Route path="/coupons" element={<Coupons/>}/>
//         <Route path="/celebrity-leads/:celebrityName" element={<CelebrityLeads/>}/>
//         <Route path="/leads" element={<Leads/>}/>
//         {/* <Route path="/leads" element={<Leads/>}/> */}
//       </Routes>

//       {!hideLayout && <Footer />}
//     </>
//   );
// }


import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./admin/components/Sidebar";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const location = useLocation();

  // 🔹 Hide Header & Footer for admin dashboard
  const isDashboard = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboard && <Header />}

      <main>
        {/* {isDashboard && <Sidebar />} */}
        <Outlet /> {/* Pages will render here */}
      </main>

      {!isDashboard && <Footer />}
            <ScrollToTop />

    </div>
  );
}
