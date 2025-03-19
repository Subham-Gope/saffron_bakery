import { Button } from "./ui/button";
import heroImage from "../assests/cake imge.png";
import heroBackground from "../assests/Hero section saffron Bakry.png";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Hero = () => {
  const imgRef = useRef();

  useGSAP(() => {
    gsap.from(imgRef.current, {
      rotate: 360,
      duration: 3,
      ease: "elastic.out",
    });
  });

  return (
    <div
      className="px-6 py-12 flex flex-col-reverse items-center justify-between min-h-[90vh] bg-cover gap-4  md:flex-row mt-[-100px]"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="flex flex-col px-4 py-8 gap-4 flex-[50%] md:flex-[60%] ">
        <h1 className="text-white text-6xl font-Hero">
          Baked with Tradition, Shared with Love.
        </h1>
        <p className="text-base text-gray-100 font-pop">
          Whether it&apos;s a birthday, wedding, or just because, Saffron Bakery
          creates custom cakes and desserts that make every occasion
          unforgettable. Let us bring your vision to life.
        </p>
        <Link to="/offerings">
          <Button>Taste the Love ❤️</Button>
        </Link>
      </div>
      <div ref={imgRef} className="flex flex-[50%] md:flex-[40%] mt-8 ">
        <img className="object-cover w-[400px]" src={heroImage} alt="cake" />
      </div>
    </div>
  );
};

export default Hero;
