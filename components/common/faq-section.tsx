"use client"

import React, { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const faqData: FAQItem[] = [
    {
      id: '1',
      question: 'What is Web3bridge?',
      answer: 'Web3bridge is a comprehensive platform that provides education, training, and resources for individuals looking to enter the Web3 and blockchain ecosystem. We offer structured learning programs, community support, and practical experience in blockchain development.'
    },
    {
      id: '2',
      question: 'Who can benefit from Web3bridge?',
      answer: 'Web3bridge is designed for developers, entrepreneurs, students, and anyone interested in learning about blockchain technology and Web3 development. Whether you\'re a complete beginner or looking to enhance your existing skills, our programs cater to different experience levels.'
    },
    {
      id: '3',
      question: 'What kind of training does Web3bridge offer?',
      answer: 'We offer comprehensive training in smart contract development, DeFi protocols, Web3 integration, blockchain fundamentals, and decentralized application (dApp) development. Our curriculum includes hands-on projects, mentorship, and real-world application scenarios.'
    },
    {
      id: '4',
      question: 'Are there any prerequisites for joining Web3bridge?',
      answer: 'While we welcome beginners, having basic programming knowledge is helpful. We recommend familiarity with JavaScript, HTML/CSS, or any programming language. However, our foundational courses are designed to accommodate learners with varying technical backgrounds.'
    },
    {
      id: '5',
      question: 'How does Web3bridge support its community?',
      answer: 'We provide ongoing mentorship, networking opportunities, career placement assistance, and access to our alumni network. Our community includes regular meetups, workshops, hackathons, and connections with industry professionals and potential employers.'
    },
    {
      id: '6',
      question: 'Is Web3bridge only for developers?',
      answer: 'No, Web3bridge welcomes individuals from various backgrounds including designers, product managers, entrepreneurs, and business professionals. We offer different tracks and learning paths tailored to different roles within the Web3 ecosystem.'
    },
    {
      id: '7',
      question: 'Can I join Web3bridge if I\'m new to blockchain technology?',
      answer: 'Absolutely! We have beginner-friendly programs that start with blockchain fundamentals and gradually progress to more advanced topics. Our structured approach ensures that newcomers can build a solid foundation before moving to complex concepts.'
    }
  ];

  return (
    <div className='mx-auto max-w-[1368px] px-4 flex flex-col w-full'>
      <section className='w-full lg:my-28 my-16 flex flex-col items-center md:gap-8 gap-8 justify-center lg:px-6 md:px-2'>
        <div className='flex flex-col items-center gap-3'>
          <h1 className='font-semibold leading-tight lg:text-5xl md:text-3xl text-[1.72rem] text-center text-black'>
            FAQs
          </h1>
          <p className='w-full text-gray-600 text-center'>
            Don&apos;t worry, we are here to explain everything you might want
            to know
          </p>
        </div>
        <main className='w-full lg:w-[60%] md:w-[80%]'>
          <div className='w-full ring-2 ring-amber-200 rounded-lg bg-white border border-amber-300'>
            {faqData.map((item, index) => (
              <div
                key={item.id}
                className={`border-b border-amber-200 ${index === faqData.length - 1 ? 'border-b-0' : ''}`}
              >
                <h3 className='flex'>
                  <button
                    type='button'
                    onClick={() => toggleItem(item.id)}
                    className='flex flex-1 items-center justify-between py-6 px-6 transition-all hover:bg-amber-50 text-base text-start font-medium text-black'
                    aria-expanded={openItem === item.id}
                  >
                    {item.question}
                    <svg
                      width='15'
                      height='15'
                      viewBox='0 0 15 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className={`h-4 w-4 shrink-0 text-amber-600 transition-transform duration-200 ${
                        openItem === item.id ? 'rotate-180' : ''
                      }`}
                    >
                      <path
                        d='M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z'
                        fill='currentColor'
                        fillRule='evenodd'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItem === item.id 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className='px-6 pb-6 text-sm leading-relaxed text-gray-700'>
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
    </div>
  );
};

export default FaqSection;