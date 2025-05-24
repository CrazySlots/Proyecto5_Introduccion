import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNav from './components/staticMenu'
import Home from './components/home'
import Products from './components/products'
import WhoAreWe from './components/whoAreWe'
import About from './components/about'
import Vendors from './components/vendors'
import Clients from './components/clients'
import Contact from './components/contact'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <TopNav />
      
    </>
  )
}

export default App
