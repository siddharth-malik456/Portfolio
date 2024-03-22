"use client";
import Image from "next/image";
import { useState } from "react";
import "@/components/stylesheets/Animations.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Navbar() {
  const [light, setLight] = useState(true);
  const [sound, setSound] = useState(true);
  return (
    <div className="flex rounded-full bg-[#262626] px-4 py-2 gap-3 transform duration-300 hover:scale-110">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="bg-[#1B1B1B] rounded-full transform duration-300 box">
            <div className="">
              <Image
                src="icons/home_icon.svg"
                width={50}
                height={50}
                alt="home_icon"
                className="p-2.5"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Home</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="bg-[#1B1B1B] rounded-full transform duration-300 box">
            <div>
              <Image
                src="icons/projects_icon.svg"
                width={50}
                height={50}
                alt="home_icon"
                className="p-2.5"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Projects</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="bg-[#1B1B1B] rounded-full transform duration-300 box">
            <div>
              <Image
                src="icons/work_experience_icon.svg"
                width={50}
                height={50}
                alt="home_icon"
                className="p-3"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Work experience</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="bg-[#1B1B1B] rounded-full transform duration-300 box">
            <div>
              <Image
                src="icons/skills_mode_icon.svg"
                width={50}
                height={50}
                alt="home_icon"
                className="p-2.5"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Skills</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="bg-[#1B1B1B] rounded-full transform duration-300 box">
            <div>
              <Image
                src="icons/github_icon.svg"
                width={50}
                height={50}
                alt="home_icon"
                className="p-3.5"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Github</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="bg-[#1B1B1B] rounded-full transform duration-300 box">
            <div>
              <Image
                src="icons/linkedin_icon.svg"
                width={50}
                height={50}
                alt="home_icon"
                className="p-3.5"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>LinkedIn</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="bg-[#1B1B1B] rounded-full transform duration-300 box">
            <div>
              <Image
                src="icons/contact_me_icon.svg"
                width={50}
                height={50}
                alt="home_icon"
                className="p-2.5"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact me</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            className="bg-[#1B1B1B] rounded-full transform duration-300 box"
            onClick={() => {
              setLight(!light);
            }}
          >
            <div>
              <Image
                src={`${
                  light
                    ? "icons/light_mode_icon.svg"
                    : "icons/dark_mode_icon.svg"
                }`}
                width={50}
                height={50}
                alt="home_icon"
                className="p-3"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{light ? "dark mode" : "light mode"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            className="bg-[#1B1B1B] rounded-full transform duration-300 box"
            onClick={() => {
              setSound(!sound);
            }}
          >
            <div>
              <Image
                src={`${
                  sound ? "icons/sound_icon.svg" : "icons/sound_mute_icon.svg"
                }`}
                width={50}
                height={50}
                alt="home_icon"
                className="p-3"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{sound ? "turn off" : "turn on"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default Navbar;
