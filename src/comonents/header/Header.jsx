import React from "react";
import { IoMenu } from "react-icons/io5";
import { FaSun } from "react-icons/fa6";


const Header = () => {
  const toggleDarkMode = () => {
    window.document.body.classList.toggle("dark");
    console.log(1);
    
  };

  return (
    <header className="py-3 bg-gray-100	 dark:bg-black ">
<nav className="navbar flex justify-between container px-4 items-center">
  <p className="text-3xl font-bold	 "> clickhose<hr className="hrr" /></p>
  <div className="navbar__collection flex gap-5 text-4xl	">

  <li class="navbar__item hover:decoration-gray-300 text-lg	cursor-pointer">
                        <span>Каталог</span>
                    </li>
                    
                    <li class="navbar__item hover:decoration-gray-300 text-lg	 cursor-pointer">
                        <span>  Доставка </span>
                    </li>
                    
                    <li class="navbar__item hover:decoration-gray-300 text-lg	cursor-pointer">
                        <span>     Условия  </span>
                    </li>

                    <li class="navbar__item hover:decoration-gray-300 text-lg	cursor-pointer">
                        <span> Контакты</span>
                    </li>      
  </div>
  <div className=" flex items-center">
    <div className="flex">
    <p className="sss">+ 375 736 463 64 72 </p>  <span className="sss">/</span>  <p className="ss">+ 375 736 463 64 72</p>
    </div>
<div className="navbar__box"> <button
        onClick={toggleDarkMode}
        className="p-4  rounded-lg"
      >
<FaSun />
</button></div>
<div className="navbar__bag">
        <button className="navbar__btn"><IoMenu className="navbar__icon text-6xl"/>
        </button>
      </div>
  </div>
  
</nav>

   
     
    </header>
  );
};

export default Header;