"use client";

import { useState, useEffect } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  // Sample testimonials data for demonstration
  const sampleTestimonials = testimonials.length > 0 ? testimonials : [
    {
      quote: "This platform transformed how we approach Web3 development. The learning experience was exceptional.",
      name: "Sarah Johnson",
      designation: "Blockchain Developer",
      src: "/api/placeholder/400/500"
    },
    {
      quote: "The community support and practical approach made complex concepts easy to understand and implement.",
      name: "Michael Chen",
      designation: "DeFi Specialist",
      src: "/api/placeholder/400/501"
    },
    {
      quote: "From zero to hero in smart contract development. The mentorship program is world-class.",
      name: "Aisha Okonkwo",
      designation: "Smart Contract Engineer",
      src: "/api/placeholder/400/502"
    }
  ];

  return (
    <div className="mx-auto max-w-sm px-4 py-4 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            {sampleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.name + index}
                className={`absolute inset-0 origin-bottom transition-all duration-500 ease-in-out ${
                  isActive(index) 
                    ? 'opacity-100 scale-100 z-40 rotate-0' 
                    : 'opacity-70 scale-95 z-30 rotate-1'
                }`}
                style={{
                  transform: isActive(index) 
                    ? 'translateZ(0px) rotateY(0deg) rotateX(0deg)' 
                    : `translateZ(-100px) rotateY(${randomRotateY()}deg)`
                }}
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center border-2 border-amber-300"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <div
            key={active}
            className="transition-all duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-bold text-black">
              {sampleTestimonials[active].name}
            </h3>
            <p className="text-sm text-amber-600 font-medium">
              {sampleTestimonials[active].designation}
            </p>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              {sampleTestimonials[active].quote.split(" ").map((word, index) => (
                <span
                  key={index}
                  className="inline-block transition-all duration-200 ease-in-out"
                  style={{
                    animationDelay: `${0.02 * index}s`
                  }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </p>
          </div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 border border-amber-300 hover:bg-amber-200 transition-all duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-black transition-transform duration-300 group-hover:rotate-12"
              >
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 border border-amber-500 hover:bg-amber-500 transition-all duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-black transition-transform duration-300 group-hover:-rotate-12"
              >
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};