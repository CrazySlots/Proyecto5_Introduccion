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
  let Site 
    switch(window.location.pathname){
        case "/":
          site =Home
        case "/produsct":
          site=Products
          break
        case "/whoAreWe":
          site=WhoAreWe
          break
        case "/about":
          site=About
          break
        case "/vendors":
          site=Vendors
          break
        case "/clients":
          site=Clients
          break
        case "/contact":
          site=Contact
          break
    }
  return (
    <>
      <TopNav />
      <Site />
    </>
  )
}

export default App
