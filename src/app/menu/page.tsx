import { Suspense } from 'react';
import { cn } from '@/utils/cn';
import { MenuItem, SearchBar } from '../../components';
import Link from 'next/link';
import { getMenuItems } from '../../db/queries/menu';

export interface MenuItemProps {
  _id: string;
  name: string;
  price: string;
  ingredients: string;
  isSpicy: boolean;
  category: string;
}

const MenuPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 10;

  const search =
    typeof searchParams.search === 'string' ? searchParams.search : undefined;

  const products = (await getMenuItems({
    page,
    limit,
    query: search,
  })) as MenuItemProps[];

  return (
    <main className='pt-nav-height pb-16 lg:pb-32 min-h-svh'>
      <div className='p-inline'>
        <div className='pt-20 pb-10'>
          <h1 className='title-lg text-primary md:text-center'>Ready to Pie</h1>
        </div>
        <Suspense>
          <SearchBar />
        </Suspense>
        <div className='pt-4 w-fit flex gap-6 items-center'>
          <Link
            href='/menu/pizza'
            className='block px-4 cursor-pointer text-tertiary font-heading text-2xl bg-secondary rounded-md  hover:text-primary first-line:transition-colors ease-in duration-200 group border-[2.5px] border-black leading-none py-2'>
            Pizzas
          </Link>
          <Link
            href='/menu/drinks'
            className='block px-4 cursor-pointer text-tertiary font-heading text-2xl bg-secondary rounded-md  hover:text-primary first-line:transition-colors ease-in duration-200 group border-[2.5px] border-black leading-none py-2'>
            Drinks
          </Link>
          <Link
            href='/menu/other'
            type='button'
            aria-label='toggle curtain navigation'
            className='block px-4 cursor-pointer text-tertiary font-heading text-2xl bg-secondary rounded-md  hover:text-primary first-line:transition-colors ease-in duration-200 group border-[2.5px] border-black leading-none py-2'>
            Other
          </Link>
        </div>

        <ul className='grid-inner pt-16 lg:gap-y-8 gap-y-6'>
          <>
            {products.length > 0 ? (
              products.map(item => {
                return <MenuItem key={item._id} {...item} />;
              })
            ) : (
              <li className='col-span-full'>
                <span className='title-lg text-primary text-center block'>
                  No items found
                </span>
              </li>
            )}
          </>
        </ul>
        {products.length > 1 && (
          <div className='flex items-center justify-center w-full h-14 mt-20 lg:gap-32'>
            <Link
              className='text-tertiary text-xl text-center bg-secondary w-32 rounded-lg px-3 py-2 cursor-pointer hover:bg-primary hover:text-secondary duration-100 ease-in transition-colors font-heading shrink-0'
              href={{
                pathname: '/menu',
                query: {
                  ...(search ? { search } : {}),
                  page: page > 1 ? page - 1 : 1,
                },
              }}>
              Previous
            </Link>
            <Link
              className={cn(
                'text-tertiary text-xl bg-secondary text-center w-32 rounded-lg px-3 py-2 cursor-pointer hover:bg-primary hover:text-secondary duration-100 shrink-0 ease-in transition-colors font-heading',
                products.length < limit
                  ? 'pointer-events-none'
                  : 'cursor-pointer'
              )}
              href={{
                pathname: '/menu',
                query: {
                  ...(search ? { search } : {}),
                  page: page + 1,
                },
              }}>
              Next
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default MenuPage;
