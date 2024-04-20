import { Icons } from '@/components';


const MenuItem = ({ ...props }) => {
  return (
    <li className='lg:col-span-4 col-span-full'>
      <span className='price-info flex items-center'>
        <h3 className='flex-1 whitespace-nowrap lg:text-xl text-base font-heading'>
          {props.name}
        </h3>

        <span className='block overflow-hidden mx-2'>
          <Icons.dottedLine className='fill-secondary h-[3px]' />
        </span>
        <span className='text-base  lg:text-xl flex-1 pr-2'>{props.price}</span>
      </span>

      <p className='text-base lg:text-xl'>{props.ingredients}</p>
    </li>
  );
};

export default MenuItem;
