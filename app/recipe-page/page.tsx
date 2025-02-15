import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="flex sm:items-center justify-center min-h-screen bg-[#f3e5d8]  text-zinc-800 font-outfit">
      <div className="max-w-[720px] bg-white sm:p-10 rounded-2xl">
        <Image className="object-contain sm:rounded-xl" src={"/recipe-page/images/image-omelette.jpeg"} alt="food" width={720} height={260} />
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

        <hr />
        <h2 className="text-[#874933] font-youngSerif">Instructions</h2>
        <ol className="list-decimal font-outfit">
          <li className="font-sans font-semibold ml-5 pr-3 marker:text-[#874933]">
            <span className="relative left-4 font-outfit font-normal ">
              Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
            </span>
          </li>
          <li className="font-sans font-semibold ml-5 pr-3 marker:text-[#874933]">
            <span className="relative left-4 font-outfit font-normal ">Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.</span>
          </li>
          <li className="font-sans font-semibold ml-5 pr-3 marker:text-[#874933]">
            <span className="relative left-4 font-outfit font-normal ">
              Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </span>
          </li>
          <li className="font-sans font-semibold ml-5 pr-3 marker:text-[#874933]">
            <span className="relative left-4 font-outfit font-normal ">
              Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the
              omelette.
            </span>
          </li>
          <li className="font-sans font-semibold ml-5 pr-3 marker:text-[#874933]">
            <span className="relative left-4 font-outfit font-normal ">
              Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
            </span>
          </li>
          <li className="font-sans font-semibold ml-5 pr-3 marker:text-[#874933]">
            <span className="relative left-4 font-outfit font-normal ">Enjoy: Serve hot, with additional salt and pepper if needed.</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default page;
