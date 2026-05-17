import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // ADD TO CART

  const addToCart = (product) => {

    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      setCartItems(updatedCart);

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  // INCREASE

  const increaseQuantity = (id) => {

    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    setCartItems(updatedCart);
  };

  // DECREASE

  const decreaseQuantity = (id) => {

    const updatedCart = cartItems
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
  };

  // REMOVE

  const removeItem = (id) => {

    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);
  };

  const placeOrder = () => {

  alert("Order placed successfully! 🎉");

  setCartItems([]);

  setShowCart(false);
};

  return (
    <div className="app-container">

      <Navbar cartCount={cartItems.length} setShowCart = {setShowCart} />

      <ProductList addToCart={addToCart} />

     {showCart && (
  <Cart
    cartItems={cartItems}
    increaseQuantity={increaseQuantity}
    decreaseQuantity={decreaseQuantity}
    removeItem={removeItem}
    setShowCart={setShowCart}
    placeOrder={placeOrder}
  />
)}

    </div>
  );
}

export default App;