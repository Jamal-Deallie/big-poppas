import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { cn } from '@/utils/cn';
import { MenuItem, SearchBar } from '../../../components';
import Link from 'next/link';
import { getCategoryMenuItems } from '../../../db/queries/menu';

// export const runtime = 'edge';

export interface MenuItemProps {
  _id: string;
  name: string;
  price: string;
  ingredients: string;
  isSpicy: boolean;
  category: string;
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const category = await getCategoryMenuItems({ category: params.category });

  if (!category) return notFound();

  return {
    title: params.category,
    description: `Big Poppas ${params.category}s`,
  };
}

const MenuCategoryPage = async ({
  params,
  searchParams,
}: {
  params: {
    category: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 10;

  const search =
    typeof searchParams.search === 'string' ? searchParams.search : undefined;

  const products = (await getCategoryMenuItems({
    category: params.category,
    page,
    limit,
    query: search,
  })) as MenuItemProps[];
  return (
    <main className='pt-nav-height pb-16 lg:pb-32 min-h-svh'>
      <div className='px-4 lg:px-10'>
        <div className='pt-20 pb-10'>
          <h1 className='title-lg text-primary md:text-center'>Ready to Pie</h1>
        </div>
        <Suspense>
          <SearchBar />
        </Suspense>
        <div className='pt-4 w-fit flex gap-6 items-center'>
          <Link
            href='/menu/pizza'
            type='button'
            aria-label='toggle curtain navigation'
            className='block px-4 cursor-pointer text-tertiary font-heading text-2xl bg-secondary rounded-md  hover:text-primary first-line:transition-colors ease-in duration-200 group border-[2.5px] border-black leading-none py-2'>
            Pizzas
          </Link>
          <Link
            href='/menu/drinks'
            type='button'
            aria-label='toggle curtain navigation'
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

        {page > 1 && (
          <div className='flex-center mt-lg-64 mt-sm-48'>
            <Link
              className='mr-lg-32 mr-sm-16'
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

export default MenuCategoryPage;
