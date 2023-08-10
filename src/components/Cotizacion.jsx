import React from 'react'

export function Cotizacion() {
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cotización</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                        </div>
                        <div className="modal-body">
                            <form action="">
                                <div className='d-flex flex-column'>
                                <input type="text" placeholder='Nombre' />
                                <input type="tel" placeholder='Celular' />
                                <input type="email" placeholder='Email' />
                                <label htmlFor="" className='d-flex flex-column'>
                                    ¿Como podemos ayudarte?
                                <textarea placeholder='Detalle de tu consulta' />
                                </label>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
