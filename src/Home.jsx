import WhyOrbitClasses from "./Components/Whyorbitclasses";
import AboutContactSection from "./Components/AboutContactSection";
import Courses from "./Components/Courses";
import Faculty from "./Components/Faculty/Faculty";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import VideoGallery from "./Components/Videos/VideoGallery";
import Footer from "./Footer";
import "./index.css";
import "./Home.css"
import Events from "./Components/Events/Events";
import AboutUs from "./Aboutus/Aboutus";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyOrbitClasses/>
      <Courses />
      <Faculty/>
      <VideoGallery/>
      <Events/>
      <AboutContactSection/>
      <Footer/>
      {/* <AboutUs/> */}
    </>
  );
}

export default Home;
