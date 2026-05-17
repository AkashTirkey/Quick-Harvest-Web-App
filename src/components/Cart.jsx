import React from "react";
import "../styles/Cart.css";

const Cart = ({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) => {

  return (
    <section className="cart-section">

      <h2>Cart Items</h2>

      {cartItems.length === 0 ? (

        <p className="empty-cart">
          Your cart is empty
        </p>

      ) : (

        <div className="cart-items">

          {cartItems.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              <div className="cart-left">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h4>{item.name}</h4>
                  <p>{item.unit}</p>
                  <span>₹{item.price}</span>
                </div>

              </div>

              <div className="cart-right">

                <div className="quantity-controls">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>

                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeItem(item.id)
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </section>
  );
};

export default Cart;