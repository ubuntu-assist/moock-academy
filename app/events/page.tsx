"use client"

import React from 'react';

export default function EventsPage() {
  // Countdown functionality
  React.useEffect(() => {
    // Set the target date (September 5, 2025 - adjust as needed)
    const targetDate = new Date('2025-09-05T00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minsElement = document.getElementById('mins');
        const secsElement = document.getElementById('secs');
        
        if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
        if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
        if (minsElement) minsElement.textContent = minutes.toString().padStart(2, '0');
        if (secsElement) secsElement.textContent = seconds.toString().padStart(2, '0');
      } else {
        // Event has passed
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minsElement = document.getElementById('mins');
        const secsElement = document.getElementById('secs');
        
        if (daysElement) daysElement.textContent = '00';
        if (hoursElement) hoursElement.textContent = '00';
        if (minsElement) minsElement.textContent = '00';
        if (secsElement) secsElement.textContent = '00';
      }
    };
    
    // Update immediately and then every second
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex-1 min-h-screen flex flex-col pt-20 md:pt-24 bg-white">
      <div className="mx-auto max-w-[1368px] px-4 flex flex-col w-full">
        <section className="grid md:grid-cols-2 lg:h-[85vh] md:h-[60vh] h-auto pt-12 md:pt-0 w-full relative gap-10 md:gap-0">
          <div className="w-full flex flex-col justify-center items-center md:items-start md:gap-3 gap-4 lg:px-10 md:px-6 px-2">
            <h1 className="font-semibold leading-tight lg:text-5xl md:text-4xl text-center md:text-start text-3xl text-black">
              The Web3 Lagos Conference
            </h1>
            
            {/* Countdown Timer - Updated with brand colors */}
            <div className="flex items-center gap-4 my-6 justify-center md:justify-start">
              <div className="bg-amber-100 border border-amber-300 rounded-2xl px-6 py-4 text-center min-w-[80px]">
                <div className="text-3xl font-bold text-black" id="days">00</div>
                <div className="text-amber-600 text-sm font-medium">Days</div>
              </div>
              <div className="text-2xl font-bold text-amber-500">•</div>
              <div className="bg-amber-100 border border-amber-300 rounded-2xl px-6 py-4 text-center min-w-[80px]">
                <div className="text-3xl font-bold text-black" id="hours">00</div>
                <div className="text-amber-600 text-sm font-medium">Hours</div>
              </div>
              <div className="text-2xl font-bold text-amber-500">•</div>
              <div className="bg-amber-100 border border-amber-300 rounded-2xl px-6 py-4 text-center min-w-[80px]">
                <div className="text-3xl font-bold text-black" id="mins">00</div>
                <div className="text-amber-600 text-sm font-medium">Mins</div>
              </div>
              <div className="text-2xl font-bold text-amber-500">•</div>
              <div className="bg-amber-100 border border-amber-300 rounded-2xl px-6 py-4 text-center min-w-[80px]">
                <div className="text-3xl font-bold text-black" id="secs">00</div>
                <div className="text-amber-600 text-sm font-medium">Secs</div>
              </div>
            </div>
            
            <h2 className="text-black font-medium text-2xl">Happening live at</h2>
            
            <p className="flex gap-2 items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-5 h-5 text-amber-500">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              The Zone, Gbagada, Lagos State.
            </p>
            
            <p className="flex gap-2 items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-5 h-5 text-amber-500">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              5th - 7th, September 2025
            </p>
            
            <div className="mt-4 hidden md:flex lg:flex-row md:flex-col items-center lg:gap-8 gap-4">
              <a href="https://event.web3bridge.com" className="inline-block">
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 rounded-full px-12 py-6 border-2 border-amber-400 bg-amber-400 text-black hover:bg-amber-500 hover:border-amber-500 font-semibold">
                  Register for Event 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right w-5 h-5 ml-2">
                    <path d="M18 8L22 12L18 16"></path>
                    <path d="M2 12H22"></path>
                  </svg>
                </button>
              </a>
              <a href="https://forms.gle/YGqRUT93fE6qA2jK7" className="inline-block">
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 rounded-full px-12 py-6 border-2 border-black bg-white text-black hover:bg-gray-50">
                  Volunteer
                </button>
              </a>
            </div>
          </div>
          
          <div className="w-full md:h-full flex flex-col md:flex-row md:justify-end md:items-end items-center justify-center gap-5 md:gap-0">
            <div className="w-[80%] h-[85%] relative md:before:w-[85%] before:w-full lg:before:h-full md:before:h-[70%] before:h-full before:border-2 before:border-amber-400 before:absolute md:before:-top-8 before:-top-4 md:before:-left-2 before:-left-4 before:-z-10 before:rounded-lg">
              <img 
                alt="Web3 Lagos Conference Event" 
                fetchPriority="high" 
                width="676" 
                height="742" 
                decoding="async" 
                className="w-full lg:h-full md:h-auto h-full lg:object-contain md:object-fill object-contain" 
                src="/media/event.webp"
              />
            </div>
            
            <div className="my-4 md:hidden flex flex-col items-center gap-6">
              <a href="https://event.web3bridge.com" className="inline-block">
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 rounded-full px-12 py-6 border-2 border-amber-400 bg-amber-400 text-black hover:bg-amber-500 hover:border-amber-500 font-semibold">
                  Register for Event 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right w-5 h-5 ml-2">
                    <path d="M18 8L22 12L18 16"></path>
                    <path d="M2 12H22"></path>
                  </svg>
                </button>
              </a>
              <a href="https://forms.gle/YGqRUT93fE6qA2jK7" className="inline-block">
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 rounded-full px-12 py-6 border-2 border-black bg-white text-black hover:bg-gray-50">
                  Volunteer
                </button>
              </a>
            </div>
          </div>
          
          {/* Decorative shapes - Updated with brand colors */}
          <div className="absolute top-3 md:right-[15%] right-1 w-8 h-8 bg-amber-400 rounded-full opacity-80"></div>
          <div className="absolute md:top-[20%] top-[35%] md:right-[46%] right-3 w-6 h-6 bg-black rounded-full opacity-60"></div>
          <div className="absolute md:top-[3%] top-0 left-[30%] w-10 h-10 border-2 border-amber-400 rounded-full opacity-70"></div>
          <div className="absolute top-[5%] md:left-10 left-0 w-8 h-8 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full opacity-80"></div>
        </section>
        
        <section className="w-full flex flex-col items-center lg:gap-16 gap-8 lg:my-44 md:my-20 my-28 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-2xl lg:px-16 md:px-8 px-4 py-16">
          <div className="w-full flex flex-col gap-2">
            <h2 className="font-semibold lg:text-5xl text-3xl text-center capitalize text-black">Upcoming Events</h2>
            <p className="text-center text-gray-600 text-xl font-light">A number of web3 events you may love to attend</p>
          </div>
          
          {/* Event Cards Grid - Updated with brand colors */}
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-8">
            
            {/* Event Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-amber-200">
              <div className="relative h-48 bg-gradient-to-br from-amber-400 to-amber-500">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-black border border-amber-300">
                  Featured
                </div>
                <div className="absolute bottom-4 left-4 text-black">
                  <h3 className="text-xl font-bold">Web3 Workshop</h3>
                  <p className="text-black/80">Hands-on Learning</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar text-amber-500">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  October 15, 2025
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-amber-500">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Victoria Island, Lagos
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Join us for an intensive hands-on workshop covering smart contract development, DeFi protocols, and Web3 integration techniques.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-black">Free</span>
                  <button className="bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 rounded-full text-sm font-medium transition-colors border border-amber-500">
                    Register
                  </button>
                </div>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-amber-200">
              <div className="relative h-48 bg-gradient-to-br from-black to-gray-800">
                <div className="absolute inset-0 bg-amber-400/10"></div>
                <div className="absolute top-4 right-4 bg-amber-400/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-black border border-amber-500">
                  Virtual
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">DeFi Summit</h3>
                  <p className="text-amber-200">Online Conference</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar text-amber-500">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  November 8-9, 2025
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe text-amber-500">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                  Online Event
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Two-day virtual summit featuring industry leaders discussing the future of decentralized finance and emerging protocols.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-black">₦5,000</span>
                  <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors border border-gray-700">
                    Register
                  </button>
                </div>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-amber-200">
              <div className="relative h-48 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500">
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-black border border-amber-400">
                  Networking
                </div>
                <div className="absolute bottom-4 left-4 text-black">
                  <h3 className="text-xl font-bold">Web3 Meetup</h3>
                  <p className="text-black/80">Community Gathering</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar text-amber-500">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  December 12, 2025
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-amber-500">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Lekki Phase 1, Lagos
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Connect with fellow Web3 enthusiasts, developers, and entrepreneurs. Enjoy presentations, networking, and community discussions.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-black">Free</span>
                  <button className="bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 rounded-full text-sm font-medium transition-colors border border-amber-500">
                    Join Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <section className="w-full lg:py-24 py-20 bg-gradient-to-r from-transparent to-amber-50 mb-28">
        <div className="mx-auto max-w-[1368px] w-full lg:px-16 md:px-8 px-4">
          <div className="w-full flex md:flex-row flex-col gap-10 lg:gap-0 justify-between items-center">
            <div className="flex flex-col lg:w-[50%] gap-2">
              <h2 className="lg:text-4xl text-3xl font-semibold lg:w-[70%] text-black">Ready to join the next cohort of learners?</h2>
              <p className="text-gray-600 leading-relaxed">
                Graduates from our program have gone to work with global brands such as Aavegotchi, Consensys, Nahmii, Nethermind, Polygon and lots more. So be rest assured that you are going to have the best learning experience with our program.
              </p>
            </div>
            
            <a href="/apply" className="inline-block">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 rounded-full px-12 py-6 border-2 border-amber-400 bg-amber-400 text-black capitalize hover:bg-amber-500 hover:border-amber-500 font-semibold">
                Join the next cohort 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right w-5 h-5 ml-2">
                  <path d="M18 8L22 12L18 16"></path>
                  <path d="M2 12H22"></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}