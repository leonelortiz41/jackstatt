import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import tattoo1 from '../assets/tattoo1.jpg'
import tattoo2 from '../assets/tattoo2.jpg'
import tattoo3 from '../assets/tattoo3.jpg'
import tattoo4 from '../assets/tatto4.jpg'
import tattoo5 from '../assets/tattoo5.jpg'

export function Gallery() {
    let photos = [
        { photo: tattoo1 },
        { photo: tattoo2 },
        { photo: tattoo3 },
        { photo: tattoo4 },
        { photo: tattoo2 },
        { photo: tattoo1 },
        { photo: tattoo5 },
        { photo: tattoo5 },
        { photo: tattoo2 },
        { photo: tattoo4 },
        { photo: tattoo1 },
        { photo: tattoo3 },
        { photo: tattoo5 },
        { photo: tattoo3 },
        { photo: tattoo5 },
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
