"use client";

import { useEffect, useState } from "react";
import { NextIcon, PrevIcon } from "@/icons";
import Image from "next/image";
import MealCard from "@/components/ProductCard";
import { MenuButton } from "@/components";
import { getProducts } from "@/service";

const VISIBLE_COUNT = 4;

const PopularMeals = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [products,setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.data);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    };
    fetchProducts();
  }, []);

  const visibleProducts = products?.slice(startIndex, startIndex + VISIBLE_COUNT);
  const canPrev = startIndex > 0;
  const canNext = startIndex + VISIBLE_COUNT < products.length;

  const prev = () => { if (canPrev) setStartIndex((i) => i - 1); };
  const next = () => { if (canNext) setStartIndex((i) => i + 1); };

  

  return (
    <section className="containers relative py-7">
      <div className="absolute pointer-events-none z-0"
        style={{ bottom: "54px", left: "-130px", width: 220, height: 210, transform: "rotate(10deg)" }}>
        <Image src="/images/leaf.png" alt="" fill className="object-contain" />
      </div>

      <div className="absolute pointer-events-none z-0"
        style={{ top: "4px", right: "-125px", width: 220, height: 240, transform: "rotate(180deg)" }}>
        <Image src="/images/leaf.png" alt="img" fill className="object-contain" />
      </div>

      <h2 className="text-center text-4xl font-black text-black mb-12">
        Популярные блюда
      </h2>

      <div className="relative flex items-center gap-4 containers">
        <button onClick={prev} disabled={!canPrev} className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full hover:text-white duration-200 active:scale-95 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 " >
          <PrevIcon />
        </button>
        <div className="flex-1 grid grid-cols-4 gap-8 pt-14 items-start">
          {visibleProducts?.map((product, index) => (
            <MealCard key={index} product={product} featured={index === 1 || index === 2} />
          ))}
        </div>
        <button onClick={next} disabled={!canNext} className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full hover:text-white duration-200 active:scale-95 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100" >
          <NextIcon />
        </button>
      </div>
      <div className="containers flex justify-end pt-7">
        <MenuButton title="Посмотреть меню" href="/menu" />
      </div>
    </section>
  );
};

export default PopularMeals;
