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
import Events from "./Components/Events";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyOrbitClasses/>
      <Courses />
      <Faculty/>
      <VideoGallery/>
      <AboutContactSection/>
      <Footer/>
      <Events/>
    </>
  );
}

export default Home;
