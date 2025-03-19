import { Link } from "react-router-dom";
import logo from "../assests/Saffron Bakery Logo.png";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef();

  useGSAP(() => {
    gsap.from(".navlink", {
      x: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      delay: 1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
        end: "top center",
      },
    });

    gsap.from(".logoImg", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
        end: "top center",
      },
    });
  });

  return (
    <div
      ref={footerRef}
      className="flex flex-col gap-4 px-6 py-12 items-stretch justify-center md:flex-row md:items-stretch md:justify-between bg-orange-100"
    >
      <div className=" md:flex-[40%]  ">
        <img src={logo} alt="Logo" className="mb-6 logoImg" />
        <p className="text-base text-bodyColor font-pop w-[320px]">
          Taste the golden touch of freshly baked goodness, warm, delicious
          treats made with love.
        </p>
      </div>
      <div className="flex flex-col md:flex-[30%]">
        <h3 className="text-base font-rob font-bold ">NAVIGATION LINKS</h3>
        <div className="flex flex-col gap-4 py-6 md:flex-[30%]">
          <Link
            className="text-base text-titleColor font-rob navlink hover:text-[#E78519]"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="text-base text-titleColor font-rob navlink hover:text-[#E78519]"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-base text-titleColor font-rob navlink hover:text-[#E78519]"
            to="/offerings"
          >
            Offering
          </Link>
          <Link
            className="text-base text-titleColor font-rob navlink hover:text-[#E78519]"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-[30%]  justify-start items-start">
        <h3 className="text-base font-rob font-bold ">CONTACT</h3>
        <p className="text-base font-pop text-bodyColor">
          <span className="font-semibold text-titleColor">EMAIL:</span>{" "}
          saffranbakery@gmail.com
        </p>
        <p className="text-base font-pop text-bodyColor">
          <span className="font-semibold text-titleColor">ADDRESS:</span> 724,
          Pashupati Bhattacharya Rd, Behala, Kolkata, West Bengal 700034
        </p>
      </div>
    </div>
  );
};

export default Footer;
