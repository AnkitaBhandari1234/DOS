
import StatsData from "@/PageComponent/Component/AboutPage/StatsData";
import Aboutus from "@/PageComponent/Home/Aboutus";
import Course from "@/PageComponent/Home/Course";
import CTA from "@/PageComponent/Home/CTA";
import HeroSection from "@/PageComponent/Home/HeroSection";
import Placement from "@/PageComponent/Home/Placement";
import Team from "@/PageComponent/Home/Team";
import Testimonial from "@/PageComponent/Home/Testimonial";
import WhyChooseUs from "@/PageComponent/Home/WhyChooseUs";




export default function Home() {
  return (
 <div className="overflow-x-hidden">
  <HeroSection />
  <Aboutus/>
  <Course/>
  <WhyChooseUs/>
  <StatsData/>
  <Testimonial/>
  <Team/>
  
  <CTA/>

 </div>
  );
}
