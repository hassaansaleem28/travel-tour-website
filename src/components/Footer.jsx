import { FaBehance, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="lg:py-[4rem] px-[3rem] py-[2.7rem] lg:px-[6rem] bg-stone-900 text-slate-50">
      <div className="flex flex-col md:gap-5 gap-5 lg:gap-5 md:justify-center md:items-center md:grid md:grid-cols-2 text-start flex-wrap">
        <div>
          <NavLink to="/" className="lg:text-3xl text-[1.7rem] font-[700]">
            Trippy
          </NavLink>
          <p className="lg:text-xl text-sm mt-2 lg:mt-3">
            Choose your favourite destination.
          </p>
        </div>
        <div className="flex gap-2.5 justify-self-end lg:mr-2 md:mr-4">
          <a href="/">
            <i className="text-2xl hover:text-teal-500 transition-all">
              <FaFacebook />
            </i>
          </a>
          <a href="/">
            <i className="text-2xl hover:text-teal-500 transition-all">
              <FaInstagram />
            </i>
          </a>
          <a href="/">
            <i className="text-2xl hover:text-teal-500 transition-all">
              <FaBehance />
            </i>
          </a>
          <a href="/">
            <i className="text-2xl hover:text-teal-500 transition-all">
              <FaTwitter />
            </i>
          </a>
        </div>
      </div>

      <div className="pt-[2rem] mt-4 justify-center items-center text-start grid grid-cols-2 gap-y-6 lg:flex md:flex md:justify-between md:mt-5 lg:justify-between flex-wrap">
        <div className="lg:flex flex flex-col lg:flex-col lg:px-0 md:px-0">
          <h4 className="text-lg font-[700]">Projects</h4>
          <a href="/" className="mt-3">
            Changelog
          </a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div className="lg:flex flex flex-col lg:flex-col md:justify-self-end  justify-self-center">
          <h4 className="text-lg font-[700]">Community</h4>
          <a href="/" className="mt-3">
            Github
          </a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div className="lg:flex flex flex-col lg:flex-col lg:px-0 md:px-0">
          <h4 className="text-lg font-[700]">Help</h4>
          <a href="/" className="mt-3">
            Support
          </a>
          <a href="/">TroubleShooting</a>
          <a href="/">Contact Us</a>
          <a href="/">All Versions</a>
        </div>
        <div className="lg:flex flex flex-col ml-5 lg:flex-col md:justify-self-end justify-self-center">
          <h4 className="text-lg font-[700]">Others</h4>
          <a href="/" className="mt-3">
            Terms of Service
          </a>
          <a href="/">Private Policy</a>
          <a href="/">License</a>
          <a href="/">Whatsapp</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
