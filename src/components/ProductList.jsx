import React, {useState} from 'react';
import products from '../data/product';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const categories = [
    "All",
    "Vegetables",
    "Fruits",
    "Dairy",
    "Herbs"
];

const ProductList = ({addToCart}) => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = 
    selectedCategory === "All"
    ? products
    : products.filter((item) => item.category === selectedCategory);
    
    return (
        <section className="product-section">
            <div className="category-pills">
                {categories.map((category)=>(
                    <button key={category} className={selectedCategory=== category
                        ? "pill active-pill"
                        : "pill"
                    } onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            

            <div className="product-grid">
                {filteredProducts.map((item) =>(
                    <ProductCard
                        key={item.id}
                        item = {item}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProductList;