'use client';

import {useState } from 'react';

import { Accordion } from '../../components';

interface FaqProps {
  question: string;
  answer: string;
  id: number;
}

interface AccordionProps {
  data: FaqProps[];
}
export default function AccordionGroup({ data }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleItemClick = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };


  return (
    <div>
      <h1 className='title-lg txt-outline text-black'>Any</h1>
      <h1 className='title-lg txt-outline text-black'>Questions</h1>
      <div className='grid-inner'>
        <div className='lg:mt-30 mt-16 [&>*:nth-child(even)]:my-6 col-span-full lg:col-start-2 lg:col-end-11'>
          {data.map((item, index) => (
            <Accordion
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
