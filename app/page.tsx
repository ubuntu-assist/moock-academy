import FaqSection from "@/components/common/faq-section";
import ShuffleHero from "@/components/common/hero-section";
import StagesSection from "@/components/landing/stages-section";
import TrainingsSection from "@/components/landing/trainings-section";
import VisionMissionSection from "@/components/landing/vision-mission-section";

export default function Home() {
  return (
      <main className='flex-1'>
        <main className='min-h-screen overflow-x-hidden flex flex-col'>
          <div className='mx-auto max-w-[1368px] px-4 flex flex-col w-full'>
          <ShuffleHero/>
          </div>

          <VisionMissionSection/>

           <TrainingsSection/>
         
           <StagesSection/>
      

         

        
        <FaqSection/>
        </main>
      </main>
  )
}