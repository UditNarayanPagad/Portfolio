import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/Text-generate-effect";
import Button from "./ui/Button";
import { MdDoubleArrow } from "react-icons/md";
import { FloatingNav } from "./ui/FloatingNav";
import { FlipWords } from "./ui/FlipWords";
import { navItems } from "../Data";

const Home = () => {
  return (
    <section id="home" className="text-white w-full bg-black-100 px-10 py-10">
      <FloatingNav navItems= {navItems}/>
      
      <Spotlight className="absolute top-52 h-screen" fill="pink" />
      <Spotlight className="absolute -top-16 right-10 " fill="blue" />

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.3] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute top-0 left-0 pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute top-14 max-w-[89vw] lg:max-w-[80vw] md:max-w-2xl flex flex-col justify-center items-center ">
          <h2 className="uppercase text-widest text-xs max-w-80 text-blue-100 txet-center">Dynamic Wave magic with Next.js</h2>
        <TextGenerateEffect className="text-zinc-100 text-3xl md:text-5xl lg:text-6xl text-center" words="Transforming Concepts into Seemless User Experiences" />
        <h2 className="text-blue-200 font-semibold my-3">Hey, I'm Udit, A{<FlipWords words={["Frontend","React","Next.js","Backend","FullStack"]}/>}developer</h2>
        
        <Button 
        title="Show my work"
        icon={<MdDoubleArrow />}
        position="right"
        link={"#works"}
        />
        </div>

      </div>
    </section>
  );
};

export default Home;
