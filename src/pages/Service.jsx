import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import img from "../assets/night.jpg";
import TripSec from "../components/TripSec";
import Footer from "../components/Footer";

function Service() {
  return (
    <div className="font-[Poppins]">
      <Navbar />
      <Hero
        styles="w-[100%] h-[100%] relative"
        imageUrl={img}
        imgStyle="w-[100%] h-[70vh] filter contrast-80 brightness-90"
        heading="Service"
        headingStyle="text-5xl lg:ml-94 md:ml-65 ml-48 md:top-0 top-5 absolute font-extrabold text-stone-100"
      />
      <section className="mb-30 mt-20">
        <TripSec
          heading="Recent Trips"
          text="You can discover unique destinations using Google Maps."
        />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Service;
