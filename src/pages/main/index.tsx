import AboutHotel from "./AboutHotel";
import Contact from "./Contact";
import Gallery from "./Gallery";
import HeroSlider from "./HeroSlidder";
import ServicesSection from "./ServiceSection";
import RoomsSection from "./Rooms";


export default function Home() {
  return (
    <>
      <HeroSlider />
      <RoomsSection />
      <AboutHotel />
      <ServicesSection />
      <Gallery />
      <Contact />
    </>
  );
}
