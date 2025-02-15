import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#f3e5d8]  text-zinc-800 font-outfit">
      <div className="max-w-[480px] bg-white sm:p-10 rounded-2xl">
        <Image className="object-fill sm:rounded-xl" src={"/recipe-page/images/image-omelette.jpeg"} alt="food" width={480} height={260} />
        <h1 className="font-youngSerif">Simple Omelette Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables,
          or meats.
        </p>
        {/* prep time */}
        <ul className="bg-[#fff7fc] ">
          <h2> Preparation time</h2>
          <li className="marker:text-[#5d243b] font-outfit list-disc ml-5">
            <span className="relative left-3">
              <span className="relative font-semibold"> Total</span>: Approximately 10 minutes
            </span>
          </li>
          <li className="marker:text-[#5d243b] font-outfit list-disc ml-5">
            <span className="relative left-3">
              <span className="font-semibold "> Preparation</span>: 5 minutes
            </span>
          </li>
          <li className="marker:text-[#5d243b] font-outfit list-disc ml-5">
            <span className="relative left-3">
              <span className="font-semibold "> Cooking</span>: 5 minutes
            </span>
          </li>
        </ul>
        <h2 className="font-youngSerif text-[#874933] list-disc">Ingredients</h2>
        <ul>
          <li className="marker:text-[#874933]">
            {" "}
            <span>2-3 large eggs</span>
          </li>
          <li className="marker:text-[#874933]">
            {" "}
            <span>Salt, to taste</span>
          </li>
          <li className="marker:text-[#874933]">
            {" "}
            <span>Pepper, to taste</span>
          </li>
          <li className="marker:text-[#874933]">
            {" "}
            <span>1 tablespoon of butter or oil</span>
          </li>
          <li className="marker:text-[#874933]">
            {" "}
            <span>Optional fillings: cheese, diced vegetables, cooked meats, herbs</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default page;
