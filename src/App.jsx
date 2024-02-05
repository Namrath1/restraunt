import { BrowserRouter, Routes } from "react-router-dom"
import { Route } from 'react-router-dom';
import AboutPage from "./components/AboutPage"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"

import MenuPage from "./components/MenuPage"
import ContactPage from "./components/ContactPage";


function App() {


  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/about"element={<AboutPage/>} />
      <Route path="/menu" element={<MenuPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
