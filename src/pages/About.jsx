import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../assets/night.jpg";
import TextAbout from "../components/TextAbout";

function About() {
  return (
    <div className="font-[Poppins]">
      <Navbar />
      <Hero
        styles="w-[100%] h-[100%] relative"
        imageUrl={img}
        imgStyle="w-[100%] h-[70vh] filter contrast-80 brightness-90"
        heading="About"
        headingStyle="text-5xl lg:ml-97 md:ml-69 ml-50 absolute md:absolute md:top-2 top-5 font-extrabold text-stone-100"
        // headingStyle="text-5xl lg:ml-94 md:ml-69 ml-44 absolute top-5 font-extrabold text-stone-100"
      />
      <TextAbout />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default About;
