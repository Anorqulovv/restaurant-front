"use client";

import { CartIcon, HeartIcon, IconBtn } from "@/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Меню", href: "/menu" },
    { label: "Новости", href: "/news" },
    { label: "Бронирование", href: "/booking" },
    { label: "О нас", href: "/about" },
    { label: "Контакты", href: "/contacts" },
];

const HeroHeader = () => {
    const pathname = usePathname();
    
    return (
        <nav className="relative z-10 flex items-center justify-between px-12 py-12">
            <Link href="/" className="text-5xl font-black text-black tracking-tight">LOGO</Link>
            <ul className="flex items-center gap-8 text-sm font-medium text-black">
                {navLinks.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href} className={`duration-200 transition-colors ${pathname === item.href ? "text-red-600" : "hover:text-red-600"}`}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex items-center gap-3">
                <IconBtn><HeartIcon /></IconBtn>
                <IconBtn badge={0}><CartIcon /></IconBtn>
            </div>
        </nav>
    );
};

export default HeroHeader;