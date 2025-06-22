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
      <section className="h-[100vh] md:mb-30 mb-15 lg:mb-30">
        <Navbar />
        <Hero
          styles="w-[100%] h-[100%] relative"
          text="Choose  your favourite destination."
          textStyle="lg:text-3xl lg:text-center mb-10 text-2xl md:text-2xl md:tracking-wide lg:tracking-wider text-center text-stone-100 font-[500] lg:mb-8 md:mb-7 mb-5 md:mt-3 lg:mt-4"
          imageUrl={img}
          span={<span className="block sm:inline"> Your Story</span>}
          // imageUrl="https://images.pexels.com/photos/13574651/pexels-photo-13574651.jpeg"
          imgStyle="lg:h-[100%] md:h-[100%] md:w-[100%] w-[100vw] h-[100vh] lg:w-[100%] object-cover "
          heading={`Your Journey Your Story`}
          route="/"
          headingStyle="lg:text-7xl text-center text-[3rem] mb-3 md:text-6xl font-extrabold text-stone-100"
          btnStyle="bg-stone-100 tracking-[2px] text-xl font-[500] hover:text-slate-100   hover:bg-teal-500 transition-all duration-0.3 ease-in-out rounded-md py-3 px-5"
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
          secContainerStyle="w-[100%] md:gap-10 md:flex md:flex-row lg:flex lg:flex-row lg:items-center md:mt-25 flex flex-col flex-col-reverse lg:justify-between mt-[4.5rem]"
          containerStyle="flex flex-col items-center md:mx-[2.5rem] md:my-[5rem] lg:mx-[4rem] lg:my-[6rem] justify-center"
        />
        <Destination
          secHeading="Mt. Daguldul, Batangas"
          image1={image7}
          image2={image8}
          secContainerStyle="md:flex md:gap-10 md:flex-row md:flex-row-reverse lg:flex-row flex flex-col lg:flex-row-reverse flex-col-reverse md:justify-between mt-[4.5rem]"
          containerStyle="flex flex-col items-center md:mx-[2.5rem] md:my-[5rem] lg:mx-[4rem] lg:my-[6rem] justify-center"
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
