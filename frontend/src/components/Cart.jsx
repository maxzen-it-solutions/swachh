import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function CartPage() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ✅ Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQty = (_id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === _id
          ? { ...item, qty: type === "inc" ? item.qty + 1 : Math.max(item.qty - 1, 1) }
          : item
      )
    );
  };

  const removeItem = (_id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== _id));
  };

  const clearCart = () => {
    setCartItems([]); // ✅ Clears the cart
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleProceed = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login", { state: { from: "/cart" } });
      return;



    }

    // ✅ Save cart to localStorage before checkout
    localStorage.setItem("checkoutItems", JSON.stringify(cartItems));

    // ✅ Just navigate (checkout page will read from localStorage)
    navigate("/checkout");
  };
  

  return (
    <div className="bg-gray-50 min-h-screen p-6 relative">
      {/* ✅ Floating Cart Symbol with Item Count */}
      {/* <div className="absolute top-6 right-6">
        <div className="relative">
          <ShoppingCart className="w-8 h-8 text-green-700" />
          {cartItems.length > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full"
            >
              {cartItems.reduce((a, c) => a + c.qty, 0)}
            </motion.span>
          )}
        </div>
      </div> */}

      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-600"
        >
          Your cart is empty.
        </motion.p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-6">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  layout
                  className="flex items-center bg-white p-4 rounded-lg shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="ml-4 flex-1">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">₹{item.price}</p>
                    <p className="text-sm text-gray-500">Weight: {item.type}</p>

                    <div className="flex items-center mt-3">
                      <button
                        onClick={() => updateQty(item._id, "dec")}
                        className="px-2 py-1 bg-gray-200 rounded-md"
                      >
                        -
                      </button>
                      <span className="w-14 text-center border mx-2 rounded-md">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item._id, "inc")}
                        className="px-2 py-1 bg-gray-200 rounded-md"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-lg font-bold">
                      ₹{item.price * item.qty}
                    </div>
                    <button
                      onClick={() => removeItem(item._id)}
                      className="text-red-500 text-sm mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Price Details */}
          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-4">Price Details</h2>
            <div className="flex justify-between mb-2">
              <span>Price ({cartItems.reduce((a, c) => a + c.qty, 0)} items)</span>
              <span>₹{totalPrice}</span>
            </div>
            {/* <div className="flex justify-between mb-2">
              <span>Discount</span>
              <span className="text-green-600">-₹50</span>
            </div> */}
            <div className="flex justify-between mb-2">
              <span>Delivery Charges</span>
              <span className="text-green-600">Free</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              {/* <span>₹{totalPrice > 0 ? totalPrice - 50 : 0}</span> */}
                            <span>₹{totalPrice}</span>

            </div>

            <button
              onClick={handleProceed}
              disabled={totalPrice === 0}
              className={`w-full mt-4 py-2 rounded-lg text-white ${
                totalPrice === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              Proceed to Buy
            </button>

            {/* ✅ Clear Cart Button with animation */}
            {cartItems.length > 0 && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                onClick={clearCart}
                className="w-full mt-3 py-2 rounded-lg text-white bg-red-500 hover:bg-red-600"
              >
                Clear Cart
              </motion.button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;


