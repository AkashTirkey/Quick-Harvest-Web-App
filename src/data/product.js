import tomato from "../assets/products/Tomatoes.jpg";
import spinach from "../assets/products/spinach.jpg";
import banana from "../assets/products/banana.jpg";
import apple from "../assets/products/apple.jpg";
import milk from "../assets/products/milk.jpg";
import paneer from "../assets/products/paneer.jpg";
import eggs from "../assets/products/eggs.jpg";
import coriander from "../assets/products/coriander.jpg";
const products = [
  {
    id: 1,
    name: "Tomatoes",
    category: "Vegetables",
    price: 30,
    unit: "500g",
    inStock: true,
    image: tomato,
  },
  {
    id: 2,
    name: "Spinach",
    category: "Vegetables",
    price: 25,
    unit: "250g",
    inStock: true,
    image: spinach,
  },
  {
    id: 3,
    name: "Bananas",
    category: "Fruits",
    price: 45,
    unit: "Dozen",
    inStock: true,
    image: banana,
  },
  {
    id: 4,
    name: "Apples",
    category: "Fruits",
    price: 120,
    unit: "1 kg",
    inStock: true,
    image: apple,
  },
  {
    id: 5,
    name: "Whole Milk",
    category: "Dairy",
    price: 60,
    unit: "500 ml",
    inStock: true,
    image: milk,
  },
  {
    id: 6,
    name: "Paneer",
    category: "Dairy",
    price: 90,
    unit: "200g",
    inStock: false,
    image: paneer,
  },
  {
    id: 7,
    name: "Brown Eggs",
    category: "Dairy",
    price: 80,
    unit: "6 pcs",
    inStock: true,
    image: eggs,
  },
  {
    id: 8,
    name: "Coriander",
    category: "Herbs",
    price: 15,
    unit: "Bunch",
    inStock: true,
    image: coriander,
  },
];

export default products;
