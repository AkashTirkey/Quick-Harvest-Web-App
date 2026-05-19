🌿 Quick Harvest

A responsive grocery ordering web application inspired by modern quick-commerce platforms like Zepto and Blinkit.

Built as a Frontend Developer Internship Assignment for Urban Harvest using React + Vite + CSS.

🚀 Live Features
🛒 Product Listing
Displays grocery products with image, name, category, price, and unit
Category filters:
All
Vegetables
Fruits
Dairy
Herbs
Out-of-stock items are visually disabled and cannot be added to cart
🧺 Cart Functionality
Add products to cart
Increase / decrease quantity
Remove items from cart
Dynamic cart item counter
Responsive cart sidebar drawer
📦 Order Summary
Item-wise quantity breakdown
Individual item totals
Subtotal calculation
Flat ₹40 delivery charge
Final payable amount
“Place Order” button:
Disabled when cart is empty
Clears cart on successful order
Shows confirmation message
📱 Responsive Design

Optimized for:

💻 Desktop
📟 Tablet
📱 Mobile
🛠 Tech Stack
React
Vite
CSS3
React Icons 


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


🧠 Architecture Overview

The application is built using a modular React component structure for scalability and maintainability.

Navbar → Branding, search UI, cart access
ProductList → Handles filtering + product rendering
ProductCard → Individual product display logic
Cart → Cart management + order summary

Product data is separated inside the data folder to maintain clean UI-data separation.

Styles are organized per component for better readability and maintainability.

⚙️ Getting Started
1. Clone the Repository
git clone <your-github-repo-link>
2. Move into Project Directory
cd quick-harvest
3. Install Dependencies
npm install
4. Start Development Server
npm run dev
🔮 Future Improvements
🔍 Product search functionality
🔔 Toast notifications
🔐 Authentication system
🧠 Backend integration
💾 Persistent cart using Local Storage
👨‍💻 Author

Akash Tirkey
