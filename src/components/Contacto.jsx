import React from 'react'
import { SiGmail, SiInstagram, SiWhatsapp, SiGooglemaps } from 'react-icons/si'
export default function Contacto() {
    return (
        <div className='contacto'>
            <div className='d-flex flex-column flex-sm-row mt-5 justify-content-evenly align-center mx-auto'>
                <label  className='text-center' htmlFor="">
                    <SiWhatsapp />
                    <a href="https://wa.me/+5493815750711" target='_blank'>+5493815750711</a>
                </label>
                <label className='text-center' htmlFor="">
                    <SiInstagram />
                    <a href="https://www.instagram.com/jack.s.tattoo/" target='_blank'>JacksTattoo</a>
                </label>
                <label className='text-center' htmlFor="">
                    <SiGmail />
                    <a href="">email</a>
                </label>
                <label className='text-center' htmlFor="">
                    <SiGooglemaps />
                    <a href="https://goo.gl/maps/qvNcBcEk2fMcZfaz8" target='_blank'>Colombres- Cruz Alta</a>
                </label>
            </div>

            <table className='mt-5 mx-auto'>
                <thead>

                    <tr>
                        <td>Horarios de atencion:</td>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>Lunes</td>
                        <th>11:00-21:00</th>
                    </tr>
                    <tr>
                        <td>Martes</td>
                        <th>11:00-21:00</th>
                    </tr>
                    <tr>
                        <td>Miercoles</td>
                        <th>11:00-21:00</th>
                    </tr>
                    <tr>
                        <td>Jueves</td>
                        <th>11:00-21:00</th>
                    </tr>
                    <tr>
                        <td>Viernes</td>
                        <th>11:00-21:00</th>
                    </tr>
                    <tr>
                        <td>Sabado</td>
                        <th>11:00-21:00</th>
                    </tr>
                    <tr>
                        <td>Domingo</td>
                        <th>Cerrado</th>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
