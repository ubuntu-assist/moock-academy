import TeamSection from "@/components/common/team-section";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export default function AboutPage() {
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

  return (
    <main className="flex-1 bg-white">
      <main className="min-h-screen flex flex-col">
        <div className="mx-auto max-w-[1368px] px-4 flex flex-col w-full">
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-end xl:h-[650px] lg:h-[700px] md:h-[70vh] sm:h-[60vh] h-[550px] w-full relative radial-gradient">
            <div className="xl:w-1/2 md:w-[80%] w-full flex flex-col items-center gap-4 justify-center mt-[30px]">
              <h1 className="font-bold leading-tight md:text-5xl sm:text-4xl text-3xl text-center text-black">
                We Have Introduced Over 3000 Newbies To Web 3.0
              </h1>
              <p className="text-center text-gray-700">
                Our alumni are doing well for themselves as blockchain developers, smart contract developers, blockchain auditors, backend developers and much more.
              </p>
              <div className="mt-4 items-center md:gap-8 gap-4">
                <a href="/trainings">
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50 shadow h-9 rounded-full px-12 py-6 border-2 ring-2 ring-black border-amber-500 bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:bg-black hover:text-amber-400 transition-all">
                    Join The next Cohort
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right w-5 h-5 ml-2">
                      <path d="M18 8L22 12L18 16"></path>
                      <path d="M2 12H22"></path>
                    </svg>
                  </button>
                </a>
              </div>
              <div className="flex flex-row items-center justify-center mt-[40px] w-full">
      <AnimatedTooltip items={people} />
    </div>
            </div>
            <img 
              alt="Star decoration" 
              width="105" 
              height="105" 
              className="hidden md:block absolute lg:left-[17%] md:left-[5%] left-0 lg:bottom-[25%] md:bottom-[30%] bottom-[70%] md:w-[90px] w-[70px] md:h-[90px] h-[70px]" 
              src="/media/Star.webp"
            />
            <img 
              alt="Star decoration 2" 
              width="96" 
              height="96" 
              className="absolute lg:right-[18%] right-[5%] md:bottom-[50%] top-[2%] w-[75px] md:w-fit scale-75" 
              src="/media/Star2.webp"
            />
            <img 
              alt="Periwinkle decoration" 
              width="103" 
              height="101" 
              className="left-[20px] sm:left-[25%] md:left-[50%] absolute top-[5%] scale-75 w-[75px] md:w-fit" 
              src="/media/Periwinkle.webp"
            />
          </section>

          {/* Journey Section */}
          <section className="w-full flex flex-col mt-8 gap-1 md:gap-10 justify-center md:px-16 md:py-20 py-10 radial-gradient">
            {/* Where We Started */}
            <div className="w-full flex lg:flex-row flex-col gap-4 md:gap-10 justify-between items-center py-6">
              <div className="basis-1/2 order-first">
                <button type="button" className="w-fit text-center text-xs md:text-sm lg:text-base text-black font-medium bg-gradient-to-b from-yellow-100 to-amber-50 rounded-full px-5 py-2.5 me-2 mb-2 border border-amber-200">
                  Our Journey
                </button>
                <h2 className="mb-4 mt-2 md:mt-5 text-xl md:text-4xl font-bold leading-none tracking-tight text-black">
                  Where We Started from
                </h2>
                <p className="mb-2 font-light leading-relaxed lg:mb-8 md:text-xl text-md lg:text-xl text-gray-700">
                  Web3bridge is a program created in 2019 to train Web3 developers in Africa. We are working on building sustainable Web3 economy in Africa through remote and onsite Web3 development training
                </p>
              </div>
              <div>
                <img 
                  alt="Web3bridge journey beginning" 
                  width="533" 
                  height="400" 
                  src="/media/StoryImage1.webp"
                />
              </div>
            </div>

            {/* Where We Are */}
            <div className="w-full flex lg:flex-row flex-col gap-4 md:gap-10 justify-between items-center py-6">
              <div className="basis-1/2 order-first lg:order-last">
                <button type="button" className="w-fit text-center text-xs md:text-sm lg:text-base text-black font-medium bg-gradient-to-b from-yellow-100 to-amber-50 rounded-full px-5 py-2.5 me-2 mb-2 border border-amber-200">
                  Right Here, Right Now
                </button>
                <h2 className="mb-4 mt-2 md:mt-5 text-xl md:text-4xl font-bold leading-none tracking-tight text-black">
                  Where We are
                </h2>
                <p className="mb-2 font-light leading-relaxed lg:mb-8 md:text-xl text-md lg:text-xl text-gray-700">
                  We have made true to our plans to train Web3 developers across Africa, and we have trained over a thousand (1000) developers directly and indirectly through our Web3, Web2 cohorts and masterclasses. Our commitment and consistency has also made us the choice partner for protocols and projects looking to train and hire developers from Africa. Since we moved to the hybrid training program, we have expanded our facilities to be able to house up to two hundred (200) developers and halls to accommodate the same.
                </p>
              </div>
              <div>
                <img 
                  alt="Web3bridge current state" 
                  width="530" 
                  height="400" 
                  src="/media/StoryImage2.webp"
                />
              </div>
            </div>

            {/* Where We Are Headed */}
            <div className="w-full flex lg:flex-row flex-col gap-4 md:gap-10 justify-between items-center py-6">
              <div className="basis-1/2 order-first">
                <button type="button" className="w-fit text-center text-xs md:text-sm lg:text-base text-black font-medium bg-gradient-to-b from-yellow-100 to-amber-50 rounded-full px-5 py-2.5 me-2 mb-2 border border-amber-200">
                  Journey Ahead
                </button>
                <h2 className="mb-4 mt-2 md:mt-5 text-xl md:text-4xl font-bold leading-none tracking-tight text-black">
                  Where We are Headed
                </h2>
                <p className="mb-2 font-light leading-relaxed lg:mb-8 md:text-xl text-md lg:text-xl text-gray-700">
                  Our journey is such that keeps unveiling as we grow, however, we are confident in becoming one of the biggest Web3 training providers in the entire continent of Africa, training and grooming developers in their numbers, partnering with protocols and projects, and supporting new training initiatives, programs and companies springing up across the African continent.
                </p>
              </div>
              <div>
                <img 
                  alt="Web3bridge future vision" 
                  width="528" 
                  height="400" 
                  src="/media/StoryImage3.webp"
                />
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="w-full flex flex-col gap-2 lg:gap-6 justify-center py-10 md:px-4 md:py-20 radial-gradient">
            <h2 className="font-bold md:text-4xl text-2xl text-center capitalize text-black">
              Meet Our Amazing Team
            </h2>
            <p className="text-md lg:text-xl font-light text-center text-gray-700">
              We have a diverse dev team of really amazing people
            </p>
            <div className="flex flex-wrap gap-8 w-fit mx-auto justify-center">
       
            <TeamSection/>
     
            </div>
          </section>

          {/* Documentaries Section */}
          <section className="w-full flex flex-col gap-2 lg:gap-6 justify-center md:px-4 md:py-20 py-3 radial-gradient">
            <h2 className="font-bold md:text-4xl text-2xl text-center capitalize text-black">
              Documentaries
            </h2>
            <p className="text-md lg:text-xl font-light text-center lg:leading-8 text-gray-700">
              We have amazing stories to tell. Check out our YouTube channel.
            </p>
            <iframe 
              className="w-full aspect-video mt-4 lg:mt-0 rounded-2xl border-2 border-amber-200" 
              src="https://www.youtube.com/embed/vvae4m-GqNg?si=tIOBoKv5t1zONOI0&rel=0" 
              title="Web3bridge Documentary - YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </section>
        </div>

        {/* Call to Action Section */}
        <section className="w-full lg:py-24 py-20 bg-gradient-to-r mb-28 from-transparent to-amber-50">
          <div className="mx-auto max-w-[1368px] w-full lg:px-16 md:px-8 px-4">
            <div className="w-full flex md:flex-row flex-col gap-10 lg:gap-0 justify-between items-center">
              <div className="flex flex-col lg:w-[50%] gap-2">
                <h2 className="lg:text-4xl text-3xl font-bold lg:w-[70%] text-black">
                  Ready to join the next cohort of learners?
                </h2>
                <p className="text-gray-700">
                  Graduates from our program have gone to work with global brands such as Aavegotchi, Consensys, Nahmii, Nethermind, Polygon and lots more. So be rest assured that you are going to have the best learning experience with our program.
                </p>
              </div>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50 shadow h-9 rounded-full px-12 py-6 border-2 ring-2 ring-black border-amber-500 bg-gradient-to-r from-yellow-400 to-amber-500 text-black capitalize hover:bg-black hover:text-amber-400 transition-all">
                Join the next cohort
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right w-5 h-5 ml-2">
                  <path d="M18 8L22 12L18 16"></path>
                  <path d="M2 12H22"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>
    </main>
  );
}