import React from 'react'
import logo from '../assets/jackslogo.webp'


export  function About() {
  return (
    <div className='container row'>
      <img src={logo} alt="" className='m-auto col-md-5 logo'  />
      <div className='col-md-7 text-center my-auto'>
      <h1 className='text-center '>Salon de tatuajes</h1>      
      <h2>Tu cuerpo pide tinta!😜</h2>
      <p>Si estas pensando en un diseño para tatuarte y queres tener mas información al respecto, te invito a que consultes con nosotros.</p>
      </div>
    </div>
  )
}
