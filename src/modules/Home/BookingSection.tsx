"use client";

import { CustomSelect, Leaf, SubmitButton } from "@/components";
import { BookingIcon, CalendarIcon, ClockIcon, Field } from "@/icons";
import { getTable, reservation } from "@/service";
import Image from "next/image";
import { useEffect, useState } from "react";

const guestOptions = [
  { value: "1", label: "1 человек" },
  { value: "2", label: "2 человека" },
  { value: "3", label: "3 человека" },
  { value: "4", label: "4 человека" },
  { value: "5", label: "5+ человек" },
];

const BookingSection = () => {
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [table,setTable]= useState([])
  const [tableValue, setTableValue] = useState("");

   useEffect(() => {
      const fetchTables = async () => {
        try {
          const data = await getTable();
          setTable(data.data);
        } catch (error) {
          console.error("Xatolik yuz berdi:", error);
        }
      };
      fetchTables();
    }, []);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await reservation({ email: email, guestCount: Number(guests),reservationDate: date,reservationTime: time, tableId: Number(tableValue) });
    setEmail("");
    setGuests("");
    setDate("");
    setTime("");
    setTableValue("");
  } catch (err) {
    console.error("Error:", err);
  }
};
  return (
    <section className="relative overflow-hidden">
      <Leaf style={{ top: "100px", right: "660px", width: 220, height: 240, transform: "rotate(-80deg)" }} />

      <Leaf style={{ bottom: "60px", right: "630px", width: 230, height: 250, transform: "rotate(160deg)" }} />

      <div className="containers flex items-center gap-16">
        <div className="relative z-10 w-full max-w-90 shrink-0">
          <div className="w-25 h-25 bg-black rounded-full flex items-center justify-center shadow-xl -mb-18 relative z-10 ml-10">
            <BookingIcon />
          </div>

          <div className="bg-white/40 backdrop-blur-xl rounded-4xl px-8 pt-25 pb-14 shadow-2xl">
            <h2 className="text-[26px] font-bold text-black mb-7 leading-tight">
              Забронировать стол
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <Field>
                <input type="email" placeholder="Ваш эмаил" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent text-sm text-black placeholder:text-black/40 outline-none" />
              </Field>
              <Field>
                <CustomSelect options={guestOptions} placeholder="На сколько человек?" value={guests} onChange={setGuests} />
              </Field>
              <Field>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-transparent text-sm outline-none cursor-pointer" style={{ colorScheme: "light", color: date ? "#000" : "rgba(0,0,0,0.4)" }} />
                <CalendarIcon />
              </Field>
              <Field>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-transparent text-sm outline-none cursor-pointer" style={{ colorScheme: "light", color: time ? "#000" : "rgba(0,0,0,0.4)" }} />
                <ClockIcon />
              </Field>
              <Field>
                <CustomSelect options={table.map((t: any) => ({ value: String(t.tableNumber), label: `Стол ${t.tableNumber}`, }))} placeholder="Выберите место" value={tableValue} onChange={setTableValue} />
              </Field>
              <button type="button" className="text-left text-sm text-blue-900 hover:text-blue-600 hover:underline cursor-pointer w-fit transition-colors" >
                Выбрать места на карте
              </button>
              <SubmitButton children={'Забронировать'} />
            </form>
          </div>
        </div>
        <div className="relative flex-1 flex items-center justify-center">
          <div className="relative w-256.25 h-234">
            <Image src="/images/pizza.svg" alt="Pizza" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingSection