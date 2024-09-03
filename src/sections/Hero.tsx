// Code: Hero Section
import {
  Dialog,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "../components/dialog";
import { useState } from "react";
import hero_1 from "/images/hero_1.webp";
import hero_2 from "/images/hero_2.webp";
import hero_3 from "/images/hero_3.webp";
import hero_4 from "/images/hero_4.webp";
import hero_5 from "/images/hero_5.webp";
import hero_cologne from "/images/hero_cologne.webp";
import hero_react from "/images/hero_react.webp";
import hero_dnd from "/images/hero_dnd.webp";

function Tutorial() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <span
        className="text-[#ecca7f] cursor-pointer hover:underline"
        onClick={() => setIsOpen(true)}
      >
        Link
      </span>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Tutorial</DialogTitle>
        <DialogDescription>Yes, even this one.</DialogDescription>
      </Dialog>
    </>
  );
}

function Cologne() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <span
        className="text-[#ecca7f] cursor-pointer hover:underline"
        onClick={() => setIsOpen(true)}
      >
        Cologne
      </span>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Cologne</DialogTitle>
        <DialogDescription>
          I moved to Hürth (near Cologne) in 2013 because I fell in love with
          the city and its inhabitants the first time I was here. The city
          offers countless opportunities for self-fulfilment and everyone is
          welcome here, which is why I now call this my home.
        </DialogDescription>
        <DialogBody>
          <img
            alt=""
            src={hero_cologne}
            className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            loading="lazy"
          />
        </DialogBody>
      </Dialog>
    </>
  );
}

function React() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <span
        className="text-[#ecca7f] cursor-pointer hover:underline"
        onClick={() => setIsOpen(true)}
      >
        React
      </span>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>React</DialogTitle>
        <DialogDescription>
          I first came into contact with React in 2019 at onvista. Back then at
          onvista, I started with class components and made the switch to
          functional components. For state management, we first used Redux until
          we switched to the native React state management tools.
        </DialogDescription>
        <DialogBody>
          <img
            alt=""
            src={hero_react}
            className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            loading="lazy"
          />
        </DialogBody>
      </Dialog>
    </>
  );
}

function DnD() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <span
        className="text-[#ecca7f] cursor-pointer hover:underline"
        onClick={() => setIsOpen(true)}
      >
        Dungeons & Dragons
      </span>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Dungeons & Dragons</DialogTitle>
        <DialogDescription>
          Dungeons & Dragons is a pen & paper role-playing game that was first
          published in 1974 by Gary Gygax and Dave Arneson. The game is played
          with dice, paper, and pen and is a mix of storytelling, improvisation,
          and strategy. The game master describes the world and the players
          decide what their characters do. The game master then reacts to the
          players' decisions and the story unfolds. The game is played in groups
          of 3-6 people and can last from a few hours to several days. At the
          Gamescom 2024 I was a professional game master at the booth of the
          publisher Wizards of the Coast / Hasbro and gave hundreds of people an
          insight into the world of pen & paper role-playing games.
        </DialogDescription>
        <DialogBody>
          <img
            alt=""
            src={hero_dnd}
            className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            loading="lazy"
          />
        </DialogBody>
      </Dialog>
    </>
  );
}

export default function Hero() {
  return (
    <div className="bg-zinc-900">
      <main>
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-100 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Yo! I'm <span className="text-[#ecca7f]">Denis</span> and
                    this is my interactive CV.
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none">
                    Each yellow {Tutorial()} is connected to a popup, which
                    gives you more information about what I associate with the
                    keyword.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none">
                    I am {new Date().getFullYear() - 1998} years old, living in{" "}
                    {Cologne()}, and I am a Frontend Developer and Product Owner
                    and I have been working in the IT industry for over{" "}
                    {new Date().getFullYear() - 2016} years. I have experience
                    in creating modern web applications from both a product and
                    developer perspective. Primarily with {React()}.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none">
                    In addition to my main job in the IT industry, I am a
                    content creator in the pen & paper niche ({DnD()} and the
                    like) and a member of the talent network “Spread the Flame”
                    with whose help I have already been a professional game
                    master at conventions & festivals such as Gamescom or the
                    Elbenwald Festival and have also given workshops on the
                    subject to hundreds of people.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none">
                    This website is written in Typescript, React, and TailwindCSS. You can see the source code here.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        alt=""
                        src={hero_5}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt=""
                        src={hero_1}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src={hero_4}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt=""
                        src={hero_2}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src={hero_3}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
