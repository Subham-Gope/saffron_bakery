import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Cake,
  CakeSlice,
  Candy,
  Coffee,
  Cookie,
  Croissant,
  Donut,
  Lollipop,
  Pizza,
  Shell,
} from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OfferingsSection = () => {
  useGSAP(() => {
    gsap.set(".cards", { x: 0, opacity: 1 });
    gsap.from(".cards", {
      x: "-200%",
      duration: 0.6,
      opacity: 0,
      delay: 0.3,
      stagger: {
        each: 0.3,
        grid: "auto",
        from: "start",
        ease: "power1.in",
      },
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".offeringsContainer",
        start: "top 80%",
      },
    });
  });

  return (
    <div className="px-6 py-12 flex flex-col items-center justify-between gap-4 offeringsContainer max-w-[1440px] mx-auto">
      <h1 className="text-3xl font-Hero text-titleColor mb-6">Offerings</h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4 w-full content-center  ">
        <div className="flex flex-col gap-4 items-center justify-between  p-8 bg-white shadow-lg rounded-md border-[1px] border-gray-200 hover:scale-105 transition-all duration-500 cards  ">
          <Cake strokeWidth={1} className="text-titleColor w-16 h-16" />
          <h2 className="text-titleColor font-semibold text-lg font-rob">
            Artisan Cakes
          </h2>
          <p className="text-bodyColor text-base font-pop text-center">
            Custom-designed birthday, wedding, and specialty cakes
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-between  p-8 bg-white shadow-lg rounded-md border-[1px] border-gray-200 hover:scale-105 transition-all duration-500 cards">
          <CakeSlice strokeWidth={1} className="text-titleColor w-16 h-16" />
          <h2 className="text-titleColor font-semibold text-lg font-rob">
            Decadent Desserts
          </h2>
          <p className="text-bodyColor text-base font-pop text-center">
            Tarts, éclairs, mousses, and mini indulgences
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-between  p-8 bg-white shadow-lg rounded-md border-[1px] border-gray-200 hover:scale-105 transition-all duration-500 cards ">
          <Croissant strokeWidth={1} className="text-titleColor w-16 h-16" />
          <h2 className="text-titleColor font-semibold text-lg font-rob">
            Fresh-Baked Breads
          </h2>
          <p className="text-bodyColor text-base font-pop text-center">
            Sourdough, baguettes, brioche, and gluten-free options
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-between  p-8 bg-white shadow-lg rounded-md border-[1px] border-gray-200 hover:scale-105 transition-all duration-500 cards ">
          <Cookie strokeWidth={1} className="text-titleColor w-16 h-16" />
          <h2 className="text-titleColor font-semibold text-lg font-rob">
            Cookies & Biscuits
          </h2>
          <p className="text-bodyColor text-base font-pop text-center">
            Classic chocolate chip, macarons, shortbread, and seasonal flavors
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-between  p-8 bg-white shadow-lg rounded-md border-[1px] border-gray-200 hover:scale-105 transition-all duration-500 cards ">
          <Donut strokeWidth={1} className="text-titleColor w-16 h-16" />
          <h2 className="text-titleColor font-semibold text-lg font-rob">
            Morning Delight
          </h2>
          <p className="text-bodyColor text-base font-pop text-center">
            Croissants, muffins, danishes, and breakfast pastries
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-between  p-8 bg-white shadow-lg rounded-md border-[1px] border-gray-200 hover:scale-105 transition-all duration-500 cards ">
          <Shell strokeWidth={1} className="text-titleColor w-16 h-16" />
          <h2 className="text-titleColor font-semibold text-lg font-rob">
            Seasonal Specials
          </h2>
          <p className="text-bodyColor text-base font-pop text-center">
            Holiday-themed treats, pumpkin rolls, festive cookies, etc.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-between  p-8 bg-white shadow-lg rounded-md border-[1px] border-gray-200 hover:scale-105 transition-all duration-500 cards ">
          <Pizza strokeWidth={1} className="text-titleColor w-16 h-16" />
          <h2 className="text-titleColor font-semibold text-lg font-rob">
            Savory Bakes
          </h2>
          <p className="text-bodyColor text-base font-pop text-center">
            Quiches, hand pies, stuffed pretzels, and savory galettes for lunch
            or snacking
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-between  p-8 bg-white shadow-lg rounded-md border-[1px] border-gray-200 hover:scale-105 transition-all duration-500 cards ">
          <Candy strokeWidth={1} className="text-titleColor w-16 h-16" />
          <h2 className="text-titleColor font-semibold text-lg font-rob">
            Healthy Bites
          </h2>
          <p className="text-bodyColor text-base font-pop text-center">
            Vegan muffins, gluten-free brownies, protein bars, and sugar-free
            treats
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-between  p-8 bg-white shadow-lg rounded-md border-[1px] border-gray-200 hover:scale-105 transition-all duration-500 cards ">
          <Lollipop strokeWidth={1} className="text-titleColor w-16 h-16" />
          <h2 className="text-titleColor font-semibold text-lg font-rob">
            Celebration Treats
          </h2>
          <p className="text-bodyColor text-base font-pop text-center">
            Cupcakes, cake pops, dessert bars, and mini bundt cakes for parties
            and events
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-between  p-8 bg-white shadow-lg rounded-md border-[1px] border-gray-200 hover:scale-105 transition-all duration-500 cards ">
          <Coffee strokeWidth={1} className="text-titleColor w-16 h-16" />
          <h2 className="text-titleColor font-semibold text-lg font-rob">
            Coffee Companions
          </h2>
          <p className="text-bodyColor text-base font-pop text-center">
            Scones, biscotti, cinnamon rolls, and buttery shortbread paired with
            beverages
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferingsSection;
