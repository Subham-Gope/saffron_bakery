import { useForm } from "react-hook-form";
import contactImg from "../assests/contactImg.jpg";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/config/zodSchema";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { emailPostRequest } from "@/api/contactService";
import { toast } from "react-toastify";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: ".contactContainer",
        start: "top 70%",
        marker: true,
      },
    });

    tl.from(".imgContainer", {
      opacity: 0,
      y: 100,
      duration: 0.8,
      ease: "power1.in",
    });
    tl.from(
      ".formField",
      {
        x: 50,
        opacity: 0,
        ease: "power1.in",
        duration: 0.8,
        stagger: {
          amount: 0.8,
          ease: "power2.inOut",
          from: "end",
        },
      },
      "same"
    );
    tl.to(
      ".formBtn",
      {
        width: "300px",
        // rotation: 10,
        duration: 0.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: 3,
      },
      "same"
    );
  });

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const message = await emailPostRequest(data);
      console.log(message);
      toast.success(message);
      reset();

      setTimeout(() => {
        navigate("/home");
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 2000);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col px-6 py-8 contactContainer max-w-[1440px] mx-auto">
      <h2 className="text-3xl font-Hero text-titleColor mb-6 text-center">
        CONTACT US
      </h2>
      <div className="flex flex-col  md:flex-row  gap-4 ">
        <div className="flex flex-[40%]   imgContainer ">
          <img
            src={contactImg}
            alt="Contact Image"
            className="object-cover w-full  rounded-md aspect-square"
          />
        </div>
        <div className="flex flex-col justify-center  flex-[60%] ">
          <h3 className="text-bodyColor text-xl font-rob text-center font-semibold w-full mb-2 md:text-start">
            Feel free to Contact Us
          </h3>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col  py-8 items-start justify-between gap-2"
          >
            <div className="flex flex-col gap-1 w-full  formField ">
              <label
                htmlFor="name"
                className="text-lg font-semibold font-pop text-titleColor"
              >
                Enter your name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Rajesh Chakraborty"
                className="border border-bodyColor rounded-sm w-full px-6 py-4 outline-none placeholder:text-base placeholder:font-pop placeholder:text-gray-500 focus:border-primaryColor focus:border-[3px] "
                {...register("name")}
              />
              {errors.name && (
                <p className="text-base font-pop text-red-800">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1 w-full  formField">
              <label
                htmlFor="email"
                className="text-lg font-semibold font-pop text-titleColor"
              >
                Enter your email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="rajeshchakraborty@gmail.com"
                className="border border-bodyColor rounded-sm w-full px-6 py-4 outline-none placeholder:text-base placeholder:font-pop placeholder:text-gray-500 focus:border-primaryColor focus:border-[3px] "
                {...register("email")}
              />
              {errors.email && (
                <p className="text-base font-pop text-red-800">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1 w-full  formField">
              <label
                htmlFor="message"
                className="text-lg font-semibold font-pop text-titleColor"
              >
                Enter your Message:
              </label>
              <textarea
                rows={5}
                name="message"
                id="name"
                placeholder="Hi there, ....."
                className="border border-bodyColor rounded-sm w-full px-6 py-4 outline-none placeholder:text-base placeholder:font-pop placeholder:text-gray-500 focus:border-primaryColor focus:border-[3px] "
                {...register("message")}
              />
              {errors.message && (
                <p className="text-base font-pop text-red-800">
                  {errors.message.message}
                </p>
              )}
            </div>
            <Button type="submit" className="px-6 py-2 w-full formBtn">
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
