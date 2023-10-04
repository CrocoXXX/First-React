import React from 'react'
import BlueSneaker from '../assets/blueSneakers.jpg'


const FotoProduk = () => {
    return (
        <div className='float-left w-1/2 h-[700px] bg-whiteCustom'>
            <img src={BlueSneaker} alt="Blue Sneakers" className='w-full h-full' />
        </div>
    )
}

export default FotoProduk
