import React, { useState, useEffect } from "react";
import "./json.css";
import { LiaCartPlusSolid } from "react-icons/lia";
import axios from "axios";
import { data } from "autoprefixer";
const API_URL = "https://dummyjson.com";
const Json = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [semore, setSeemore] = useState(1);
  const [category, setCategorey] = useState(null);
  const [selectCategory, setSelectCategory] = useState("");
  const [total, setTotal] = useState(0);
  useEffect(() => {
    axios
      .get(`${API_URL}/products/category-list`)
      .then((res) => setCategorey(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(selectCategory);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/products${selectCategory}`, {
        params: {
          limit: 8 * semore,
        },
      })
      .then((res) => {
        setTotal(res.data.total);
        setProducts(res.data.products.map((item) => ({ ...item, offset: 0 })));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [semore, selectCategory]);

  const handleAddToCart = (id, positive = true) => {
    setProducts((prev) =>
      prev.map((item) => {
        return item.id === id
          ? { ...item, offset: positive ? item.offset + 1 : item.offset - 1 }
          : item;
      })
    );
  };
  const skeletonItems = new Array(8).fill().map((product, idx) => (
    <div className="p-4 border" key={idx}>
      {" "}
      <div className="w-full h-64 object-contain bg-slate-200"></div>
      <div className="h-4 bg-slate-200 w-full mt-3 rounded"></div>{" "}
      <div className="w-[200px] h-4 bg-slate-200 rounded mt-3"></div>{" "}
      <div className="w-[150px] h-4 bg-slate-200 mt-3 rounded"></div>
    </div>
  ));
  const productItem = products?.map((product) => (
    <div
      key={product.id}
      className="p-3 h-[398px] overflow-hidden api border flex flex-col gap-4 items-center justify-center rounded-lg shadow-md relative"
    >
      <img
        src={product.images[0]}
        alt="foto"
        className="duration-300 image w-full h-52 object-contain hover:scale-105 absolute top-0 left-0"
      />
      <div className="w-full h-52"></div>
      <div className="flex flex-col gap-2 ">
        <h3 className="text-center text-xl font-semibold">{product.brand}</h3>
        <p className="text-red-500 text-sm font-medium ml-2">21%</p>
        <p className="desck">{product.description}</p>
        <p className="text-lg font-semibold ml-2">${product.price}</p>
      </div>
      <button className=" button w-12 border rounded-full bg-emerald-400 p-1 text-xs text-white">
        New
      </button>
      <button className="btr w-9 h-9 rounded-full border-none bg-yellow-400 ">
        <LiaCartPlusSolid className="text-slate-100 text-2xl m-auto" />
      </button>
      <div className="mt-10 ofset flex ">
        <button
          disabled={product.offset <= 0}
          onClick={() => handleAddToCart(product.id, false)}
          className="border w-6 h-6  flex items-center justify-center text-slate-400 rounded-md dark:text-white"
        >
          -
        </button>
        <button className="w-10">{product.offset}</button>
        <button
          onClick={() => handleAddToCart(product.id)}
          className="border w-6 h-6  flex items-center justify-center text-slate-400 rounded-md dark:text-white"
        >
          +
        </button>
      </div>
    </div>
  ));

  const categoreyItems = category?.map((categorys) => (
    <li
      key={categorys}
      data-value={`/category/${categorys}`}
      className="border py-1 px-2 rounded-full bg-[#ddd] mb-5 "
      onClick={(e) => setSelectCategory(e.target.dataset.value)}
    >
      {categorys}
    </li>
  ));
  return (
    <div className="container mx-auto mb-16 px-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-4 mb-5 sm:mb-10 mt-8" >
        <p className="text-2xl sm:text-3xl font-bold">
          Скидки <b className="text-red-600">%</b>
        </p>
        <p className="text-sm sm:text-base text-slate-600  dark:text-white ">
          Все товары в категории
        </p>
      </div>
      <ul
        onChange={(e) => setSelectCategory(e.target.value)}
        className="category cursor-pointer flex overflow-x-auto whitespace-nowrap gap-3 mb-10 "
      >
        <li
          data-value={``}
          className="collection border py-1 px-2 rounded-full bg-[#ddd] mb-5 dark:text-white dark:bg-lime-700"
          onClick={(e) => setSelectCategory (e.target.dataset.value)}
        >
          All
        </li>
        {categoreyItems}
      </ul>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center ">
        {loading && skeletonItems}
        {productItem}
      </div>
      {8 * semore <= total ? (
        <button
          onClick={() => setSeemore((p) => p + 1)}
          className="w-60 border-none bg-lime-600 rounded-md py-2 mt-10 text-[#fff] text-[18px]  dark:text-white dark:bg-lime-700"
        >
          See more
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Json;
