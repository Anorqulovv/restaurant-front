"use client";

import Image from "next/image";
import { useState } from "react";
import { CartIcon, HeartIcon } from "@/icons";
import { Products } from "@/@types";

interface ProductCardProps {
  product: Products;
  featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const [liked, setLiked] = useState(false);
  return (
    <div
      className={`relative flex flex-col pb-5 transition-all duration-300 ease-out hover:-translate-y-1 ${featured ? "shadow-2xl" : "shadow-md"}`}
      style={{ width: "263px", minHeight: "310px", background: "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 100%)", borderRadius: "38px", flexShrink: 0, }} >
      <div className={`relative rounded-full overflow-hidden mx-auto ${featured ? "-mt-20 w-60 h-60" : "-mt-16 w-52 h-52"}`}>
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>
      <div className="flex flex-col px-5 mt-4 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className={`font-bold text-black leading-tight ${featured ? "text-xl" : "text-base"}`}>{product.name}</h3>
          <button onClick={() => setLiked(!liked)} className={`shrink-0 mt-0.5 transition-all duration-200 cursor-pointer ${liked ? "text-red-500 scale-110" : "text-black/80 hover:text-red-400"}`}><HeartIcon /></button>
        </div>
        <p className="text-black/45 text-sm mt-1">{product.description}</p>
        <div className="flex items-center justify-between mt-5">
          <span className={`font-black text-black ${featured ? "text-2xl" : "text-lg"}`}>${product.price}</span>
          <button className="group relative w-11 h-11 flex items-center justify-center bg-black text-white rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer overflow-hidden">
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-linear-to-r from-transparent via-white/20 to-transparent" />
            <CartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;