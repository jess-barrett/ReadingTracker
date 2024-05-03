import React from "react";
import library from "../assets/images/library3.png";

const Hero = () => {
  return (
    <>
      <section class="h-screen flex bg-white">
        <div class="w-full m-4">
          <div class="rounded-md items-center">
            <div className="grid grid-cols-12 grid-rows-8">
              <img
                className="rounded-md w-full col-span-full row-span-full mb-4"
                src={library}
                alt="Library"
              />
              <div className="flex items-center justify-center mr-12 mt-6 col-start-9 col-span-2 row-start-1 row-end-5 opacity-0 hover:opacity-100">
                <button className="bg-orange-500 hover:bg-orange-400 text-white text-2xl font-bold text-center px-4 py-2 rounded-md">
                  My Shelf
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
