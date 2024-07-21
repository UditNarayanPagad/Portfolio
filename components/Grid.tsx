import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/Bento_Grid";
import { TextRevealCard } from "./ui/Text-reveal-card";
import Image from "next/image";
import { SparklesCore } from "./ui/Sparkel";
import { BackgroundGradientAnimation } from "./ui/Background-gradient-animation";
import ImageMarquee from "./Marquee";
let images = ["./GridArt_20240720_005354640.png",
  "./GridArt_20240720_005605009.png",
  "./GridArt_20240720_005748655.png",
  "./GridArt_20240720_005830795.png",
  "./GridArt_20240720_005924298.png",
  "./GridArt_20240720_005957687.png",
  "./GridArt_20240720_010102710.png",
  "./GridArt_20240720_010726772.png",
 ];

const Grid = () => {
  return (
    <section className="w-[100%] max-w-7xl">
      <BentoGrid className="flex flex-col flex-wrap gap-10 mx-auto bg-zinc-100 w-full">
        <div className="w-full flex flex-wrap justify-center mx-auto">
          <div className="1st flex flex-col sm:flex-row w-[100%] md:w-[80%] text-center items-center my-5">
            <Image
              src={"./GridArt_20240720_164321333.png"}
              alt=""
              height={350}
              width={270}
            ></Image>
            <div>
              <h1 className={"text-lg lg:text-3xl font-semibold"}>
                I prioritize client collaboration, fostering open communication
              </h1>
              <p className={"text-sm font-semibold"}></p>
            </div>
          </div>
          <div className="2nd  w-[100%] md:w-[80%] h-64 my-5 relative ">
            <ImageMarquee images={images}/>
            <SparklesCore className="w-full h-[100%] " />
            <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className={"text-lg lg:text-3xl font-semibold text-center my-3"}>
                I'm Proficient in both front-end and back-end development.
              </h1>
              <p
                className={
                  "text-sm md:text-lg font-semibold text-center text-blue-300 "
                }
              >
                MERN and Next.js Developer
              </p>
            </div>
          </div>
          <div className="3rd w-full md:w-[80%] h-64 my-5 relative">
            <BackgroundGradientAnimation />
            <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className={"text-lg lg:text-3xl font-semibold text-center"}>
                My tech stack
              </h1>
              <p
                className={
                  "text-sm md:text-lg font-semibold text-center text-green-300 "
                }
              >
                I constantly try to improve
              </p>
            </div>
          </div>
          <div className="4th flex flex-col sm:flex-row w-[100%] md:w-[80%] text-center items-center my-5">
            <Image
              src={"./b5.svg"}
              alt=""
              height={350}
              width={270}
            ></Image>
            <div>
              <h1 className={"text-lg lg:text-3xl font-semibold"}>
               Currently building fullstack applications with Next.js
              </h1>
              <p className={"text-sm font-semibold"}></p>
            </div>
          </div>
        </div>
      </BentoGrid>
      <div className="flex justify-center w-[100%] items-center ">
        <TextRevealCard
          text={"Want to work together?"}
          revealText={"uditnarayanpagad@gmail.com"}
        />
      </div>
    </section>
  );
};

export default Grid;
