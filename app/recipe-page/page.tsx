import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="flex sm:items-center justify-center min-h-screen bg-[#f3e5d8]  text-zinc-600 font-outfit">
      <div className="max-w-[720px] bg-white sm:p-10 rounded-2xl sm:m-28">
        <Image className="object-contain sm:rounded-xl" src={"/recipe-page/images/image-omelette.jpeg"} alt="food" width={720} height={260} />
        <div className="max-sm:px-10">
          <h1 className="font-youngSerif text-4xl mt-7">Simple Omelette Recipe</h1>
          <p className="font-outfit mt-5">
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables,
            or meats.
          </p>
          {/* prep time */}
          <ul className="bg-[#fff7fc] mt-5 padding-sm rounded-xl">
            <h2 className="text-[#5d243b] font-semibold text-lg"> Preparation time</h2>
            <li className="marker:text-[#5d243b] font-outfit list-disc ml-5 my-1.5 marker:text-xs">
              <span className="relative left-4">
                <span className="relative font-semibold"> Total</span>: Approximately 10 minutes
              </span>
            </li>
            <li className="marker:text-[#5d243b] font-outfit list-disc ml-5 my-1.5 marker:text-xs">
              <span className="relative left-4">
                <span className="font-semibold "> Preparation</span>: 5 minutes
              </span>
            </li>
            <li className="marker:text-[#5d243b] font-outfit list-disc ml-5 my-1.5 marker:text-xs">
              <span className="relative left-4">
                <span className="font-semibold "> Cooking</span>: 5 minutes
              </span>
            </li>
          </ul>
          <h2 className="font-youngSerif text-[#874933]  text-3xl mt-7">Ingredients</h2>
          <ul className="list-disc px-6 my-4">
            <li className="marker:text-[#874933] marker:text-xs my-1.5">
              {" "}
              <span className="relative left-4">2-3 large eggs</span>
            </li>
            <li className="marker:text-[#874933] marker:text-xs my-1.5">
              {" "}
              <span className="relative left-4">Salt, to taste</span>
            </li>
            <li className="marker:text-[#874933] marker:text-xs my-1.5">
              {" "}
              <span className="relative left-4">Pepper, to taste</span>
            </li>
            <li className="marker:text-[#874933] marker:text-xs my-1.5">
              {" "}
              <span className="relative left-4">1 tablespoon of butter or oil</span>
            </li>
            <li className="marker:text-[#874933] marker:text-xs my-1.5">
              {" "}
              <span className="relative left-4">Optional fillings: cheese, diced vegetables, cooked meats, herbs</span>
            </li>
          </ul>

          <hr className="my-6" />
          <h2 className="text-[#874933] font-youngSerif text-3xl py-2">Instructions</h2>
          <ol className="list-decimal font-outfit p-2 my-2">
            <li className="font-sans font-semibold ml-5 pr-3 marker:text-[#874933] my-2.5">
              <span className="relative left-4 font-outfit font-normal ">
                <span className="font-semibold">Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon
                of water or milk for a fluffier texture.
              </span>
            </li>
            <li className="font-sans font-semibold ml-5 pr-3 marker:text-[#874933] my-2.5">
              <span className="relative left-4 font-outfit font-normal ">
                <span className="font-semibold">Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.
              </span>
            </li>
            <li className="font-sans font-semibold ml-5 pr-3 marker:text-[#874933] my-2.5">
              <span className="relative left-4 font-outfit font-normal ">
                <span className="font-semibold">Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the
                surface.
              </span>
            </li>
            <li className="font-sans font-semibold ml-5 pr-3 marker:text-[#874933] my-2.5">
              <span className="relative left-4 font-outfit font-normal ">
                <span className="font-semibold">Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your
                chosen fillings over one half of the omelette.
              </span>
            </li>
            <li className="font-sans font-semibold ml-5 pr-3 marker:text-[#874933] my-2.5">
              <span className="relative left-4 font-outfit font-normal ">
                <span className="font-semibold">Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for
                another minute, then slide it onto a plate.
              </span>
            </li>
            <li className="font-sans font-semibold ml-5 pr-3 marker:text-[#874933] my-2.5">
              <span className="relative left-4 font-outfit font-normal "><span className="font-semibold">Enjoy:</span> Serve hot, with additional salt and pepper if needed.</span>
            </li>
          </ol>
          <hr className="my-6" />
          <h2 className="font-youngSerif text-[#874933] text-3xl">Nutrition</h2>
          <p className="mt-4 py-2"> The table below shows nutritional values per serving without the additional fillings.</p>
          <table className="w-full my-2 ">
            <tbody className="">
              <tr className="border-b ">
                <td className=" p-2 ">Calories</td>
                <td className="p-2 text-[#874933] font-semibold">227kcal</td>
              </tr>
              <tr className="border-b ">
                <td className="p-2">Protein</td>
                <td className="p-2 text-[#874933] font-semibold">20g</td>
              </tr>
              <tr className="border-b ">
                <td className="p-2">Fat</td>
                <td className="p-2 text-[#874933] font-semibold">22g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default page;
