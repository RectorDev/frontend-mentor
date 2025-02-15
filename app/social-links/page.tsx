import Image from "next/image";
import React from "react";
import SocialButton from "./SocialButton";

const socials: string[] = ["GitHub", "Frontend Mentor", "Linkedin", "Twitter", "Instagram"];
export default function page() {
  return (
    <div className="min-h-screen bg-[#141414] flex justify-center items-center">
      <div className="bg-[#1f1f1f] min-w-96 max-sm:p-8  max-w-2xl p-10 font-inter text-white flex flex-col  items-center rounded-xl">
        <figure className="flex items-center justify-center flex-col">
          <Image className="rounded-full m-4" src={"/social-links/images/avatar-jessica.jpeg"} width={95} height={100} alt="profile picture" />
          <figcaption className="mt-2 text-2xl">Jessica Randall</figcaption>
          <p className="text-[#c4f82a] mt-2 text-sm font-semibold">London, United Kingdom</p>
          <q className="text-sm mt-6">Front-end developer and avid reader.</q>
        </figure>

        <ul className="flex flex-col gap-4 w-full mt-7">
          {socials.map((item) => (
            <li className="w-full" key={item}>
              <SocialButton title={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
