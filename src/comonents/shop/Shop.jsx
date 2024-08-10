import React from 'react'
import divan from '/divan.png'
import asal from '/rasm1.png'
import tava from '/rasm4.png'
import shlanka from '/rasm2.png'
import mebel from '/rasm7.png'
import rasm from '/rasm.png'
import raketka from '/rasm8.png'
import imf from '/rasm9.png'
import foto from '/rasm6.png'
import gaz from '/rasm5.png'

import { IoIosArrowRoundForward } from "react-icons/io";
const Shop = () => {
  return (
    <div className='shop container  px-4 '>
        <div  className='flex flex-wrap  shop_w gap-4 items-center '> 
            <p className='text-left font-bold text-4xl'>Популярные категории</p>
            <p className='font-normal'>Все категории </p><IoIosArrowRoundForward />
        </div>
        <div className='shop__wrapper flex flex-wrap  mt-7'>

        <div className='shop__card  w-52 border p-5 text-center mt-5 mx-5 p-5'>
                <img src={divan} alt="foto" />
                <p className='shop__text text-xl'>Диваны</p>
            </div>

            <div className='shop__card  w-52 border p-5 text-center mt-5 mx-5 p-5'>
                <img src={asal} alt="foto" />
                <p className='shop__text text-xl'>Спальная</p>
            </div>

            <div className='shop__card  w-52 border p-5 text-center mt-5 mx-5 p-5'>
                <img src={tava} alt="foto" />
                <p className='shop__text text-xl'>Кухня</p>
            </div>

            <div className='shop__card  w-52 border p-5 text-center mt-5 mx-5 p-5'>
                <img src={shlanka} alt="foto" />
                <p className='shop__text text-xl'>Для сада</p>
            </div>


            <div className='shop__card  w-52 border p-5 text-center mt-5 mx-5 p-5'>
                <img src={mebel} alt="foto" />
                <p className='shop__text text-xl'>Мебель</p>
            </div>

            <div className='shop__card w-52  border p-5 text-center mt-5 mx-5 p-5'>
                <img src={rasm} alt="foto" />
                <p className='shop__text text-xl'>Гигиена</p>
            </div>

            <div className='shop__card  w-52 border p-5 text-center mt-5 mx-5 p-5'>
                <img src={raketka} alt="foto" />
                <p className='shop__text text-xl'>Товары для отдыха</p>
            </div>

            <div className='shop__card  w-52 border p-5 text-center mt-5 mx-5 p-5'>
                <img src={imf} alt="foto" />
                <p className='shop__text text-xl'>Зеркала</p>
            </div>

            <div className='shop__card  w-52 border p-5 text-center mt-5 mx-5 p-5'>
                <img src={foto} alt="foto" />
                <p className='shop__text text-xl'>shkat</p>
            </div>

            <div className='shop__card  w-52 border p-5 text-center mt-5 mx-5 p-5'>
                <img src={gaz} alt="foto" />
                <p className='shop__text text-xl'>Кухня и бытовая тех..</p>
            </div>

        </div>
    </div>

  )
}

export default Shop