import React from "react";
import bookshelf from "../assets/images/bookshelf.jpg";
import library3 from "../assets/images/library3.png";

const Hero = () => {
  return (
    <>
      <section class="h-screen flex bg-white">
        <div class="w-full m-4">
          <div class="rounded-md items-center">
            <div className="h-3/4">
              <img className="rounded-md w-full" src={library3} alt="Bookshelf"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
