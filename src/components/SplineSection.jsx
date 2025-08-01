// // import React from "react";

// // export default function SplineSection() {
// //   return (
// //     <section className="relative w-full h-[500px] bg-black overflow-hidden rounded-xl">
// //       {/* Spline Iframe */}
// //       <iframe
// //         src="https://my.spline.design/untitled-bae1056a6b8f8ce302b10c1a49d120cf/" // sample scene
// //         frameBorder="0"
// //         className="absolute top-0 left-0 w-full h-full"
// //         title="Spline Animation"
// //       ></iframe>

// //       {/* Curved Text */}
// //       <svg
// //         className="absolute inset-0 w-full h-full pointer-events-none"
// //         viewBox="0 0 1200 500"
// //         xmlns="http://www.w3.org/2000/svg"
// //       >
// //         <path
// //           id="curve"
// //           d="M 100 400 Q 600 100 1100 400"
// //           fill="transparent"
// //         />
// //         <text
// //           fill="#ffe600"
// //           fontSize="30"
// //           fontFamily="Space Grotesk, sans-serif"
// //           fontWeight="500"
// //         >
// //           <textPath href="#curve" startOffset="0%">
// //             We're the fun friends your brand didn't know it needed
// //           </textPath>
// //         </text>
// //       </svg>
// //     </section>
// //   );
// // }


// import React from "react";
// import Main from "../assets/Main.png";
// import MainMobile from "../assets/MainMobile.png";

// export default function SplineSection() {
//   return (
//     <section className="relative w-full min-h-[600px] p-6 bg-black  rounded-xl">
//       {/* Desktop Image */}
//       <img
//         src={Main}
//         alt="Visual Desktop"
//         className="hidden md:block absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center p-2"
//       />

//       {/* Mobile Image */}
    //   <img
    //     src={MainMobile}
    //     alt="Visual Mobile"
    //     className="block md:hidden absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center"
    //   />
//     </section>
//   );
// }


import React from "react";
import HeroImage from "../assets/Vector1.png"; // Replace with your actual image file
import MainMobile from "../assets/MainMobile.png";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden rounded-xl bg-black ">
      {/* Background Image */}
      <img
        src={MainMobile}
        alt="Visual Mobile"
        className="block md:hidden absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center  "
        />
      <img
        src={HeroImage}
        alt="Hero Background"
        className="hidden md:block absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center p-2"
      />

<svg
  className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
  viewBox="0 0 1372 426"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    id="textPath"
    d="M43.3 411.5C105.4 514.3 392.7 461.3 529.1 377.8C665.4 294.4 745 253.1 1045.6 288.4C1346.2 323.7 1530.1 177.1 1223.1 80.9C916.1 -15.4 452.5 -24.4 238.6 63.9C52.2 139.1 -18.9 308.8 43.3 411.5Z"
    fill="transparent"
  />
  <text
    fill="#ffe600"
    fontSize="32"
    fontFamily="Space Grotesk, sans-serif"
    fontWeight="500"
  >
    <textPath href="#textPath" startOffset="15%">
      We're the fun friends your brand didn't know it needed
    </textPath>
  </text>
</svg>


    </section>
  );
}

