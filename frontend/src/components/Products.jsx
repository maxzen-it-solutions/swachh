// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import SH2 from "../assets/SH2.png";
// import SA1 from "../assets/SA1.webp";
// import icon3 from "../assets/icon3.png";

// function Products() {
//   const [products, setProducts] = useState([]);
//   const [inlineNotification, setInlineNotification] = useState(null);
//   const [selectedVariants, setSelectedVariants] = useState({}); // ✅ track selected variant per product

//   const navigate = useNavigate();

//   // ✅ Fetch products
//   useEffect(() => {
//     fetch("http://localhost:5000/api/products")
//       .then((res) => res.json())
//       .then(setProducts)
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);

//   // ✅ Handle dropdown change
//   const handleVariantChange = (productId, variantIndex) => {
//     setSelectedVariants((prev) => ({
//       ...prev,
//       [productId]: variantIndex,
//     }));
//   };

//   // ✅ Add to cart
//   const handleAddOnly = (product) => {
//     const variantIndex = selectedVariants[product._id] || 0;
//     const selectedVariant = product.variants[variantIndex];

//     const cartItem = {
//       _id: product._id,
//       name: product.name,
//       image: product.image,
//       qty: 1,
//       variant: selectedVariant.quantity,
//       price: selectedVariant.price,
//     };

//     const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
//     const existingIndex = existingCart.findIndex(
//       (item) => item._id === cartItem._id && item.variant === cartItem.variant
//     );

//     if (existingIndex >= 0) {
//       existingCart[existingIndex].qty += 1;
//     } else {
//       existingCart.push(cartItem);
//     }

//     localStorage.setItem("cartItems", JSON.stringify(existingCart));
//     window.dispatchEvent(new Event("cartUpdated")); // ✅ let Header know

//     setInlineNotification(product._id);
//     setTimeout(() => setInlineNotification(null), 2500);
//   };

//   // ✅ Buy Now
//   const handleBuyNow = (product) => {
//     handleAddOnly(product);
//     navigate("/cart");
//   };

//   return (
//     <div className="w-full">
//       {/* Hero Section */}
//       <motion.section
//         className="bg-[#667D60] text-white py-14 px-6 md:px-16 relative"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="flex flex-col md:flex-row items-center justify-between gap-10">
//           <motion.div
//             className="text-center md:text-left flex flex-col items-center md:items-start"
//             initial={{ x: -50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-3xl md:text-6xl font-bold mb-6 font-serif">
//               OUR PRODUCTS
//             </h1>
//             <ul className="list-decimal md:ml-10 space-y-0 md:space-y-3 text-xl md:text-3xl font-bold font-serif">
//               <li>SAFFRON</li>
//               <li>SHILAJIT RESIN</li>
//             </ul>
//           </motion.div>

//           <motion.div
//             className="relative flex flex-col md:flex-row gap-4 md:gap-6"
//             initial={{ x: 50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <img
//               src={icon3}
//               alt="Leaf"
//               className="w-16 mx-auto mb-2 md:w-32 h-24 md:mx-0 md:mb-0 md:absolute md:bottom-4 md:left-40 md:-translate-x-96"
//             />
//             <div className="w-40 md:w-80 rounded-xl overflow-hidden shadow-lg">
//               <img src={SA1} alt="Saffron" className="w-full h-full object-cover" />
//             </div>
//             <div className="w-40 md:w-80 rounded-xl overflow-hidden shadow-lg">
//               <img src={SH2} alt="Shilajit Resin" className="w-full h-full object-cover" />
//             </div>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Products Grid */}
//       <section className="bg-[#FFF7EC] py-12 px-6 md:px-16">
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Items</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
//           {products.map((p) => {
//             const variantIndex = selectedVariants[p._id] || 0;
//             const selectedVariant = p.variants[variantIndex] || {};

//             return (
//               <motion.div
//                 key={p._id}
//                 className="bg-white rounded-xl  shadow-md overflow-hidden p-4 relative max-w-xs mx-auto"
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <motion.div
//                   className="w-full h-52 md:h-64 overflow-hidden rounded-md"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <motion.img
//                     src={p.image}
//                     alt={p.name}
//                     className="w-full h-full object-cover"
//                     animate={{ y: [0, -10, 0] }}
//                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                   />
//                 </motion.div>

//                 <h2 className="text-lg text-center md:text-3xl font-bold mt-4">{p.name}</h2>

//                 {/* ✅ Dropdown for variants */}
//                 <select
//                   value={variantIndex}
//                   onChange={(e) => handleVariantChange(p._id, Number(e.target.value))}
//                   className="mt-2 border rounded-lg p-2 w-full"
//                 >
//                   {p.variants.map((v, idx) => (
//                     <option key={idx} value={idx}>
//                       {v.quantity} - ₹{v.price}
//                     </option>
//                   ))}
//                 </select>

//                 <p className="text-black font-bold text-sm md:text-base mt-2">
//                   Price: ₹{selectedVariant.price}
//                 </p>

//                 <div className="flex flex-col sm:flex-row gap-3 mt-4">
//                   <button
//                     onClick={() => handleBuyNow(p)}
//                     className="px-4 py-2 rounded-lg flex-1 text-sm md:text-base bg-[#667D60] text-white hover:bg-green-700"
//                   >
//                     Buy Now
//                   </button>
//                   <button
//                     onClick={() => handleAddOnly(p)}
//                     className="px-4 py-2 rounded-lg flex-1 text-sm md:text-base bg-orange-400 text-white hover:bg-orange-700"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>

//                 {/* ✅ Inline Notification */}
//                 {inlineNotification === p._id && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     transition={{ duration: 0.3 }}
//                     className="mt-2 text-green-700 text-sm font-medium bg-green-100 p-2 rounded-md text-center"
//                   >
//                     {p.name} ({selectedVariant.quantity}) added to cart ✅
//                   </motion.div>
//                 )}
//               </motion.div>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Products;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SH2 from "../assets/SH2.png";
import SA1 from "../assets/SA1.webp";
import icon3 from "../assets/icon3.png";
import { useGetProductsQuery } from "../services/productsApi";  // ✅ RTK Query hook

function Products() {
  const { data: products = [], isLoading, isError } = useGetProductsQuery();
  const [inlineNotification, setInlineNotification] = useState(null);
  const [selectedVariants, setSelectedVariants] = useState({});
  const navigate = useNavigate();

  const handleVariantChange = (productId, variantIndex) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [productId]: variantIndex,
    }));
  };

  const handleAddOnly = (product) => {
    const variantIndex = selectedVariants[product._id] || 0;
    const selectedVariant = product.variants[variantIndex];

    const cartItem = {
      _id: product._id,
      name: product.name,
      image: product.image,
      qty: 1,
      variant: selectedVariant.quantity,
      price: selectedVariant.price,
    };

    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingIndex = existingCart.findIndex(
      (item) =>
        item._id === cartItem._id && item.variant === cartItem.variant
    );

    if (existingIndex >= 0) {
      existingCart[existingIndex].qty += 1;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));
    window.dispatchEvent(new Event("cartUpdated"));

    setInlineNotification(product._id);
    setTimeout(() => setInlineNotification(null), 2500);
  };

  const handleBuyNow = (product) => {
    handleAddOnly(product);
    navigate("/cart");
  };

  if (isLoading)
    return <div className="text-center py-10">Loading products...</div>;

  if (isError)
    return (
      <div className="text-center py-10 text-red-500">
        Error loading products.
      </div>
    );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section
        className="bg-[#667D60] text-white py-14 px-6 md:px-16 relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col md:flex-col xl:flex-row items-center justify-between gap-10">
          <motion.div
            className="text-center md:text-left flex flex-col items-center md:items-start"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-6xl font-bold mb-6 font-serif">
              OUR PRODUCTS
            </h1>
            <ul className="list-decimal md:ml-10 space-y-0 md:space-y-3 text-xl md:text-3xl font-bold font-serif">
              <li>SAFFRON</li>
              <li>SHILAJIT RESIN</li>
            </ul>
          </motion.div>

          <motion.div
            className="relative flex flex-col md:flex-row gap-4 md:gap-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={icon3}
              alt="Leaf"
              className="w-16 mx-auto mb-2 md:w-32 h-24 md:mx-0 md:mb-0 md:absolute md:bottom-4 md:left-40 md:-translate-x-96"
            />
            <div className="w-40 md:w-60 md:w-80 rounded-xl overflow-hidden shadow-lg">
              <img src={SA1} alt="Saffron" className="w-full h-full object-cover" />
            </div>
            <div className="w-40 md:w-80 rounded-xl overflow-hidden shadow-lg">
              <img src={SH2} alt="Shilajit Resin" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Products Grid */}
      {/* <section className="bg-[#FFF7EC] py-12 px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Items
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {products.map((p) => {
            const variantIndex = selectedVariants[p._id] || 0;
            const selectedVariant = p.variants[variantIndex] || {};

            return (
              <motion.div
                key={p._id}
                className="bg-white rounded-xl shadow-md overflow-hidden p-4 relative max-w-xs mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="w-full h-52 md:h-64 overflow-hidden rounded-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                <h2 className="text-lg text-center md:text-3xl font-bold mt-4">
                  {p.name}
                </h2>

                <select
                  value={variantIndex}
                  onChange={(e) =>
                    handleVariantChange(p._id, Number(e.target.value))
                  }
                  className="mt-2 border rounded-lg p-2 w-full"
                >
                  {p.variants.map((v, idx) => (
                    <option key={idx} value={idx}>
                      {v.quantity} - ₹{v.price}
                    </option>
                  ))}
                </select>

                <p className="text-black font-bold text-sm md:text-base mt-2">
                  Price: ₹{selectedVariant.price}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <button
                    onClick={() => handleBuyNow(p)}
                    className="px-4 py-2 rounded-lg flex-1 text-sm md:text-base bg-[#667D60] text-white hover:bg-green-700"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => handleAddOnly(p)}
                    className="px-4 py-2 rounded-lg flex-1 text-sm md:text-base bg-orange-400 text-white hover:bg-orange-700"
                  >
                    Add to Cart
                  </button>
                </div>

                {inlineNotification === p._id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-green-700 text-sm font-medium bg-green-100 p-2 rounded-md text-center"
                  >
                    {p.name} ({selectedVariant.quantity}) added to cart ✅
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section> */}

      <section className="bg-[#FFF7EC] py-12 px-4 sm:px-8 md:px-16">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Items</h2>

  {/* ✅ Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {products.map((p) => {
      const variantIndex = selectedVariants[p._id] || 0;
      const selectedVariant = p.variants[variantIndex] || {};

      return (
        <motion.div
          key={p._id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 relative w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* ✅ Responsive Image */}
          <motion.div
            className="w-full aspect-[4/3] overflow-hidden rounded-xl"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={p.image}
              alt={p.name}
              className="w-full h-full object-cover"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Product Name */}
          <h2 className="text-lg sm:text-xl md:text-2xl text-center font-bold mt-4">
            {p.name}
          </h2>

          {/* ✅ Dropdown for variants */}
          <select
            value={variantIndex}
            onChange={(e) => handleVariantChange(p._id, Number(e.target.value))}
            className="mt-3 border rounded-lg p-2 w-full"
          >
            {p.variants.map((v, idx) => (
              <option key={idx} value={idx}>
                {v.quantity} - ₹{v.price}
              </option>
            ))}
          </select>

          {/* Price */}
          <p className="text-black font-bold text-base md:text-lg mt-2">
            Price: ₹{selectedVariant.price}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              onClick={() => handleBuyNow(p)}
              className="px-5 py-2 rounded-lg flex-1 text-sm md:text-base bg-[#667D60] text-white hover:bg-green-700"
            >
              Buy Now
            </button>
            <button
              onClick={() => handleAddOnly(p)}
              className="px-5 py-2 rounded-lg flex-1 text-sm md:text-base bg-orange-400 text-white hover:bg-orange-700"
            >
              Add to Cart
            </button>
          </div>

          {/* ✅ Inline Notification */}
          {inlineNotification === p._id && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="mt-2 text-green-700 text-sm font-medium bg-green-100 p-2 rounded-md text-center"
            >
              {p.name} ({selectedVariant.quantity}) added to cart ✅
            </motion.div>
          )}
        </motion.div>
      );
    })}
  </div>
</section>
    </div>
  );
}

export default Products;
