import React from "react";
import "./HeroSection.css";

const About = () => {
  return (
    <div className="section-bg mt-4">
      <div class="container mx-auto px-4 py-16 flex flex-wrap">
        <div class="w-full md:w-1/2 pr-4">
          <h2 class="text-3xl font-bold mb-4">About Us</h2>
          <h3 class="text-xl text-gray-700 mb-4">
            We truly believe that Technology makes it possible, but it's people
            who make it happen
          </h3>
          <div class="space-y-4">
            <h4 class="text-lg font-medium text-gray-700 mb-2">Our Mission</h4>
            <p class="text-gray-700 leading-loose">
              To offer our clients specialized talent fulfilment solutions at
              every stage of development.
            </p>
            <h4 class="text-lg font-medium text-gray-700 mb-2">Our Vision</h4>
            <p class="text-gray-700 leading-loose">
              Focused on success, Our vision is to become “the talent partner of
              choice” to every client whom we work with.
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 pl-4">
          <img
            src="./dashboard3.jpeg"
            alt="About Us Image"
            // class="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

// <div className="section-bg mt-4">
//       <h2 className="text-xl font-bold text-center">WHO WE ARE</h2>
//       <p className="text-center">Let us guide you on your next</p>

//       <div className="about-section flex">
//         <div className="about-info">
//           <h2>Our Vision, Our Mission</h2>
//           <p>
//             We truly believe that Technology makes it possible, but it's people
//             who make it happen
//           </p>
//           <ul>
//             <li>
//               <h3>Our Vision:</h3>
//               <p>
//                 Focused on success, Our vision is to become “the talent partner
//                 of choice” to every client whom we work with.
//               </p>
//             </li>
//             <li>
//               <h3>Our Mission</h3>
//               <p>
//                 To offer our clients specialized talent fulfilment solutions at
//                 every stage of development.
//               </p>
//             </li>
//           </ul>
//         </div>
//         <div className="graphs">
//           <img src="./lastone.png" alt="" className="w-96 h-96" />
//         </div>
//       </div>
//     </div>
