import React from "react";

const Newabout = () => {
  return (
    <>
      <div class="container mx-auto px-4 py-16 flex flex-wrap">
        <div class="w-full md:w-1/2 pr-4">
          <h2 class="text-3xl font-bold mb-4">About Us</h2>
          <h3 class="text-xl text-gray-700 mb-4">
            A catchy subheading that grabs attention
          </h3>
          <p class="text-gray-700 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod, leo eget vulputate tincidunt, diam odio vehicula risus,
            eget auctor odio lorem at laoreet. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
        <div class="w-full md:w-1/2 pl-4">
          <img
            src="./lastone.png"
            alt="About Us Image"
            class="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};
export default Newabout;
