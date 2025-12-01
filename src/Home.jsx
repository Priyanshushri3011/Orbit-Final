import WhyOrbitClasses from "./Components/About";
import AboutContactSection from "./Components/AboutContactSection";
import Courses from "./Components/Courses";
import Faculty from "./Components/Faculty/Faculty";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import VideoGallery from "./Components/Videos/VideoGallery";
import Footer from "./Footer";
import "./index.css";
import "./Home.css"

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
    </>
  );
}

export default Home;
