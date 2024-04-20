import React from 'react';

import { commandmentItems } from '../../data/nutritionItems';

import { Icons, NutritionCard } from '../../components';

export default function Nutrition() {
  return (
    <section className='lg:border-b-4 border-b-2 border-black'>
      <div className='p-inline'>
        <div className='py-16 lg:pt-20'>
          <div className='relative grid-inner grid-rows-1 lg:pb-32 pb-16'>
            <div className='lg:col-start-6 col-end-6 mb-4 col-start-4'>
              <Icons.smileyFace className='block' />
            </div>
            <div className='title-lg leading-[0.86] text-black txt-outline text-center lg:col-start-3 lg:col-end-11 row-span-1 col-span-full items-center'>
              <h1>IT’S ALL GOOD BABY BABY</h1>
            </div>
          </div>
          <div>
            <div className='grid-inner md:space-y-10'>
              {commandmentItems.map(({ id, title, icon, commandment }) => (
                <div key={id} className='lg:col-span-4 col-span-full'>
                  <NutritionCard
                    title={title}
                    icon={icon}
                    commandment={commandment}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
