// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'

function App() {

  return (
    <>
    <div className="app-container">
      <Navbar/>
      <ProductList/>
    </div>
    </>
  )
}

export default App
