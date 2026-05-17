// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList'

function App() {

  return (
    <>
    <div className="app-container">
      <Navbar/>
      <ProductList/>
      <ProductCard/>
    </div>
    </>
  )
}

export default App
