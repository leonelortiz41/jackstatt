import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/jackslogo.webp'
import {FiMoreVertical} from 'react-icons/fi'

export function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg   justify-content-around d-flex header" style={{maxHeight:"100px"}}>
                <div className="">
                    <Link className="navbar-brand" to="/">
                        {/* <img src={logo} alt="" className='' style={{maxHeight:"95px"}}/> */}
                        Jack's Tattoo
                        </Link>

                </div>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><FiMoreVertical/></span>
                    </button>
                    <div className="collapse navbar-collapse position-lg-absolute mt-3" id="navbarSupportedContent">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <a type="button" className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Pedir Cotización
                                </a>

                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="Contacto">Contacto</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Gallery">Galeria</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav >
        </div >
    )
}
