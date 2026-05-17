import React from "react";
import "../styles/ProductCard.css"

const ProductCard = ({item,addToCart}) =>{
    
    return(
        <div className = {
            item.inStock
            ? "product-card"
            : "product-card out-of-stock"}>
    
            <div className="product-image">
                <img
                src={item.image}
                alt={item.name}
                />
            </div>

            <div className='product-details'>
                <p className="product-category">
                {item.category}
                </p>

                <h3>{item.name}</h3>

                <p className="product-unit">
                    {item.unit}
                </p>

                <div className="product-bottom">
                    <span className="price"> 
                          ₹{item.price}
                    </span>

                    <button
                        disabled={!item.inStock}
                        onClick={() => addToCart(item)}
                    >
                        {item.inStock ? "Add to Cart" : "Out of Stock"}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ProductCard;