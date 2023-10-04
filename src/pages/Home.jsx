/* eslint-disable eqeqeq */
import React from 'react'
import { FormatRupiah } from '@arismun/format-rupiah'
import PropTypes from 'prop-types';
import Review from './Review'
import FotoProduk from './FotoProduk'

const Home = () => {
    return (
        <div className='w-4/5 m-auto mt-24 overflow-hidden'>
            <FotoProduk />
            <InfoProduk isDiskon="yes" category='Running' title='Blue Elegant' price={20000000} />

            <Review />
        </div>
    )
}

const CekDiskon = (props) => {
    const { isDiskon, diskon } = props

    if (isDiskon == 'yes') {
        return <p> Discount {diskon}% off </p>
    } else if (isDiskon == 'comming') {
        return <p> Comming Soon... </p>
    } else {
        return <p> Belum ada Diskon </p>
    }
}

const InfoProduk = (props) => {
    const { category, title, price, isDiskon } = props
    const benefits = ['Tidak kusut terkena air', 'Bahan lebih halus', 'Tidak gerah']

    return (
        <div className='w-2/5 float-left ml-8 overflow-hidden'>
            <p className='uppercase text-grayCustom'>{category}</p>
            <h1 className='m-0 my-2 font-bold text-3xl'> {title} </h1>
            <p className='text-xl font-medium'> <FormatRupiah value={price} /> </p>
            <CekDiskon isDiskon={isDiskon} diskon={50} />
            <p className='mt-3 leading-7 text-gray-900'> One of the most recognizable shoes in the AJ collection, the Blue Sneakers features lightweight, visible cushioning just like the original from '88. Signature details and material celebrate the game- changing icon </p>

            <div className='mt-4 ml-4'>
                {benefits.map((benefit) => (
                    <li key={benefit}> {benefit} </li>
                ))}
            </div>

            <button onClick={(e) => TambahCart(title, e)} href="#cart" className='ml-2 mt-5 text-white font-medium bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2 mx-auto rounded-md text-xl hover:scale-105 duration-200'> Add to Cart </button>
        </div>
    )
}

const TambahCart = (e) => {
    return console.log(`Membeli Sepatu ${e}`);
}

CekDiskon.propTypes = {
    diskon: PropTypes.number.isRequired
};

export default Home
