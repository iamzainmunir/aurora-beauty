"use client";
import Image from "next/image";
import Link from "next/link";
import GradientText from "../../GradientText";
import Typewriter from "typewriter-effect";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import BlurText from "../../BlurText";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    // Initial setup - hide elements
    gsap.set(
      [".heading", ".main-text", ".main-image", ".action-btns", ".glow-card"],
      {
        opacity: 0,
      }
    );

    // Modern staggered reveal animation
    tl.from(".heading", {
      x: -500,
    })
      .to(".heading", {
        opacity: 1,

        duration: 0.8,
        ease: "power3.out",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      })
      .to(
        ".main-text",
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .to(
        ".main-image",
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "back.out(1.2)",
        },
        "-=0.4"
      )
      .to(
        ".action-btns",
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.5,
          ease: "power1.out",
        },
        "-=0.3"
      )
      .to(
        ".glow-card",
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2"
      );
  }, []);

  return (
    <section id="home-section" className="bg-gray-50 overflow-hidden">
      <div className="container xl:pt-7 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <h1 className="heading text-start font-extrabold text-6xl text-black lg:text-left sm:leading-20 leading-16 opacity-0">
              <GradientText
                colors={["#FF8C00", "#FFA500", "#FF4500"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class font-bold"
              >
                Aurora Beauty
                <br />
                Provides
              </GradientText>
            </h1>
            <h2 className="text-4xl mb-5 text-[#DF6853] font-mono">
              <Typewriter
                options={{
                  strings: [
                    "Signature Facial Treatment",
                    "Hair Styling & Coloring",
                    "Manicure & Pedicure",
                    "Waxing Services",
                    "Bridal Beauty Package",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="main-text text-black/55 text-lg font-normal mb-10 lg:text-start text-center opacity-0">
              <BlurText
                text=" Indulge in a luxurious self-care experience, featuring premium
              treatments, expert techniques, and personalized attention —
              delivered with elegance, every day."
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8"
              />
            </p>
            <div className="action-btns flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start opacity-0 translate-y-8">
              <Link href="/#services">
                <button className="text-xl font-medium rounded-full text-white py-3 px-8 bg-primary hover:text-primary border border-primary hover:bg-transparent hover:cursor-pointer transition ease-in-out duration-300">
                  Our Services
                </button>
              </Link>
              <Link href="/#book">
                <button className="text-xl border border-primary rounded-full font-medium py-3 px-8 text-primary hover:text-white hover:bg-primary hover:cursor-pointer transition ease-in-out duration-300">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="glow-card flex bg-white gap-5 px-5 py-2 items-center bottom-10 left-10 rounded-xl absolute opacity-0 translate-y-10 shadow-lg z-10">
              <Image
                src={"/images/hero/glow.avif"}
                alt="beauty-treatment"
                width={100}
                height={100}
                className=" object-cover rounded-lg "
                loading="lazy"
              />
              <p className="text-lg font-normal">
                Discover 50+ <br /> Ways to Glow
              </p>
            </div>
            <div>
              <Image
                src="/images/hero/main-hero.png"
                alt="beauty salon hero"
                className="main-image opacity-0 scale-95"
                width={1000}
                height={805}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
