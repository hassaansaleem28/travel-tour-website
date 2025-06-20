import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import img from "../assets/night.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Signup() {
  return (
    <div className="font-[Poppins]">
      <Navbar />
      <Hero
        styles="w-[100%] h-[100%] relative"
        imageUrl={img}
        imgStyle="w-[100%] h-[70vh] filter contrast-80 brightness-90"
        heading="Sign up"
        headingStyle="text-5xl ml-92.5 font-extrabold text-stone-100"
      />
      <ContactForm
        placeholder="Strong Password"
        heading="Let's get started!"
        type="password"
        btnName="Sign up"
        textarea={
          <input
            placeholder="Confirm Password"
            className="h-[3rem] px-[1rem] w-[100%] mb-[2rem] rounded-[3rem] outline-none border-2"
            type="password"
            required
          />
        }
      />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Signup;
