import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import ta1 from '../assets/ta1.webp'
import ta2 from '../assets/ta2.webp'
import ta3 from '../assets/ta3.webp'
import ta4 from '../assets/ta4.webp'
import ta5 from '../assets/ta5.webp'
import ta6 from '../assets/ta6.webp'
import ta7 from '../assets/ta7.webp'
import ta8 from '../assets/ta8.webp'
import ta9 from '../assets/ta9.webp'
import ta10 from '../assets/ta10.webp'
import ta11 from '../assets/ta11.webp'
import ta12 from '../assets/ta12.webp'

export function Gallery() {
    let photos = [
        { photo: ta2 },
        { photo: ta5 },
        { photo: ta6 },
        { photo: ta1 },
        { photo: ta10 },
        { photo: ta7 },
        { photo: ta3 },
        { photo: ta4 },
        { photo: ta9 },
        { photo: ta8 },
        { photo: ta11 },
        { photo: ta12 },
    ]


    let elementPhotos = photos.map((ph) => (
            <img src={ph.photo} key={uuidv4()} alt="" className=' mt-0  ' style={{ width: "300px"}} />
    ))
    return (
        <div className='align-items-center   container-images mx-auto  '>
            {elementPhotos}
        </div>
    )
}
