"use client";

import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="p-5 flex flex-col gap-y-3 items-center justify-between">
      <div>
        <Image
          src={"/main-logo.png"}
          alt="SHORTNET."
          width={92}
          height={32}
          className="w-36"
          unoptimized
        />
      </div>
      <div className="flex flex-col gap-y-2 text-center p-3 md:px-4 py-6 bg-accent/30 rounded-4xl ">
        <h1 className="text-3xl bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent font-extrabold">
          SHORTNET. - Your Own URL Shortner
        </h1>
        <p className="text-xl font-medium text-primary">
          Shorten Your URLs and Share Them With Your Collegues
        </p>
      </div>
    </div>
  );
};
