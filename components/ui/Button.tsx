import Link from "next/link";
import React from "react";

const Button = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  link,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  link: string,
}) => {
  return (
    <div>
    <Link href="#works">
      <button className="relative my-4 w-36 inline-flex h-12 overflow-hidden rounded-lg p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-2 py-1 gap-1 hover:gap-2 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}>
          {position === 'left' && icon}
          {title}
          {position === 'right' && icon}
        </span>
      </button>
    </Link>
  </div>
  );
};

export default Button;
