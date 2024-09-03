
import hero_1 from "/images/hero_1.webp";
import hero_2 from "/images/hero_2.webp";
import hero_3 from "/images/hero_3.webp";
import hero_4 from "/images/hero_4.webp";
import hero_5 from "/images/hero_5.webp";


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
                    this is my CV.
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none">
                    I am {new Date().getFullYear() - 1998} years old, living in Cologne, and I am a Frontend Developer and Product Owner
                    and I have been working in the IT industry for over{" "}
                    {new Date().getFullYear() - 2016} years. I have experience
                    in creating modern web applications from both a product and
                    developer perspective. Primarily with React.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none">
                    In addition to my main job in the IT industry, I am a
                    content creator in the pen & paper niche (Dungeons & Dragons and the
                    like) and a member of the talent network “Spread the Flame”
                    with whose help I have already been a professional game
                    master at conventions & festivals such as Gamescom or the
                    Elbenwald Festival and have also given workshops on the
                    subject to hundreds of people.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none">
                    This website is written in Typescript, React, and TailwindCSS. You can see the source code <a href="https://github.com/DenisGusi/cv" target="_blank"><span className="hover:underline cursor-pointer font-black">here</span></a>.
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
