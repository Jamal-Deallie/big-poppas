import Image from 'next/image';
import React from 'react';

import { cn } from '@/utils/cn';

type ReviewCardProps = {
  review: string;
  src: string;
  brand: string;
};

const ReviewCard = ({ review, src, brand }: ReviewCardProps) => {
  return (
    <div className='relative lg:aspect-[4/5] aspect-[3/1.75] lg:w-[20vw] w-full border-black border-2 lg:border-[3px] h-auto overflow-hidden  text-black btn-shadow'>
      <div className='relative w-full min-h-full bg-tertiary text-black mx-auto p-8 lg:px-6 lg:py-10 backface-hidden'>
        <div className='relative aspect-[1505/331] lg:w-[8vw] w-[25vw] mx-auto'>
          <Image
            className='object-contain w-full h-full'
            src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1691819465/big_poppas/iconly_svg_optimized-optimized_q25qm0.svg'
            fill
            alt='five stars'
            sizes='(min-width: 850px) 14vw, 8vw, (max-width: 849px) 5vw'
          />
        </div>
        <div className='lg:pt-12 pt-8 pb-4'>
          <p className='font-body text-base lg:text-2xl text-center'>
            {review}
          </p>
        </div>
        <figure
          className={cn(
            'relative lg:h-[5vw] lg:w-[10vw] h-[10vw] w-[35vw] block mx-auto'
          )}>
          <Image
            className='w-full h-full object-contain'
            src={src}
            alt={brand}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </figure>
      </div>
    </div>
  );
};

export default ReviewCard;
