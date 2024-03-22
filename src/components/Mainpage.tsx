"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function Mainpage() {
  const containerr = useRef<HTMLDivElement | null>(null);
  const topDot = useRef<HTMLDivElement | null>(null);
  const bottomDot = useRef<HTMLDivElement | null>(null);
  const topStars = new Array(100).fill(null);
  const bottomStars = new Array(100).fill(null);
  useGSAP(
    () => {
      const tl1 = gsap.timeline({ repeat: -1 });
      tl1.fromTo(
        ".topDot",
        { y: 0, opacity: 0 },
        {
          y: "99vh",
          duration: 5,
          repeat: -1,
          stagger: 0.3,
          ease: "none",
          opacity: 1,
        }
      );
      tl1.fromTo(
        ".topDot",
        { y: 0, opacity: 0 },
        {
          y: "99vh",
          duration: 5,
          repeat: -1,
          stagger: 0.3,
          ease: "none",
          opacity: 1,
        }
      );
      const tl2 = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
      tl2.fromTo(
        ".bottomDot",
        { y: 0, opacity: 0 },
        {
          y: "-99vh",
          duration: 5,
          repeat: -1,
          stagger: 0.3,
          ease: "none",
          opacity: 1,
        },
        "+=2"
      );
      tl2.fromTo(
        ".bottomDot",
        { y: 0, opacity: 0 },
        {
          y: "-99vh",
          duration: 5,
          repeat: -1,
          stagger: 0.3,
          ease: "none",
          opacity: 1,
        },
        "+=2"
      );
    },
    { scope: containerr }
  );
  return (
    <div ref={containerr} className="containerrs">
      <div className="w-screen h-3 bg-black absolute top-0 z-10"></div>
      <div className="w-screen h-3 bg-black absolute bottom-0 z-10"></div>
      <div className="container">
        {topStars.map((star, index) => (
          <div
            key={index}
            className={`topDot h-1 w-1 bg-[#B3C3FF] absolute top-0`}
            style={{ left: `${Math.floor(Math.random() * 99) + 1}vw` }}
            ref={topDot}
          ></div>
        ))}
      </div>
      <div className="overflow-hidden">
        {bottomStars.map((star, index) => (
          <div
            key={index}
            className={`bottomDot h-1 w-1 bg-yellow-300 absolute bottom-0`}
            style={{ left: `${Math.floor(Math.random() * 99) + 1}vw` }}
            ref={bottomDot}
          ></div>
        ))}
      </div>
      <div className="h-screen flex justify-center text-center items-center">
        <div className="text-white font-extrabold">
          <p className="text-[90px] tracking-wider leading-[40px]">
            I’m Siddharth
          </p>
          <p className="text-[98px] bg-gradient-to-r from-[#B3C3FF] to-white text-transparent bg-clip-text tracking-wider">
            Passionate Full-stack
          </p>
          <p className="text-[90px] tracking-wider leading-[40px]">Devloper.</p>
          <div className="flex justify-center">
            <p className="text-[25px] tracking-wider pt-12 w-2/3">
              I develop robust and interactive full stack websites with a strong
              focus on performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
