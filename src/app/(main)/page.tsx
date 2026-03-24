import { BookingSection, HeroSection, NewsSection, PopularProducts, WhyUsSection } from "@/modules"

const Home = () => {
  return (
    <>
      <HeroSection />
      <PopularProducts />
      <BookingSection />
      <WhyUsSection />
      <NewsSection />
    </>
  )
}

export default Home