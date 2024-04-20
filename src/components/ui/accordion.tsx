'use client';

import { useRef } from 'react';

import { Icons } from'../../components';

import { cn } from '../../utils/cn';

type AccordionProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

export default function Accordion({
  question,
  answer,
  onClick,
  isOpen,
}: AccordionProps) {
  const contentHeight = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        'flex flex-col border-2  lg:border-[3px] rounded-[4px] border-transparent hover:border-secondary ease-out transition md:px-4 lg:px-4 text-black duration-500',
        isOpen ? 'bg-white ' : 'bg-primary'
      )}>
      <button
        className='box-border flex w-full cursor-pointer appearance-none items-center justify-between py-4 focus:outline-none'
        onClick={onClick}>
        <p className='text-start text-base lg:text-lg medium'>
          {question}
        </p>
        <span
          className={cn(
            isOpen
              ? 'ease-in rotate-45 transform duration-700'
              : 'ease-in rotate-0 transform duration-700',
            'block origin-center h-6 w-6'
          )}>
          <Icons.circlePlus className='h-6 w-6' />
        </span>
      </button>

      <div
        ref={contentHeight}
        className='transition-max-height overflow-hidden duration-700 ease-in-out'
        style={
          isOpen
            ? { maxHeight: contentHeight?.current?.scrollHeight }
            : { maxHeight: '0px' }
        }>
        <div className='pb-10 pt-2'>
          <p className='text-base lg:text-lg font-body font-medium'>{answer}</p>
        </div>
      </div>
    </div>
  );
}
