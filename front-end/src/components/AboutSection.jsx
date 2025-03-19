import { CakeSlice, Croissant, Sprout } from "lucide-react";
import aboutImg from "../assests/aboutImg.jpg";
import { Button } from "./ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: ".aboutContainer",
        start: "top 60%",
        end: "bottom top",
      },
    });

    tl.from(
      ".chooseUsEl",
      {
        x: -200,
        duration: 1,
        opacity: 0,
        ease: "power1.in",
        delay: 0.3,
        stagger: {
          amount: 1,
          from: "start",
          ease: "power2.out",
        },
      },
      "aboutAnim"
    );
    tl.from(".learnMoreBtn", {
      y: 50,
      duration: 0.8,
      opacity: 0,
      ease: "power1.inOut",
    });
    tl.to(
      ".cakeImg",
      {
        rotation: 10,
        duration: 0.3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 3,
      },
      "aboutAnim"
    );
  });

  return (
    <div className="px-6 py-12 flex flex-col gap-8 items-center justify-between aboutContainer max-w-[1440px] mx-auto">
      <h2 className="text-3xl font-Hero text-titleColor mb-6">ABOUT</h2>
      <div className="flex flex-col-reverse justify-between items-center md:flex-row md:items-center md:justify-between gap-4">
        {" "}
        <div className="flex flex-col items-center justify-between gap-4 md:items-start  ">
          <h3 className="text-bodyColor text-base font-pop text-center font-semibold w-full mb-2 md:text-start">
            Fresh Flavors, Modern Bakes
          </h3>
          <p className="text-bodyColor text-base font-pop text-center md:text-start">
            At Saffron Bakery, we&apos;re passionate about pushing the
            boundaries of traditional baking. We use innovative techniques and
            exciting flavor combinations to create unique and delicious treats.
            Our menu features everything from inventive pastries to stunning
            custom cakes, all made with locally sourced ingredients whenever
            possible. We&apos;re committed to providing a modern bakery
            experience that&apos;s both exciting and satisfying.
          </p>
          {/* Why chose us part */}
          <div>
            <h3 className="text-bodyColor text-base font-pop text-center font-semibold w-full mb-2 md:text-start">
              Why Choose Us?
            </h3>
            <div className="flex py-4 gap-4 chooseUsEl">
              <Croissant strokeWidth={1} className="h-12 w-12" />
              <p className="text-bodyColor text-base font-pop text-center md:text-start">
                <span className="font-semibold">Freshly Baked Daily</span> – Our
                products are made fresh every day with the finest ingredients.
              </p>
            </div>
            <div className="flex py-4 gap-4 chooseUsEl">
              <CakeSlice strokeWidth={1} className="h-12 w-12" />
              <p className="text-bodyColor text-base font-pop text-center md:text-start">
                <span className="font-semibold"> Custom Creations</span> – We
                specialize in personalized cakes and desserts for any occasion.
              </p>
            </div>
            <div className="flex py-4 gap-4 chooseUsEl">
              <Sprout strokeWidth={1} className="h-12 w-12" />
              <p className="text-bodyColor text-base font-pop text-center md:text-start">
                <span className="font-semibold">
                  Locally Sourced Ingredients
                </span>
                – We prioritize using high-quality, local, and organic
                ingredients.
              </p>
            </div>
          </div>
          <Button className="learnMoreBtn">Learn More</Button>
        </div>
        <div className="flex">
          <img
            src={aboutImg}
            alt="Cake Image"
            className="object-cover rounded-lg cakeImg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
