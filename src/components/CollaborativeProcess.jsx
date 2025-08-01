import React from "react";

const steps = ["First Date", "Ideations", "Design", "Fine-Tuning", "Launch"];

const CollaborativeDesignProcess = () => {
  return (
    <section className=" flex flex-col items-center w-full">
      {/* Title */}
      <div className="bg-blue-600 rounded-3xl w-full px-6 py-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          A Collaborative Design Process
        </h2>
      </div>

      {/* Steps */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-blue-600 text-black font-bold text-center py-4 px-2 rounded-xl text-sm sm:text-base"
          >
            {step}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollaborativeDesignProcess;
