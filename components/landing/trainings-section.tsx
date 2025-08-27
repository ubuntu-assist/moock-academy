import React from 'react'

const TrainingsSection = () => {
  return (
    <div className="w-full mx-auto max-w-[1368px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
      <section className="relative w-full flex flex-col items-center bg-gradient-to-b from-white to-amber-50/50 dark:from-black dark:to-gray-900">
        {/* Decorative Blockchain-inspired Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute top-0 left-0 w-full h-16 sm:h-20 text-amber-200/20 z-0"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 L360,20 L720,100 L1080,30 L1440,80 V120 H0 Z"
              fill="currentColor"
            />
          </svg>
          <svg
            className="absolute bottom-0 left-0 w-full h-16 sm:h-20 text-amber-200/20 z-0"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L360,90 L720,30 L1080,100 L1440,40 V0 H0 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Header */}
        <div className="relative text-center mb-12 sm:mb-16 z-10">
          <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white">
            Our <span className="text-amber-500">Training Programs</span>
          </h1>
          <p className="mt-4 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto text-sm sm:text-base text-muted-foreground">
            Unlock your potential in blockchain development with our hands-on, expertly designed training programs tailored for all skill levels.
          </p>
        </div>

        {/* Trainings Grid */}
        <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4 z-10">
          {[
            {
              title: 'Web 3.0 Cohort',
              duration: '16 Weeks',
              format: 'Online & OnSite',
              description: 'Master blockchain development through practical classes covering Ethereum, Solidity, and more.',
              image: '/media/blockchain.webp',
              tag: 'Comprehensive',
              tagBg: 'bg-white/95',
              tagBorder: 'border-amber-300',
            },
            {
              title: 'Smart Contract Mastery',
              duration: '8 Weeks',
              format: 'Online',
              description: 'Deep dive into Solidity and smart contract development with real-world projects.',
              image: '/media/solidity.webp',
              tag: 'Virtual',
              tagBg: 'bg-amber-400/95',
              tagBorder: 'border-amber-500',
            },
            {
              title: 'Blockchain Security Bootcamp',
              duration: '12 Weeks',
              format: 'OnSite',
              description: 'Learn to secure blockchain networks and protect against vulnerabilities.',
              image: '/media/Crypto Wallet.webp',
              tag: 'Advanced',
              tagBg: 'bg-white/95',
              tagBorder: 'border-amber-400',
            },
          ].map((training, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-amber-200"
            >
              <div className="relative h-48">
                <img
                  alt={training.title}
                  loading="lazy"
                  width="676"
                  height="742"
                  decoding="async"
                  className="w-full h-full object-cover"
                  style={{ color: 'transparent' }}
                  src={training.image}
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className={`absolute top-4 right-4 ${training.tagBg} backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-black border ${training.tagBorder}`}>
                  {training.tag}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{training.title}</h3>
                  <p className="text-amber-200">{training.format}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-calendar text-amber-500"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  {training.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-amber-500"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {training.format}
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {training.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-black">Contact Us</span>
                  <button
                    className="bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 rounded-full text-sm font-medium transition-colors border border-amber-500"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default TrainingsSection