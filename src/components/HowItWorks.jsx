import React from "react";

const HowItWorks = () => {
  const text = "HOW IT WORKS "; // Text to rotate

  return (
    <div>
      <section id="how-it-works" className="text-white bg-black py-12">
        {/* Rotating text circle */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          <div className="absolute inset-0 animate-spin-fast">
            {text.split("").map((char, index) => (
              <span
                key={index}
                className="absolute left-1/2 top-1/2 transform origin-[0_80px] text-3xl font-bold text-black"
                style={{
                  transform: `rotate(${index * (360 / text.length)}deg) translate(-50%, -50%)`, // Center the text
                  WebkitTextStroke: "1px white", // White outline for text
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Title and instructions */}
        <h2 className="text-5xl font-bold text-center">How It Works</h2>
        <div className="flex justify-center items-center mt-8">
          <ul className="text-2xl space-y-4">
            <li>1. Brush off Excess Dirt</li>
            <li>2. Use our Shoe Superior Solution</li>
            <li>3. Scrub those Shoes Clean</li>
            <li>4. Remove Residue</li>
            <li>5. Dry Shoes</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
