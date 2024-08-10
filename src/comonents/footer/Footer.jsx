import React from 'react'

const Footer = () => {
  return (
    <div >
            <div className='w-32 container  '>
                <div className='text-left w-full  justify-start mt-5'>
        <p className="text-3xl font-bold  "> clickhose<hr className="hrr" /></p>
        </div>
        </div>
        <div className='footer__wrapper container  py-14 flex flex-wrap	 justify-between'>

<div className='footer__card mx-4  w-80 mt-6 leading-9	'>
    <p className='footer__title text-2xl font-bold'>Информация</p>
    <p className='text-xl font-normal' >Все права защищены © 2015 интернет-магазин AIKEA.BY Беларусь.
    </p>
    <p className='text-xl font-normal' >УНП 191828159 ИП Парейко В.С., регистрационный номер в торговом реестре 158299
    </p>
    <p className='text-xl font-normal' >Политика конфиденциальности</p>

</div>

<div className='footer__card mx-4  w-80 mt-6 leading-9	'>
    <p className='footer__title text-2xl font-bold'>Меню</p>  
    <p className='text-xl font-normal' >Главная | Каталог | Товары в наличии</p>
    <p className='text-xl font-normal' >Скидки | Популярное | Вдохновение</p>
    <p className='text-xl font-normal' >Доставка | Услуги | Условия</p>
    <p className='text-xl font-normal' >Контакты | Вставить | Cписок покупок</p>
    <p className='text-xl font-normal' >Корзина | Личный кабинет | Избранное</p>

</div>

<div className='footer__card mx-4  w-80 mt-6 leading-9	'>
    <p className='footer__title text-2xl font-bold'>Контакты</p>
    <p className='text-xl font-normal' >г.Минск</p>
    <p className='text-xl font-normal' >Ул. Первомайская, Д. 1, Кв. 43</p>
    <p className='text-xl font-normal' >+ 375 434 847 28 84</p>
    <p className='text-xl font-normal' >+ 375 448 473 09 48</p>
    <p className='text-xl font-normal' >ikeaekspress@gmail.com</p>

</div>
        </div>

    </div>
  )
}

export default Footer