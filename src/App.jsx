import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Homepage from './pages/Homepage'
import ProductsDetails from './pages/ProductsDetails'
import ProductsList from './pages/ProductsList'
import CreateProduct from './pages/CreateProduct'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<ProductsList />} />
        <Route path='/products/create' element={<CreateProduct />} />
        <Route path='/products/:productId' element={<ProductsDetails />} />
      </Routes>
    </>
  )
}

export default App
