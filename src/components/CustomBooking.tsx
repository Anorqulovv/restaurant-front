"use client";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import SubmitButton from "./SubminButton";
import CustomSelect from "./CustomSelect";
import { Field } from "@/icons";
import { getTable, reservation } from "@/service";

const guestOptions = [
  { value: "1", label: "1 человек" },
  { value: "2", label: "2 человека" },
  { value: "3", label: "3 человека" },
  { value: "4", label: "4 человека" },
  { value: "5", label: "5+ человек" },
];

const CustomBooking = ({ title, exTitleClass,exBtnClass }: { title: string; exTitleClass?: string; exBtnClass?: string; }) => {
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
      await reservation({ customerName: email, email: email, guestCount: Number(guests),reservationDate: date,reservationTime: time, tableId: Number(tableValue) });
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
    <div>
      <h2
        className={`${exTitleClass} font-bold font-glory text-[32px] leading-[150%] mb-8.75`}
      >
        {title}
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <Field>
          <input type="email" placeholder="Ваш эмаил" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent text-sm text-black placeholder:text-black/40 outline-none" />
        </Field>
        {/* Guests */}
        <br />
        <Field>
          <CustomSelect options={guestOptions} placeholder="На сколько человек?" value={guests} onChange={setGuests} />
        </Field>
        <br />
        <Field>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-transparent text-sm outline-none cursor-pointer" style={{ colorScheme: "light", color: date ? "#000" : "rgba(0,0,0,0.4)", }} />
          <CalendarIcon />
        </Field>
        <br />
        {/* Time */}
        <Field>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-transparent text-sm outline-none cursor-pointer" style={{ colorScheme: "light", color: time ? "#000" : "rgba(0,0,0,0.4)",}}/>
          <ClockIcon />
        </Field>
        <br />
        {/* Location */}
        <Field>
          <CustomSelect options={table.map((t: any) => ({ value: String(t.tableNumber), label: `Стол ${t.tableNumber}`, }))} placeholder="Выберите место" value={tableValue} onChange={setTableValue} />
        </Field>
        <button type="button" className="text-left text-sm text-blue-900 hover:text-blue-600 hover:underline cursor-pointer w-fit transition-colors">
          Выбрать места на карте
        </button>
        <br />
        {/* Submit */}
        <SubmitButton children={"Забронировать"} className="ml-[87%]" />
      </form>
    </div>
  );
};

export default CustomBooking;
