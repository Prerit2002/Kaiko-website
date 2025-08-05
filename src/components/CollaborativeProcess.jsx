import React from "react";

const steps = ["First Date", "Ideations", "Design", "Fine-Tuning", "Launch"];

const CollaborativeDesignProcess = () => {
  return (
    <section className=" flex flex-col items-center w-full space-y-3">
      {/* Title */}
      <div className="bg-blue-600 rounded-xl md:rounded-3xl w-full px-6 py-8 text-center">
        <h2 className="text-3xl md:text-6xl font-bold text-black">
          A COLLABORATIVE <br className="md:hidden" /> DESIGN PROCESS
        </h2>
      </div>

      {/* Steps */}
      <div className=" grid grid-cols-5 gap-1 md:gap-4 w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-blue-600 text-black font-bold text-center py-2 px-1 md:py-4 md:px-2 rounded-md md:rounded-2xl text-[8px] md:text-3xl"
          >
            {step}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollaborativeDesignProcess;
