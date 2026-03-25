"use client";

import { useEffect, useState } from "react";
import { HeroHeader, Leaf, ProductCard } from '@/components'
import Link from "next/link";
import { getCategory, getProducts } from "@/service";

const MenuSection = () => {
  const [products,setProducts] = useState([]);
  const [categories,setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Первые");

  useEffect(()=>{
    const fetch = () => {
      try {
          getProducts().then(res => {
          setProducts(res.data)
        })
        getCategory().then(res2 => {
          setCategories(res2.data)
        })
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    }
    fetch()
  },[])
  
  return (
    <div className="relative z-10 flex flex-col pt-5 pb-24">
      <Leaf style={{ top: "220px", right: "20px", width: "230px", height: "230px", transform: "rotate(185deg)" }} />
      <Leaf style={{ top: "33%", left: "-20px", width: "230px", height: "230px", transform: "rotate(10deg)" }} />
      <Leaf style={{ bottom: "120px", right: "20px", width: "200px", height: "200px", transform: "rotate(-170deg)" }} />
      <Leaf style={{ bottom: "80px", left: "-20px", width: "220px", height: "220px", transform: "rotate(10deg)" }} />
      <div className="containers relative w-full">
        <div className="relative w-full overflow-hidden" style={{ backdropFilter: "blur(14px)", background: "rgba(255, 255, 255, 0.32)", boxShadow: "0 8px 48px rgba(0, 0, 0, 0.18)", borderRadius: "32px" }} >
          <HeroHeader />

          <div className="px-12 pt-6 pb-24">

            <p className="text-sm text-black/50 font-medium mb-10 tracking-wide">
              <Link href="/" className="hover:text-red-600 transition-colors duration-200" >
                Главная
              </Link>
              <span className="mx-2 text-black/40">›</span>
              <Link href="/menu" className="text-black/80 hover:text-black transition-colors duration-200" >
                Меню
              </Link>
            </p>

            <h1 className="text-center font-black text-black mb-10" style={{ fontSize: "48px", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1, }} >
              Меню
            </h1>

            <div className="flex justify-center mb-35">
              <div className="inline-flex items-center rounded-full px-2 py-2 gap-1" style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", }} >
                {categories.map((cat,index) => (
                  <button key={index} onClick={() => setActiveCategory(cat)} className={`px-7 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${activeCategory === cat ? "bg-white text-black" : "text-black/70 hover:text-black hover:bg-white/50"}`} >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-x-6 gap-y-30">
              {products.map((product,index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;