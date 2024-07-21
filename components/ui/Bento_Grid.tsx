import { cn } from "../../utils/cn";
import ImageMarquee from "../Marquee";
import { BackgroundGradientAnimation } from "./Background-gradient-animation";
import { SparklesCore } from "./Sparkel";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex flex-wrap gap-4 justify-center mx-auto lg:max-w-5xl relative "
      )}
    >
      
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  imgClassName,
  titleClassName,
  pClass,
  h1Class,
  spareImg,
  img,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  imgClassName?: string;
  titleClassName?: string;
  h1Class?: string;
  pClass?: string;
  spareImg?: string;
  img?: string;
}) => {
  return (

    <div id={`${id}`} className={cn("flex flex-col p-3", className)}>
    <div className="w-full md:w-[350px] mx-auto">
      {img && (
        <img
          src={img}
          className={cn(imgClassName, "object-center", "object-cover")}
          alt=""
        />
      )}
    </div>
    <div className={cn("h-auto w-full", spareImg)}>
      {id === 2 && <SparklesCore />}
      {id === 3 && <BackgroundGradientAnimation />}
      <div className={cn("w-full", titleClassName)}>
        <h1 className={cn("text-lg font-semibold", h1Class)}>{title}</h1>
        <p className={cn("text-sm font-semibold", pClass)}>{description}</p>
      </div>
    </div>
  </div>



    // <div className="flex flex-col flex-wrap mx-auto justify-center">
    //   <div
    //     id={`${id}`}
    //     className={cn("flex flex-col p-3", className)}
    //   >
    //     <div className="w-[350px] ">
    //       <img
    //         src={img}
    //         className={cn(imgClassName, "object-center", "object-cover")}
    //         alt=""
    //       />
    //     </div>
    //     <div className={cn("h-[400px] w-full", spareImg)}>
    //       {id === 2 && <SparklesCore />}
    //       {id === 3 && <BackgroundGradientAnimation />}

    //       <div className={cn("w-full", titleClassName)}>
    //         <h1 className={cn("text-lg font-semibold", h1Class)}>{title}</h1>
    //         <p className={cn("text-sm font-semibold", pClass)}>{description}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
