import { Icons } from '@/components';

const NutritionCard = ({
  title,
  icon,
  commandment,

}: {
  title: string;
  icon: string;
  commandment: string;

}) => {
  function renderedIcon(icon: string) {
    switch (icon) {
      case 'meat':
        return <Icons.meat />;
      case 'vegetables':
        return <Icons.bread />;
      case 'cheese':
        return <Icons.cheese />;
    }
  }

  return (
    <div className='lg:px-12'>
      <div className='lg:h-[7.5vw] lg:w-[5.5vw] h-16 w-16 block relative mx-auto'>
        {renderedIcon(icon)}
      </div>
      <div className=''>
        <h1 className='title-sm  text-black pt-4 lg:pt-4 text-center'>
          {title}
        </h1>
        <p className='text-base lg:text-xl lg:pt-4 mt-sm-16 text-black text-center'>
          {commandment}
        </p>
      </div>
    </div>
  );
};

export default NutritionCard;
