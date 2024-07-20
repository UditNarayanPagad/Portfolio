import { cn } from "../../utils/cn";
import ImageMarquee from "../Marquee";
import { BackgroundGradientAnimation } from "./Background-gradient-animation";
import { SparklesCore } from "./Sparkel";

let images = ["./GridArt_20240720_005354640.png",
   "./GridArt_20240720_005605009.png",
   "./GridArt_20240720_005748655.png",
   "./GridArt_20240720_005830795.png",
   "./GridArt_20240720_005924298.png",
   "./GridArt_20240720_005957687.png",
   "./GridArt_20240720_010102710.png",
   "./GridArt_20240720_010726772.png",
  ];
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
      <ImageMarquee images={images} />
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
    <div className="flex flex-col flex-wrap mx-auto justify-center">
      <div
        id={`${id}`}
        className={cn("flex flex-col p-3", className)}
      >
        <div className="w-full">
          <img
            src={img}
            className={cn(imgClassName, "object-center", "object-cover")}
            alt=""
          />
        </div>
        <div className={cn("h-[400px]", spareImg)}>
          {id === 2 && <SparklesCore />}
          {id === 3 && <BackgroundGradientAnimation />}

          <div className={cn("w-full", titleClassName)}>
            <h1 className={cn("text-lg font-semibold", h1Class)}>{title}</h1>
            <p className={cn("text-sm font-semibold", pClass)}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
