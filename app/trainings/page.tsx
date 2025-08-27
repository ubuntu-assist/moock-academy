import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function TrainingsPage() {
 const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

 return (
        <main className="flex-1 bg-white">
            <div className="flex flex-col">
                <div className="mx-auto max-w-[1368px] px-4 py-10 md:py-20 lg:py-40 w-full flex flex-col xl:flex-row lg:justify-between gap-4 relative">
                    <div className="w-full max-w-full xl:max-w-[754px] text-center flex flex-col items-center justify-center xl:justify-start xl:items-start xl:text-start">
                        <button type="button" className="w-fit text-center text-xs md:text-sm lg:text-base text-black font-medium bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full px-5 py-2.5 me-2 mb-2 shadow-md hover:shadow-lg transition-all">Web 3.0 Made Easy</button>
                        <div className="flex flex-col my-2 gap-4">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl lg:leading-[1.2] font-bold text-black">Join 2,000+ students Becoming Web3 Developers.</h1>
                            <p className="w-full max-w-full xl:max-w-[581px] text-sm md:text-base lg:text-xl font-normal text-gray-700">We are supporting web3 developers and startups, and lowering barriers of entry into the Web3 ecosystem.</p>
                        </div>
                        <div className="w-full aspect-video flex xl:hidden z-10 rounded-[30px] mt-6 mb-3 bg-gradient-to-r from-yellow-400/30 to-amber-500/30 p-3">
                            <img alt="banner-img" fetchPriority="high" width="536" height="536" decoding="async" data-nimg="1" className="w-full h-full object-cover rounded-[26px]" style={{color:'transparent'}} src="/media/b-3.webp"/>
                        </div>
                        <ul className="list-item space-y-2 my-5 md:my-10">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap w-4 h-4 mr-2 text-amber-500">
                                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                                    <path d="M22 10v6"></path>
                                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                                </svg>
                                <p className="text-sm md:text-base font-medium text-black">Scholarship Placements For Web 3.0 Students</p>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 w-4 h-4 mr-2 text-amber-500">
                                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                                    <path d="M10 6h4"></path>
                                    <path d="M10 10h4"></path>
                                    <path d="M10 14h4"></path>
                                    <path d="M10 18h4"></path>
                                </svg>
                                <p className="text-sm md:text-base font-medium text-black">Free Accommodation and feeding for onsite Students</p>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 w-4 h-4 mr-2 text-amber-500">
                                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                                    <path d="M10 6h4"></path>
                                    <path d="M10 10h4"></path>
                                    <path d="M10 14h4"></path>
                                    <path d="M10 18h4"></path>
                                </svg>
                                <p className="text-sm md:text-base font-medium text-black">Web3 Community Exposure and Hackathons For Students</p>
                            </li>
                        </ul>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow py-2 h-14 px-6 mt-12 md:mt-16 rounded-full border-2 ring-2 ring-amber-500 border-black bg-black text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all">
                            Join The next Cohort 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ml-2">
                                <path d="M18 8L22 12L18 16"></path>
                                <path d="M2 12H22"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="h-[536px] w-full max-w-[506px] relative hidden xl:flex justify-center mt-20">
                        <div className="h-full w-full z-10 rounded-r-none rounded-[48px] bg-gradient-to-r from-yellow-400/30 to-amber-500/30 p-3 pr-0">
                            <img alt="banner-img" fetchPriority="high" width="536" height="536" decoding="async" data-nimg="1" className="w-full h-full object-cover rounded-[40px] rounded-r-none" style={{color:'transparent'}} src="/media/b-3.webp"/>
                        </div>
                        <div className="absolute h-[341px] top-24 -left-36 w-[464px] rounded-r-none rounded-[48px] bg-gradient-to-r from-yellow-400/30 to-amber-500/30 p-3 pr-0">
                            <img alt="banner-img" fetchPriority="high" width="536" height="536" decoding="async" data-nimg="1" className="w-full h-full object-cover rounded-[40px] rounded-r-none" style={{color:'transparent'}} src="/media/b-2.webp"/>
                        </div>
                        <div className="absolute max-w-[376px] w-full h-[250.7px] -top-24 right-0 rounded-r-none rounded-[48px] bg-gradient-to-r from-yellow-400/30 to-amber-500/30 p-3 pr-0">
                            <img alt="banner-img" fetchPriority="high" width="536" height="536" decoding="async" data-nimg="1" className="w-full h-full object-cover rounded-[40px] rounded-r-none" style={{color:'transparent'}} src="/media/b-1.webp"/>
                        </div>
                    </div>
                </div>

                {/* Course Features Section */}
                <div className="w-full mx-auto max-w-[1368px] px-4">
                    <div className="py-10 md:py-20 flex flex-col gap-6 items-center justify-center md:max-w-[727px] mx-auto w-full lg:max-w-[926px]">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black">Our Comprehensive Web3 Curriculum</h2>
                        <div className="w-full bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex items-start space-x-3">
                                    <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2 rounded-lg">
                                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 text-black">Smart Contract Development</h3>
                                        <p className="text-gray-600">Learn Solidity, deploy contracts, and build DeFi applications</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2 rounded-lg">
                                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 text-black">Blockchain Fundamentals</h3>
                                        <p className="text-gray-600">Understand consensus mechanisms, cryptography, and distributed systems</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2 rounded-lg">
                                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 text-black">DApp Development</h3>
                                        <p className="text-gray-600">Build full-stack decentralized applications with modern frameworks</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2 rounded-lg">
                                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 text-black">NFTs & Token Standards</h3>
                                        <p className="text-gray-600">Create and deploy NFT collections and custom tokens</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Learning Path Section */}
                    <div className="py-10 md:py-20 flex flex-col gap-6 items-center justify-center md:max-w-[727px] mx-auto w-full lg:max-w-[926px]">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black">Your Learning Journey</h2>
                        <div className="w-full bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 md:p-8 border border-amber-200">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-black text-amber-400 rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <div>
                                        <h3 className="font-bold text-lg text-black">Foundation Phase (Weeks 1-4)</h3>
                                        <p className="text-gray-700">Master blockchain basics, Ethereum fundamentals, and development tools</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="bg-black text-amber-400 rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <div>
                                        <h3 className="font-bold text-lg text-black">Development Phase (Weeks 5-8)</h3>
                                        <p className="text-gray-700">Build real projects, deploy smart contracts, and create DApps</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="bg-black text-amber-400 rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <div>
                                        <h3 className="font-bold text-lg text-black">Advanced Phase (Weeks 9-12)</h3>
                                        <p className="text-gray-700">Advanced patterns, security auditing, and portfolio development</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="bg-black text-amber-400 rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <div>
                                        <h3 className="font-bold text-lg text-black">Career Preparation</h3>
                                        <p className="text-gray-700">Interview prep, job placement assistance, and industry networking</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Success Stories Section */}
                    <div className="py-10 md:py-20 flex flex-col gap-6 items-center justify-center md:max-w-[727px] mx-auto w-full lg:max-w-[926px]">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black">Student Success Stories</h2>
                       <AnimatedTestimonials testimonials={testimonials} />
                    </div>
                </div>

                <section className="w-full lg:py-24 py-20 bg-gradient-to-r mb-28 from-transparent to-amber-50">
                    <div className="mx-auto max-w-[1368px] w-full lg:px-16 md:px-8 px-4">
                        <div className="w-full flex md:flex-row flex-col gap-10 lg:gap-0 justify-between items-center">
                            <div className="flex flex-col lg:w-[50%] gap-2">
                                <h1 className="lg:text-4xl text-3xl font-bold lg:w-[70%] text-black">Ready to join the next cohort of learners?</h1>
                                <p className="text-gray-700">Graduates from our program have gone to work with global brands such as Aavegotchi, Consensys, Nahmii, Nethermind, Polygon and lots more. So be rest assured that you are going to have the best learning experience with our program.</p>
                            </div>
                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 rounded-full px-12 py-6 border-2 ring-2 ring-black border-amber-500 bg-gradient-to-r from-yellow-400 to-amber-500 text-black capitalize hover:bg-black hover:text-amber-400 transition-all">
                                Join the next cohort 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ml-2 ">
                                    <path d="M18 8L22 12L18 16"></path>
                                    <path d="M2 12H22"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
 )
}