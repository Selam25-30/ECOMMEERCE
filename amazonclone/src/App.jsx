import { useState } from 'react'
import Header from "./Components/Header/Header"
import CarouselEffect from './Components/Carousel/CarouselEffect'
import Category from './Components/Catagory/Category'
import Product from './Components/Product/Product'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header />

   <CarouselEffect/>
       <Category/>
      <Product />
   </>
  )
}

export default App
