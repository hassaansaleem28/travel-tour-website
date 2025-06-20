import img from "../assets/12.jpg";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image7 from "../assets/5.jpg";
import image8 from "../assets/8.jpg";
import TripSec from "../components/TripSec";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <main className="font-[Poppins]">
      <section className="h-[100vh] mb-30">
        <Navbar />
        <Hero
          styles="w-[100%] h-[100%] relative"
          text="Choose  your favourite destination."
          textStyle="text-3xl tracking-wider text-stone-100 font-[500] mb-8 text-center mt-4"
          imageUrl={img}
          // imageUrl="https://images.pexels.com/photos/13574651/pexels-photo-13574651.jpeg"
          imgStyle="w-[100%] h-[100%] object-cover"
          heading="Your Journey Your Story"
          route="/"
          headingStyle="text-7xl font-extrabold text-stone-100"
          btnStyle="bg-stone-100 px-7 tracking-[2px] text-xl font-[500] hover:text-slate-100 hover:bg-teal-500 transition-all duration-0.3 ease-in-out rounded-md py-3 ml-90"
          btnName="Travel Plan"
        />
      </section>
      <section className="mb-30">
        <Destination
          heading="Popular Destinations"
          text="Tours give you the opportunity to see alot, within a time frame."
          secHeading="Taal Volcano, Batangas"
          image1={image1}
          image2={image2}
          secContainerStyle="flex items-center justify-between mt-[4.5rem]"
          containerStyle="flex flex-col items-center mx-[4rem] my-[6rem] justify-center"
        />
        <Destination
          secHeading="Mt. Daguldul, Batangas"
          image1={image7}
          image2={image8}
          secContainerStyle="flex items-center flex-row-reverse justify-between mt-[4.5rem]"
          containerStyle="flex flex-row-reverse items-center mx-[4rem] my-[6rem] justify-center"
        />
      </section>
      <section className="mb-30">
        <TripSec
          heading="Recent Trips"
          text="You can discover unique destinations using Google Maps."
        />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default Homepage;
