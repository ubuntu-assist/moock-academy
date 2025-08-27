import React from 'react'

const VisionMissionSection = () => {
  return (
    <div className="w-full mx-auto max-w-[1368px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
      <section className="relative w-full flex flex-col items-center bg-gradient-to-b from-amber-50/50 to-white dark:from-gray-900 dark:to-black">
        {/* Decorative Wave Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute top-0 w-full h-24 sm:h-32 text-amber-200/30"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C360,80 1080,80 1440,0 L1440,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
          <svg
            className="absolute bottom-0 w-full h-24 sm:h-32 text-amber-200/30"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,120 C360,40 1080,40 1440,120 L1440,0 L0,0 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Header */}
        <div className="relative text-center mb-8 sm:mb-12">
          <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white">
            Our <span className="text-amber-500">Vision</span> & <span className="text-amber-500">Mission</span>
          </h1>
          <p className="mt-4 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto text-sm sm:text-base text-muted-foreground">
            Empowering the future of blockchain development through innovation, education, and community.
          </p>
        </div>

        {/* Vision and Mission Content */}
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Vision Card */}
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-500 rounded-l-lg"></div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Vision
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              To create a world where blockchain technology is accessible to everyone, fostering a decentralized future that empowers individuals and communities through secure, transparent, and innovative solutions.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-black bg-amber-200/60 rounded-full">
                Innovation
              </span>
              <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-black bg-amber-200/60 rounded-full">
                Accessibility
              </span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="absolute top-0 right-0 w-1 h-full bg-amber-500 rounded-r-lg"></div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              To provide world-class education and practical training in blockchain development, equipping aspiring developers with the skills and knowledge to build secure, scalable, and impactful decentralized applications.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-black bg-amber-200/60 rounded-full">
                Education
              </span>
              <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-black bg-amber-200/60 rounded-full">
                Empowerment
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VisionMissionSection