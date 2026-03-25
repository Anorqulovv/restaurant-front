"use client"

import { MenuButton, NewsCard } from "@/components";
import { getNews } from "@/service";
import { useEffect, useState } from "react";

const NewsSection = () => {
    const [data,setData] = useState([])

     useEffect(() => {
        const fetchNews = async () => {
          try {
            const data = await getNews();
            setData(data.data);
          } catch (error) {
            console.error("Xatolik yuz berdi:", error);
          }
        };
        fetchNews();
      }, []);

    return (
        <section className="py-10">
            <div className="containers">
                <h2 className="text-4xl font-black text-black text-center mb-16">
                    Новости/Галерея
                </h2>
                <div className="grid grid-cols-3 gap-30 items-start">
                    {data.slice(0, 3).map((item,index) => (
                        <NewsCard key={index} item={item} />
                    ))}
                </div>
                <div className="flex justify-end mt-15">
                    <MenuButton href="/news" title="Посмотреть все" />
                </div>
            </div>
        </section>
    );
}

export default NewsSection;