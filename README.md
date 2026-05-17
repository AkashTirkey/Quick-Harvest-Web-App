Quick Harvest 🌿🛒

A responsive grocery ordering web application inspired by modern quick-commerce platforms like Zepto and Blinkit.

Built as a Frontend Developer Internship Assignment for Urban Harvest using React and CSS.

Features
Product Listing
Displays grocery products with:
Product image
Name
Category
Price
Unit
Category filter pills:
All
Vegetables
Fruits
Dairy
Herbs
Out-of-stock products are visually different and cannot be added to the cart.
Cart Functionality
Add products to cart
Increase/decrease quantity
Remove products from cart
Cart item count updates dynamically
Cart opens as a responsive sidebar drawer
Order Summary
Displays:
Item quantities
Individual totals
Subtotal
Flat ₹40 delivery charge
Final total amount
“Place Order” button:
Disabled when cart is empty
Clears cart after successful order
Shows confirmation message
Responsive Design
Fully responsive layout for:
Desktop
Tablet
Mobile devices
Tech Stack
React
CSS3
Vite
React Icons
Folder Structure
src/
│
├── assets/
│   ├── products/
│   └── fresh_harvest.png
│
├── components/
│   ├── Navbar.jsx
│   ├── ProductList.jsx
│   ├── ProductCard.jsx
│   └── Cart.jsx
│
├── data/
│   └── product.js
│
├── styles/
│   ├── Navbar.css
│   ├── ProductList.css
│   ├── ProductCard.css
│   └── Cart.css
│
├── App.jsx
├── App.css
└── main.jsx
Project Structure Explanation

The project is divided into reusable React components to keep the application modular, scalable, and easy to maintain.

Navbar handles branding, search UI, and cart access.
ProductList manages category filtering and product rendering.
ProductCard displays individual grocery items.
Cart manages cart operations and order summary.

Product data is stored separately inside the data folder to maintain separation between UI and application data.

Styles are organized into dedicated CSS files for better readability and maintainability.

How to Run the Project Locally
1. Clone the Repository
git clone <your-github-repo-link>
2. Navigate to Project Folder
cd quick-harvest
3. Install Dependencies
npm install
4. Start Development Server
npm run dev
Future Improvements
Search functionality
Toast notifications
Backend integration
Authentication
Persistent cart using Local Storage

Author
Akash Tirkey
