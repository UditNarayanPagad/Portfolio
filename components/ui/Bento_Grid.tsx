import { cn } from "../../utils/cn";
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
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
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
  spareImg,
  img,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  img?: string;
}) => {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 mx-auto",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {
        <div>
          {id === 5 && <h1 className="absolute font-semibold">{title}</h1>}
          <img
            src={img}
            className={cn(imgClassName, "object-center", "object-cover")}
            alt=""
          />
        </div>
      }
      {id === 2 && (
        <div className="flex justify-center items-center">
          <SparklesCore />
          <div className="absolute text-blue-300 text-center">
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="text-sm text-blue-200">{description} </p>
          </div>
        </div>
      )}
      {id === 3 && (
        <div className="w-full h-full flex items-center justify-center z-10">
          <BackgroundGradientAnimation />
          <div className="absolute text-blue-300 text-center">
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="text-sm text-blue-200">{description} </p>
          </div>
        </div>
      )}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {id === 1 && title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
