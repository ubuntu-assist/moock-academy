"use client"

import React from 'react';
import { MoveRight } from 'lucide-react';

export default function CohortsPage() {
  return (
    <main className="flex-1 bg-white">
      <div className="flex-1">
        {/* Hero Section */}
        <div className="mx-auto max-w-[1368px] px-4 pt-28 md:pt-36 pb-10 w-full flex flex-col items-center justify-center xl:justify-between text-center xl:text-start xl:flex-row lg:gap-4 relative">
          <div className="bg-gradient-to-r from-yellow-50/50 to-transparent flex-1 flex flex-col sm:my-2 gap-4 max-w-[790px] lg:max-w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl lg:leading-[1.2] font-bold text-black">
              In 5 Years, We have had 10 Successful Cohorts
            </h1>
            <p className="w-full xl:max-w-[581px] text-sm md:text-base font-normal text-gray-700">
              Within 16 weeks, you are going to give you an immersive learning experience on what it takes to be a Blockchain Developer and we are not just going to develop your technical skills but also help build your soft skills to be able to compete in the global market.
            </p>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50 shadow py-2 h-14 w-max mx-auto xl:mx-0 mt-7 xl:mt-14 px-6 rounded-full border-2 ring-2 ring-amber-500 border-black bg-black text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all">
              Join The next Cohort 
              <MoveRight className="w-5 h-5 ml-2" />
            </button>
          </div>
          
          {/* Profile Images Circle */}
          <div className="w-[534px] h-[534px] scale-[0.6] sm:scale-75 md:scale-100 relative rounded-full sm:mt-7 md:mt-14 xl:mt-0">
            <div className="absolute w-full h-full animate-spin-slow">
              <div className="w-[112px] h-[112px] rounded-full border-2 border-dashed border-amber-500 bg-gradient-to-r from-yellow-50/50 to-transparent absolute -top-3 left-20 group hover:scale-110 transition-transform duration-300">
                <img alt="banner-img" width="4096" height="2731" className="w-full h-full object-cover rounded-full group-hover:shadow-xl" src="/media/b-1.webp"/>
              </div>
              <div className="w-[112px] h-[112px] rounded-full border-2 border-dashed border-amber-500 bg-gradient-to-r from-yellow-50/50 to-transparent absolute top-4 right-6 group hover:scale-110 transition-transform duration-300">
                <img alt="banner-img" width="4096" height="2731" className="w-full h-full object-cover rounded-full group-hover:shadow-xl" src="/media/b-2.webp"/>
              </div>
              <div className="w-[112px] h-[112px] rounded-full border-2 border-dashed border-amber-500 bg-gradient-to-r from-yellow-50/50 to-transparent absolute bottom-20 -right-4 group hover:scale-110 transition-transform duration-300">
                <img alt="banner-img" width="4096" height="2731" className="w-full h-full object-cover rounded-full group-hover:shadow-xl" src="/media/b-3.webp"/>
              </div>
              <div className="w-[112px] h-[112px] rounded-full border-2 border-dashed border-amber-500 bg-gradient-to-r from-yellow-50/50 to-transparent absolute -bottom-10 left-32 group hover:scale-110 transition-transform duration-300">
                <img alt="banner-img" width="4096" height="2532" className="w-full h-full object-cover rounded-full group-hover:shadow-xl" src="/media/b-1.webp"/>
              </div>
              <div className="w-[112px] h-[112px] rounded-full border-2 border-dashed border-amber-500 bg-gradient-to-r from-yellow-50/50 to-transparent absolute bottom-40 -left-16 group hover:scale-110 transition-transform duration-300">
                <img alt="banner-img" width="4096" height="2731" className="w-full h-full object-cover rounded-full group-hover:shadow-xl" src="/media/b-2.webp"/>
              </div>
            </div>
            <style jsx>{`
              @keyframes spin-slow {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
              .animate-spin-slow {
                animation: spin-slow 20s linear infinite;
              }
            `}</style>
          </div>
        </div>

        {/* Latest Cohort Section */}
        <div className="w-full mx-auto max-w-[1368px] px-4 flex flex-col-reverse xl:flex-row items-center my-20 gap-6 justify-between">
          <div className="flex-1 flex flex-col gap-6 max-w-[582px] w-full">
            <h2 className="text-2xl md:text-[32px] font-bold text-black">The Latest Cohort: Cohort X!</h2>
            <p className="text-base md:text-xl md:leading-8 max-w-[416px] text-gray-700">
              We are working on building sustainable Web3 economy in Africa through remote and onsite Web3 development training, supporting web3 developers and startups, and lowering barriers of entry into the Web3 ecosystem.
            </p>
            <div className="flex items-center mt-5">
              <button 
                type="button" 
                className="w-fit text-center text-xs md:text-sm lg:text-base text-black font-medium bg-gradient-to-b from-yellow-100/40 to-amber-50/20 rounded-full px-5 py-2.5 me-2 mb-2 border border-amber-200"
              >
                Online
              </button>
              <button 
                type="button" 
                className="w-fit text-center text-xs md:text-sm lg:text-base text-black font-medium bg-gradient-to-b from-yellow-100/40 to-amber-50/20 rounded-full px-5 py-2.5 me-2 mb-2 border border-amber-200"
              >
                Onsite
              </button>
            </div>
          </div>
          <div className="aspect-[1.2] w-full xl:max-w-[626px] xl:h-[383px] rounded-2xl bg-gradient-to-br from-yellow-100 to-amber-200">
            <img alt="" width="626" height="383" className="w-full h-full object-cover rounded-2xl" src="/media/img1.webp"/>
          </div>
        </div>

        {/* Center Image Section */}
        <div className="w-full mx-auto max-w-[1368px] px-4 flex items-center justify-center my-20">
          <div className="mx-auto max-w-[962px] flex items-center justify-center flex-col">
            <div className="w-full lg:w-[824px] bg-gradient-to-br from-yellow-100 to-amber-200 aspect-[1.3] rounded-2xl">
              <img alt="" width="824" height="824" className="w-full h-full object-cover rounded-2xl" src="/media/img2.webp"/>
            </div>
            <p className="text-center text-xl font-bold mb-7 mt-2 text-black">
              The intensive onsite web3 training going on at the facility for the 9th cohort
            </p>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50 shadow py-2 h-14 w-max mx-auto px-6 rounded-full border-2 ring-2 ring-amber-500 border-black bg-black text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all">
              Join The next Cohort 
              <MoveRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* How to Join Section */}
        <div className="w-full mx-auto max-w-[1368px] px-4 flex flex-col my-20 md:my-44 gap-6">
          <div className="flex items-center justify-center flex-col w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl lg:leading-[1.2] text-center font-bold text-black">
              How Can I Become Part of a Cohort?
            </h1>
            <p className="text-center text-base md:text-xl max-w-[470px] mt-2 text-gray-700">
              All you need to do is APPLY. We give every application the same time and consideration.
            </p>
          </div>
          
          <div className="flex flex-col-reverse xl:flex-row items-center gap-20 justify-between mt-4 bg-gradient-to-r from-yellow-50/50 to-transparent rounded-2xl p-8">
            <div className="flex flex-col pl-6 pr-2">
              {/* Step 1 */}
              <div className="flex flex-col w-full md:w-[576px] relative">
                <div className="w-[51.6px] h-[51.6px] rounded-full border-x-2 ring-2 ring-amber-500 border-amber-400 absolute -top-5 -left-5 bg-gradient-to-r from-yellow-200 to-amber-300 backdrop-blur-sm flex items-center justify-center text-[28px] text-black font-bold">
                  1
                </div>
                <div className="w-full h-max p-6 bg-gradient-to-b from-yellow-100 to-amber-50 rounded-xl border-2 ring-2 ring-amber-200 border-amber-100">
                  <h3 className="text-lg md:text-2xl mb-2 font-bold text-black">Our Telegram Community</h3>
                  <p className="text-sm md:text-base font-normal text-gray-700">
                    Our telegram community is open to all. You will get updates and news as regarding the next cohort, as well as connecting with past alumni.
                  </p>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50 shadow py-2 h-12 w-max mx-auto px-6 mt-6 rounded-full border-2 ring-2 ring-amber-500 border-black bg-black text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all">
                    Join Telegram 
                    <MoveRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>

              {/* Connector */}
              <img alt="" width="455" height="105" className="w-[451px] h-max object-contain ml-auto select-none -mr-2" src="/media/part.svg"/>

              {/* Step 2 */}
              <div className="flex flex-col w-full md:w-[576px] relative">
                <div className="w-[51.6px] h-[51.6px] rounded-full border-x-2 ring-2 ring-amber-500 border-amber-400 absolute -top-5 -left-5 bg-gradient-to-r from-yellow-200 to-amber-300 backdrop-blur-sm flex items-center justify-center text-[28px] text-black font-bold">
                  2
                </div>
                <div className="w-full h-max p-6 bg-gradient-to-b from-yellow-100 to-amber-50 rounded-xl border-2 ring-2 ring-amber-200 border-amber-100">
                  <h3 className="text-lg md:text-2xl mb-2 font-bold text-black">Application Phase</h3>
                  <p className="text-sm md:text-base font-normal text-gray-700">
                    Submit your application when applications open. We review each application carefully and give equal consideration to all applicants.
                  </p>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50 shadow py-2 h-12 w-max mx-auto px-6 mt-6 rounded-full border-2 ring-2 ring-amber-500 border-black bg-black text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all">
                    Join Waitlist 
                    <MoveRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>

              {/* Connector */}
              <img alt="" width="455" height="105" className="w-[451px] h-max object-contain ml-auto select-none -mr-2" src="/media/part.svg"/>

              {/* Step 3 */}
              <div className="flex flex-col w-full md:w-[576px] relative">
                <div className="w-[51.6px] h-[51.6px] rounded-full border-x-2 ring-2 ring-amber-500 border-amber-400 absolute -top-5 -left-5 bg-gradient-to-r from-yellow-200 to-amber-300 backdrop-blur-sm flex items-center justify-center text-[28px] text-black font-bold">
                  3
                </div>
                <div className="w-full h-max p-6 bg-gradient-to-b from-yellow-100 to-amber-50 rounded-xl border-2 ring-2 ring-amber-200 border-amber-100">
                  <h3 className="text-lg md:text-2xl mb-2 font-bold text-black">Interview Phase</h3>
                  <p className="text-sm md:text-base font-normal text-gray-700">
                    Selected candidates will be invited for an interview to assess their motivation, goals, and fit for the program.
                  </p>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50 shadow py-2 h-12 w-max mx-auto px-6 mt-6 rounded-full border-2 ring-2 ring-amber-500 border-black bg-black text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all">
                    Join Waitlist 
                    <MoveRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="w-full h-auto md:w-[548px] md:h-[731px] bg-gradient-to-br from-yellow-100 to-amber-200 rounded-2xl">
              <img alt="" width="548" height="731" className="w-full h-full object-cover rounded-2xl" src="/media/img3.webp"/>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="w-full lg:py-24 py-20 bg-gradient-to-r mb-28 from-transparent to-amber-50">
          <div className="mx-auto max-w-[1368px] w-full lg:px-16 md:px-8 px-4">
            <div className="w-full flex md:flex-row flex-col gap-10 lg:gap-0 justify-between items-center">
              <div className="flex flex-col lg:w-[50%] gap-2">
                <h1 className="lg:text-4xl text-3xl font-bold lg:w-[70%] text-black">
                  Ready to join the next cohort of learners?
                </h1>
                <p className="text-gray-700">
                  Graduates from our program have gone to work with global brands such as Aavegotchi, Consensys, Nahmii, Nethermind, Polygon and lots more. So be rest assured that you are going to have the best learning experience with our program.
                </p>
              </div>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50 shadow h-9 rounded-full px-12 py-6 border-2 ring-2 ring-black border-amber-500 bg-gradient-to-r from-yellow-400 to-amber-500 text-black capitalize hover:bg-black hover:text-amber-400 transition-all">
                Join the next cohort 
                <MoveRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}