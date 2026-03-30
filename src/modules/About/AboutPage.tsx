"use client";

import { CustomAbout, HeroHeader, Leaf, TeamCard } from '@/components'
import Link from "next/link";
import { ourMeals, ourWays } from '../../../public/images';
import { useEffect, useState } from 'react';
import { getCook } from '@/service';
import { Cook } from '@/@types';

const AboutPage = () => {
  const [cook,setCook] = useState<Cook[]>([]);

  useEffect(()=>{
      const fetch = () => {
        try {
            getCook().then(res => {
            setCook(res.data)
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
                О нас
              </Link>
            </p>
            <h1 className="text-center font-black text-black mb-10" style={{ fontSize: "48px", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1, }} >
              О нас
            </h1>
            <p className="text-[20px] leading-[150%]">
                С 1995 года наша миссия в ресторане — питать и вдохновлять каждого члена команды, гостя и сообщество, которому мы служим. Спустя все эти годы эти основные ценности остаются в основе всего, что мы делаем. От нашего меню до наших услуг и способов ведения бизнеса — наш свежий, неожиданный и человечный взгляд отличает нас. Мы называем это Необыкновенной Добротой. И это во всем, что мы делаем. <br /> <br /> Имея более 450 ресторанов в 26 штатах и ​​более 8000 членов команды, мы два года подряд были названы Forbes одним из лучших работодателей Америки в области разнообразия. Денверский деловой журнал признал нас одним из лучших мест для работы. Мы считаем, что эти успехи основаны на нашей уникальной и заботливой культуре, благодаря которой каждый, кто входит в наши двери, чувствует себя желанным гостем и оцененным по достоинству.
            </p>
            <CustomAbout  SideImage={ourMeals} textAbout="Наша страсть — создавать исключительные впечатления от еды по отличной цене. От традиционных и современных блюд до наших собственных кулинарных творений, таких как фаршированные тортеллони премиум-класса, наши свежеприготовленные рецепты отличаются индивидуальностью, креативностью и ярким вкусом кухонь всего мира." aboutText="От «Пенне Роза» до японской лапши, салата «Мед» и всемирно известных макарон с сыром «Висконсин» — мы используем только самые лучшие и полезные ингредиенты. Каждое блюдо готовится свежим и делается на заказ. Наше богатое меню наполнено яркими, яркими и приятными вкусами." title="Наша еда" />
            <CustomAbout extraClass="!flex-row-reverse" SideImage={ourWays} textAbout="С самого начала мы взяли на себя обязательство предлагать свежие продукты, свежие ингредиенты и новый взгляд на заботу о наших гостях, членах нашей команды и наших сообществах. Мы искренне верим, что нет ничего, что могло бы объединить людей или сделать мир лучше, чем тарелка лапши" aboutText="Продолжая расти, мы реализуем ключевые инициативы во всей нашей компании, чтобы поддержать светлое будущее. В нашем отчете о влиянии рассматриваются некоторые из этих областей, такие как создание меню, наполненного свежими и захватывающими новыми вкусами; активация лучших в отрасли льгот для людей; и некоторые способы лучше заботиться о наших сообществах – и о нашей планете – которую мы называем домом." title="Наш путь" showBtn={true} />
            <h1 className='text-[48px] font-extrabold text-center leading-[150%] mt-7.5 mb-10'>Наша команда</h1>
            <div className="flex flex-wrap gap-31.25 justify-center items-center">
                {cook.map((item,index) => (
                        <div key={index}>
                            <TeamCard memberImg={item.avatar} firstName={item.firstName} lastName={item.lastName} position={item.position} />
                        </div>
                    ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;