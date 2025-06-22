import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import img from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="font-[Poppins]">
      <Navbar />
      <Hero
        styles="w-[100%] h-[100%] relative"
        imageUrl={img}
        imgStyle="w-[100%] h-[70vh] object-cover filter contrast-95 brightness-95"
        heading="Contact"
        headingStyle="text-5xl lg:ml-89 ml-46 top-2 md:top-0 absolute md:ml-65 font-extrabold text-stone-100"
      />
      <ContactForm
        textarea={
          <textarea
            placeholder="Message"
            required
            className="px-[1rem] py-[1rem] w-[100%] mb-[2rem] rounded-[3rem] outline-none border-2"
            rows="4"
          ></textarea>
        }
        placeholder="Subject"
        heading="Send a message to us!"
        type="text"
        btnName="Send Message"
      />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Contact;
