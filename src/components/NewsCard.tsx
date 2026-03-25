import { News } from "@/@types";
import Image from "next/image";

export default function NewsCard({ item }: { item: News }) {
    return ( 
        <div className="relative flex flex-col transition-all duration-300 hover:-translate-y-1">
            <div className="relative w-57.75 h-39.25 ml-4 rounded-4xl overflow-hidden z-10 -mb-16">
                <Image src={`https://anorkhulov.uz/${item?.image}`} alt="img" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" loading="eager" />
            </div>
            <div className="bg-white/40 backdrop-blur-xl rounded-4xl px-6 pb-6 pt-20 shadow-md">
                <p className="text-sm text-black leading-relaxed mb-5">
                    {item.description}
                </p>
                <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
                        <Image src={`https://anorkhulov.uz/${item.author.avatar}`} alt="avatar" fill sizes="100px" className="object-cover" loading="eager" />
                    </div>
                    <span className="font-semibold text-black text-sm">
                        {item.author.firstName}
                    </span>
                </div>
            </div>
        </div>
    );
}