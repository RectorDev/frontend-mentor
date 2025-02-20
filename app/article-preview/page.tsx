"use client";
import Image from "next/image";
import { useState } from "react";
import Share from "@/public/article-preview/images/icon-share.svg";

export default function page() {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className="min-h-screen bg-[#edf2f8] flex items-center justify-center font-manrope">
      <div className="bg-white rounded-lg max-md:flex-col max-md:max-w-[450px] flex  md:max-w-[820px] text-[#49556b] font-manrope">
        <Image className="md:rounded-s-lg max-md:rounded-b-lg"  src={"/article-preview/images/drawers.jpg"} width={450} height={120} alt="article image" />
        <div className="md:p-12 p-6">
          <h2 className="text-[#49556b] font-semibold text-2xl">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h2>
          <p className="pt-6  text-[#59657a] text-sm ">
            {" "}
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel
            complete.
          </p>
          <div className="flex mt-10">
            <div className="flex justify-between w-full items-center">
              <div className="flex gap-5">
                <Image className="object-contain rounded-full" src={"/article-preview/images/avatar-michelle.jpg"} alt="pfp" width={50} height={32} />
                <div className="flex-col flex justify-between">
                  <p className="font-semibold text-sm">Michelle Appleton</p>
                  <p className="text-sm  text-[#5f6a7b]">28 Jun 2020</p>
                </div>
              </div>
              <div className="relative ">
                <div
                  onClick={() => {
                    setIsActive(!isActive);
                  }}
                  className={`p-3 h-fit rounded-full cursor-pointer ${isActive ? "bg-[#49556b] " : " "}`}
                >
                  <Image alt="share" src={Share} className={`${isActive ? " filter-white" : "filter-dark"}`} />
                </div>
                {isActive && (
                  <span className="absolute flex justify-center uppercase font-thin tracking-[0.25em] text-sm text-[#c5d9e9] items-center p-5 w-52 gap-4 pos-center -top-[140%] cursor-pointer before:border-[15px]  before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-[#5f6a7b_#0000_#0000_#0000]  bg-[#5f6a7b]">
                    <p className="">share</p>
                    <Image src={"/article-preview/images/icon-pinterest.svg"} width={24} height={24} alt="pinterest" />
                    <Image src={"/article-preview/images/icon-twitter.svg"} width={24} height={24} alt="twitter" />
                    <Image src={"/article-preview/images/icon-facebook.svg"} width={24} height={24} alt="facebook" />
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
