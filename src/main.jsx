import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Header } from './components/Header.jsx'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { About } from './components/About.jsx'
import { Feedback } from './components/Feedback.jsx'
import Contacto from './components/Contacto.jsx'
import { Cotizacion } from './components/Cotizacion.jsx'
import { Gallery } from './components/Gallery.jsx'
import "./App.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
        <Cotizacion/>
      <Routes>
        <Route path='/' element={
          <>
            <About />
            <Feedback />
          </>
        } />
        <Route path='/Contacto' element={<Contacto/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
