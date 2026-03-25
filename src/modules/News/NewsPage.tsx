"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GalleryCard, HeroHeader, Leaf, NewsCard, Pagination } from "@/components";
import { getGalelery, getNews } from "@/service";

const NEWS_PER_PAGE = 6;
const GALLERY_PER_PAGE = 8;

const NewsPage = () => {
    const [news,setNews] = useState([])
    const [galalery,setGalelery] = useState([])
    const [newsPage, setNewsPage] = useState(1);
    const [galleryPage, setGalleryPage] = useState(1);

    useEffect(() => {
        const fetch = async () => {
          try {
            const data = await getNews();
            const data2 = await getGalelery();
            setNews(data.data);
            setGalelery(data2.data);
          } catch (error) {
            console.error("Xatolik yuz berdi:", error);
          }
        };
        fetch();
      }, []);

    const totalNewsPages = Math.ceil(news.length / NEWS_PER_PAGE);
    const totalGalleryPages = Math.ceil(galalery.length / GALLERY_PER_PAGE);

    const currentNews = news.slice((newsPage - 1) * NEWS_PER_PAGE, newsPage * NEWS_PER_PAGE);
    const currentGallery = galalery.slice((galleryPage - 1) * GALLERY_PER_PAGE, galleryPage * GALLERY_PER_PAGE);

    return (
        <div className="relative z-10 flex flex-col pt-5 pb-24">
            <div className="containers relative w-full">
                <Leaf style={{ top: "220px", right: "-100px", width: "230px", height: "230px", transform: "rotate(185deg)" }} />
                <Leaf style={{ top: "33%", left: "-180px", width: "230px", height: "230px", transform: "rotate(10deg)" }} />
                <Leaf style={{ bottom: "120px", right: "-110px", width: "200px", height: "200px", transform: "rotate(-170deg)" }} />
                <Leaf style={{ bottom: "80px", left: "-150px", width: "220px", height: "220px", transform: "rotate(10deg)" }} />
                <div className="relative w-full overflow-hidden" style={{ backdropFilter: "blur(14px)", background: "rgba(255, 255, 255, 0.32)", boxShadow: "0 8px 48px rgba(0, 0, 0, 0.18)", borderRadius: "32px" }}>
                    <HeroHeader />

                    <div className="px-12 pt-6 pb-24">

                        <p className="text-sm text-black/50 font-medium mb-10 tracking-wide">
                            <Link href="/" className="hover:text-red-600 transition-colors duration-200">Главная</Link>
                            <span className="mx-2 text-black/40">›</span>
                            <span className="text-black/80">Новости</span>
                        </p>

                        <h1 className="text-center font-black text-black mb-12" style={{ fontSize: "48px", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1 }}>
                            Новости
                        </h1>

                        <div className="grid grid-cols-3 gap-x-8 gap-y-24 mt-16">
                            {currentNews.map((item,index) => (<NewsCard key={index} item={item} />))}
                        </div>

                        <Pagination current={newsPage} total={totalNewsPages} onChange={setNewsPage} />

                        <h2 className="text-center font-black text-black my-24" style={{ fontSize: "48px", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1 }}>
                            Галерея
                        </h2>

                        <div className="grid grid-cols-4 gap-7 gap-y-12">
                            {currentGallery.map((item,index) => (<GalleryCard key={index} item={item} />))}
                        </div>

                        <Pagination current={galleryPage} total={totalGalleryPages} onChange={setGalleryPage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;