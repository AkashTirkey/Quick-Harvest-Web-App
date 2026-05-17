import React from "react";
import "../styles/Cart.css";

const Cart = ({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  setShowCart,
  placeOrder,
}) => {
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <section className="cart-section">
      {/* HEADER */}

      <div className="cart-header">
        <h2>Cart Items</h2>

        <button className="close-cart" onClick={() => setShowCart(false)}>
          ✕
        </button>
      </div>

      {/* EMPTY CART */}

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                {/* LEFT */}

                <div className="cart-left">
                  <img src={item.image} alt={item.name} />

                  <div>
                    <h4>{item.name}</h4>

                    <p>{item.unit}</p>

                    <span>₹{item.price}</span>
                  </div>
                </div>

                {/* RIGHT */}

                <div className="cart-right">
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* SUMMARY */}

          <div className="cart-summary">
            <h3 className="summary-heading">Order Summary</h3>
            <div className="order-breakdown">
              {cartItems.map((item) => (
                <div className="breakdown-item" key={item.id}>
                  <p>
                    {item.name} × {item.quantity}
                  </p>

                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="summary-row">
              <span>Total Items</span>

              <span>{totalItems}</span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>

              <span>₹{cartTotal}</span>
            </div>

            <div className="summary-row">
              <span>Delivery Charge</span>

              <span>₹40</span>
            </div>

            <div className="summary-row total-row">
              <span>Total Amount</span>

              <span>₹{cartTotal + 40}</span>
            </div>

            <button className="checkout-btn" onClick={placeOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
