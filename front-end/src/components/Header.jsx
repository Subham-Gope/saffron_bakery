import { Link, NavLink } from "react-router-dom";
import logo from "../assests/Saffron Bakery Logo.png";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef();
  const tl = useRef(null);

  const NavLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#FF7B02" : "#2D2D2D",
    };
  };

  // This useGSAP controls the main menu
  useGSAP(() => {
    gsap.from(".desktopMenu .desktopNavLink", {
      y: -70,
      duration: 1.2,
      opacity: 0,
      stagger: 0.3,
    });
  });

  // This useGSAP controls the mobile menu
  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.from(mobileMenuRef.current, {
      x: 400,
      y: 50,
      duration: 0.8,
      opacity: 0,
      ease: "power1.out",
    });

    tl.current.from(".mobileMenu .mobileNavLink", {
      x: 300,
      duration: 0.4,
      ease: "elastic.out",
      stagger: 0.1,
    });
    tl.current.from(".mobileNavBtn", {
      y: 50,
      duration: 0.4,
      opacity: 0,
      ease: "power1.out",
    });
  });

  const toggleMenuFunction = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
      document.body.style.overflowY = "hidden";
    } else {
      tl.current.reverse();
      document.body.style.overflowY = "scroll";
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className=" flex items-center justify-between px-6 py-4 gap-4 bg-white shadow-[0px_4px_8px_4px_rgba(0,0,0,0.1)] rounded-full m-4 relative z-[10]">
        <div>
          <Link to="/home">
            <img className="h-8" src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className="gap-4 hidden md:flex desktopMenu">
          <NavLink
            to="/home"
            className="text-base text-pop text-white desktopNavLink"
            style={NavLinkStyles}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-base text-pop text-white desktopNavLink"
            style={NavLinkStyles}
          >
            About
          </NavLink>
          <NavLink
            to="/offerings"
            className="text-base text-pop text-white desktopNavLink"
            style={NavLinkStyles}
          >
            Offering
          </NavLink>
        </nav>
        <Link to="/contact">
          <Button className="hidden md:flex px-6 py-4  cursor-pointer">
            Contact
          </Button>
        </Link>
        <Menu
          onClick={toggleMenuFunction}
          className="text-titleColor w-6 h-6 flex md:hidden cursor-pointer"
        />
      </div>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className="flex flex-col items-start bg-white shadow-[-4px_0px_4px_0px_rgba(0,0,0,0.1)] gap-4 h-screen w-52 px-10 fixed top-0 right-0 pt-12 md:hidden z-[10]"
      >
        <Button
          variant="outline"
          className="border-q border-primaryColor rounded-full text-primaryColor mb-6 hover:scale-105 hover:text-primaryColorHover hover:border-primaryColorHover hover:bg-transparent cursor-pointer"
          onClick={toggleMenuFunction}
        >
          <X className="flex  text-primaryColor" />
          close menu
        </Button>

        <nav className="flex flex-col gap-4 mb-6 mobileMenu">
          <NavLink
            to="/home"
            className="text-base text-pop text-white mobileNavLink "
            style={NavLinkStyles}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-base text-pop text-white mobileNavLink"
            style={NavLinkStyles}
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/offerings"
            className="text-base text-pop text-white mobileNavLink"
            style={NavLinkStyles}
            onClick={closeMenu}
          >
            Offering
          </NavLink>
        </nav>
        <Link to="/contact" className="mobileNavBtn" onClick={closeMenu}>
          <Button className="flex px-6 py-4 cursor-pointer">Contact</Button>
        </Link>
      </div>
    </>
  );
};

export default Header;
