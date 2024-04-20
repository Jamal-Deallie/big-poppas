import { reviewItems } from '../../data/reviewItems';

import { ReviewCard } from '../../components';
const Reviews = () => {
  return (
    <div className='px-4 lg:px-10 relative py-16 lg:pt-32 bg-tertiary'>
      <div className='grid-inner'>
        <h1 className='title-lg text-black lg:col-span-6 col-span-full'>
          Warning, Notorious Reviews
        </h1>
        <div className='col-span-full flex md:flex-col w-full lg:py-20 pt-16 justify-center lg:gap-8 gap-8 [&>*:nth-child(odd)]:rotate-2 [&>*:nth-child(even)]:rotate-[-2deg] [&>*:nth-child(odd)]:lg:mt-4'>
          {reviewItems.map(({ id, ...items }) => {
            return <ReviewCard key={id} {...items} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
