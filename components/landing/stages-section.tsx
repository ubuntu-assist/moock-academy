import React from 'react'

const StagesSection = () => {
  return (
    <div className='w-full mx-auto max-w-[1368px] mt-6 px-4 sm:px-6 lg:px-8'>
      <section className='w-full flex flex-col items-center gap-6 sm:gap-8 justify-center bg-gradient-to-b from-transparent to-amber-100/20 py-12 sm:py-16 md:py-24'>
        <div className='flex flex-col items-center gap-4 text-center px-4'>
          <h1 className='font-semibold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
            The Web 3.0 Cohort
          </h1>
          <p className='w-full sm:w-4/5 md:w-3/4 lg:w-2/3 text-muted-foreground text-sm sm:text-base'>
            In <span className='text-amber-500 font-medium'>16 weeks,</span>
            get everything you need to launch your career in Blockchain
            Development through our trainings that gives you the nitty
            gritty of experience through practical classes.
          </p>
        </div>
        <main className='w-full flex flex-col items-center'>
          {/* Desktop Layout (unchanged for large screens) */}
          <div className='w-[90%] h-[550px] lg:block hidden relative'>
            <div className='w-full h-full relative -mt-[200px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                id='eADtBMPrzR31'
                viewBox='0 0 300 300'
                shapeRendering='geometricPrecision'
                textRendering='geometricPrecision'
              >
                <g>
                  <path
                    d='M34.855178,78.569911h233.788498l9.174841,22.767196-.000001,18.689486-9.17484,20.72834h-233.788498L21.942441,165.22117v18.349679l12.912737,20.72834h233.788498'
                    transform='translate(.000005 0.000002)'
                    fill='none'
                    stroke='#fed7aa'
                    strokeWidth='0.8'
                  ></path>
                </g>
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                id='eADtBMPrzR31'
                viewBox='0 0 300 300'
                shapeRendering='geometricPrecision'
                className='absolute top-0 left-0'
                textRendering='geometricPrecision'
              >
                <g>
                  <path
                    d='M34.855178,78.569911h233.788498l9.174841,22.767196-.000001,18.689486-9.17484,20.72834h-233.788498L21.942441,165.22117v18.349679l12.912737,20.72834h233.788498'
                    transform='translate(.000005 0.000002)'
                    fill='none'
                    stroke='#f59e0b'
                    strokeWidth='0.8'
                    pathLength='1'
                    strokeDashoffset='0px'
                    strokeDasharray='0px 1px'
                  ></path>
                </g>
              </svg>
            </div>
            <div className='absolute cursor-pointer flex flex-col items-center top-4 left-[100px]'>
              <div className='w-[120px] h-[120px]'>
                <img
                  alt='Techs'
                  loading='lazy'
                  width='512'
                  height='512'
                  decoding='async'
                  data-nimg='1'
                  className='w-full h-full'
                  style={{ color: 'transparent' }}
                  src='/media/blockchain.webp'
                />
              </div>
              <h4 className='font-light text-base'>Intro to Blockchain</h4>
            </div>
            <div className='absolute cursor-pointer flex flex-col items-center top-4 left-[470px]'>
              <div className='w-[120px] h-[120px]'>
                <img
                  alt='Techs'
                  loading='lazy'
                  width='144'
                  height='149'
                  decoding='async'
                  data-nimg='1'
                  className='w-full h-full'
                  style={{ color: 'transparent' }}
                  src='/media/ethereum.webp'
                />
              </div>
              <h4 className='font-light text-base'>Ethereum</h4>
            </div>
            <div className='absolute cursor-pointer flex flex-col items-center top-4 right-[100px]'>
              <div className='w-[120px] h-[120px]'>
                <img
                  alt='Techs'
                  loading='lazy'
                  width='149'
                  height='154'
                  decoding='async'
                  data-nimg='1'
                  className='w-full h-full'
                  style={{ color: 'transparent' }}
                  src='/media/solidity.webp'
                />
              </div>
              <h4 className='font-light text-base'>Solidity</h4>
            </div>
            <div className='absolute cursor-pointer flex flex-col items-center top-[240px] left-[100px]'>
              <div className='w-[120px] h-[120px]'>
                <img
                  alt='Techs'
                  loading='lazy'
                  width='144'
                  height='144'
                  decoding='async'
                  data-nimg='1'
                  className='w-full h-full'
                  style={{ color: 'transparent' }}
                  src='/media/etherjs.webp'
                />
              </div>
              <h4 className='font-light text-base'>EtherJS &amp;Web3JS</h4>
            </div>
            <div className='absolute cursor-pointer flex flex-col items-center top-[240px] left-[470px]'>
              <div className='w-[120px] h-[120px]'>
                <img
                  alt='Techs'
                  loading='lazy'
                  width='144'
                  height='144'
                  decoding='async'
                  data-nimg='1'
                  className='w-full h-full'
                  style={{ color: 'transparent' }}
                  src='/media/hardhat.webp'
                />
              </div>
              <h4 className='font-light text-base'>Hardhat</h4>
            </div>
            <div className='absolute cursor-pointer flex flex-col items-center top-[240px] right-[100px]'>
              <div className='w-[120px] h-[120px]'>
                <img
                  alt='Techs'
                  loading='lazy'
                  width='144'
                  height='144'
                  decoding='async'
                  data-nimg='1'
                  className='w-full h-full'
                  style={{ color: 'transparent' }}
                  src='/media/foundry1.webp'
                />
              </div>
              <h4 className='font-light text-base'>Foundry</h4>
            </div>
            <div className='absolute cursor-pointer flex flex-col items-center top-[480px] left-[100px]'>
              <div className='w-[120px] h-[120px]'>
                <img
                  alt='Techs'
                  loading='lazy'
                  width='144'
                  height='149'
                  decoding='async'
                  data-nimg='1'
                  className='w-full h-full'
                  style={{ color: 'transparent' }}
                  src='/media/hardhat1.webp'
                />
              </div>
              <h4 className='font-light text-base'>Non-Fungible Tokens</h4>
            </div>
            <div className='absolute cursor-pointer flex flex-col items-center top-[480px] left-[470px]'>
              <div className='w-[120px] h-[120px]'>
                <img
                  alt='Techs'
                  loading='lazy'
                  width='149'
                  height='149'
                  decoding='async'
                  data-nimg='1'
                  className='w-full h-full'
                  style={{ color: 'transparent' }}
                  src='/media/zk.webp'
                />
              </div>
              <h4 className='font-light text-base'>Zero Knowledge</h4>
            </div>
            <div className='absolute cursor-pointer flex flex-col items-center top-[480px] right-[100px]'>
              <div className='w-[120px] h-[120px]'>
                <img
                  alt='Techs'
                  loading='lazy'
                  width='145'
                  height='144'
                  decoding='async'
                  data-nimg='1'
                  className='w-full h-full'
                  style={{ color: 'transparent' }}
                  src='/media/Crypto Wallet.webp'
                />
              </div>
              <h4 className='font-light text-base'>Blockchain Security</h4>
            </div>
          </div>
          {/* Mobile/Tablet Layout */}
          <div className='lg:hidden w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-2 sm:px-4'>
            {[
              {
                title: 'Intro to Blockchain',
                src: '/media/blockchain.webp',
                desc: 'Learn blockchain basics: decentralized networks, consensus, and cryptography for secure systems.',
              },
              {
                title: 'Ethereum',
                src: '/media/ethereum.webp',
                desc: 'Explore Ethereum, a leading platform for smart contracts and dApps.',
              },
              {
                title: 'Solidity',
                src: '/media/solidity.webp',
                desc: 'Learn Solidity for writing smart contracts on Ethereum.',
              },
              {
                title: 'EtherJS & Web3JS',
                src: '/media/etherjs.webp',
                desc: 'Use EtherJS and Web3JS to interact with Ethereum smart contracts.',
              },
              {
                title: 'Hardhat',
                src: '/media/hardhat.webp',
                desc: 'Streamline smart contract development with Hardhat.',
              },
              {
                title: 'Foundry',
                src: '/media/foundry1.webp',
                desc: 'Explore Foundry, an advanced tool for smart contract development.',
              },
              {
                title: 'Non-Fungible Tokens',
                src: '/media/hardhat1.webp',
                desc: 'Understand NFTs, a key application of blockchain technology.',
              },
              {
                title: 'Zero Knowledge',
                src: '/media/zk.webp',
                desc: 'Learn about zero-knowledge proofs for privacy in blockchain.',
              },
              {
                title: 'Blockchain Security',
                src: '/media/Crypto Wallet.webp',
                desc: 'Understand the measures taken to protect blockchain networks, data, and transactions from unauthorized access, fraud, and other malicious activities.',
              },
            ].map((item, index) => (
              <div key={index} className='w-full'>
                <div className='w-full p-3 sm:p-4 flex flex-col sm:flex-row items-center rounded-md ring-1 ring-amber-200/60 bg-amber-100/20 gap-3'>
                  <div className='w-16 h-16 sm:w-20 sm:h-20'>
                    <img
                      alt={item.title}
                      loading='lazy'
                      width='144'
                      height='144'
                      decoding='async'
                      className='w-full h-full object-contain'
                      style={{ color: 'transparent' }}
                      src={item.src}
                    />
                  </div>
                  <div className='flex flex-col gap-2 flex-1'>
                    <h3 className='font-semibold text-base sm:text-lg'>{item.title}</h3>
                    <p className='text-xs sm:text-sm'>{item.desc}</p>
                    <div className='flex gap-2 items-center'>
                      <span className='text-xs px-2 py-1 rounded-xl bg-amber-200/60'>
                        Online
                      </span>
                      <span className='text-xs px-2 py-1 bg-gradient-to-b from-amber-200 to-orange-100 dark:text-black rounded-xl'>
                        OnSite
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
    </div>
  )
}

export default StagesSection