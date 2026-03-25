"use client";

import { Contact, HeroHeader, Inputs, Leaf, SubmitButton} from '@/components'
import { contact } from '@/service';
import Link from "next/link";
import { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("")
  const [message,setMessage] = useState("") 

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await contact({name,email,phone,message});
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } catch (err) {
        console.error("Error:", err);
      }
    };
  
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
                Контакты
              </Link>
            </p>
            <h1 className="text-center font-black text-black mb-10" style={{ fontSize: "48px", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1, }} >
              Контакты
            </h1>
            <Contact title=''/>
            <h1 className='text-[48px] font-extrabold text-center leading-[150%] mt-19 mb-15'>Написать нам</h1>
                <form onSubmit={handleSubmit} className="flex flex-col px-37.5">
                  <Inputs placeholder="Ваше имя" type="text" value={name} onChange={e => setName(e.target.value)} />
                  <Inputs placeholder="Ваш E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                  <Inputs placeholder="Ваш номер телефона" type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
                  <Inputs placeholder="Ваше сообщение" type="textarea" value={message} onChange={e => setMessage(e.target.value)} />
                  <div className="flex justify-end mt-4">
                      <SubmitButton children={"Отправить"} type='submit' className='w-50!' />
                  </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;