import { FaBehance, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="py-[4rem] px-[6rem] bg-stone-900 text-slate-50">
      <div className="flex items-center text-start justify-between flex-wrap">
        <div>
          <NavLink to="/" className="text-3xl font-[700]">
            Trippy
          </NavLink>
          <p className="text-xl mt-3">Choose your favourite destination.</p>
        </div>
        <div className="flex gap-2.5 ">
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

      <div className="pt-[2rem] text-start flex justify-between flex-wrap">
        <div className="flex flex-col">
          <h4 className="text-lg font-[700]">Projects</h4>
          <a href="/" className="mt-3">
            Changelog
          </a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg font-[700]">Community</h4>
          <a href="/" className="mt-3">
            Github
          </a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg font-[700]">Help</h4>
          <a href="/" className="mt-3">
            Support
          </a>
          <a href="/">TroubleShooting</a>
          <a href="/">Contact Us</a>
          <a href="/">All Versions</a>
        </div>
        <div className="flex flex-col">
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
