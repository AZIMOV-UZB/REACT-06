import React from 'react'
import foto from '/hero.png'


const Hero = () => {
  return (
    <div className='hero flex container px-4 '>
         <div className='hero__card hero__dn'>
            <img src={foto} alt="foto" />
        </div>
        <div className='hero__card w-96 text-left p-6 pt-8 rounded-lg border justify-between	'>
            <p className='hero__title text-5xl font-bold mb-4'> Мебель на любой вкус!</p>
            <p className='text-xl font-light'>Худи, чашки для горячего чая и термосы </p>
            <p className='text-xl font-light'>Eлочные игрушки, брелочки</p>
            <p className='text-xl font-light mb-3'>Начало списка вещей, которые можно </p>
            <button className='w-full text-white bg-orange-400	py-2 rounded-2xl '>Перейти в каталог</button>
            <button className='w-full border rounded-2xl py-2 my-5 text-orange-400'>Внести список артикулов</button>
        </div>
        <div className='hero__card dd'>
            <img src={foto} alt="foto" />
        </div>
    </div>
  )
}

export default Hero