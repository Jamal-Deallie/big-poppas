'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState, useTransition } from 'react';

import { Ring } from '@/components';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [debouncedValue, setDebouncedValue] = useState<string>('');
  const [mounted, setMounted] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleSearchParams = useCallback(
    (debouncedValue: string) => {
      const params = new URLSearchParams(window.location.search);
      if (debouncedValue.length > 0) {
        params.set('search', debouncedValue);
      } else {
        params.delete('search');
      }
      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`);
      });
    },
    [pathname, router]
  );

  // EFFECT: Set Initial Params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('search') ?? '';
    setInputValue(searchQuery);
  }, []);

  // EFFECT: Set Mounted
  useEffect(() => {
    if (debouncedValue.length > 0 && !mounted) {
      setMounted(true);
    }
  }, [debouncedValue, mounted]);

  // EFFECT: Debounce Input Value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  // EFFECT: Search Params
  useEffect(() => {
    if (mounted) handleSearchParams(debouncedValue);
  }, [debouncedValue, handleSearchParams, mounted]);

  return (
    <div className='relative'>
      <label htmlFor='Search' className='sr-only'>
        Search
      </label>

      <input
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
        }}
        type='text'
        id='Search'
        placeholder='Search our diverse menu'
        className='w-full rounded-md border-secondary border-[2.5px] pe-10 py-3 p- shadow-sm text-base focus-within:ring-primary focus-within:border-primary focus:ring-primary focus:border-primary'
      />

      <span className='absolute inset-y-0 end-0 grid w-10 place-content-center'>
        <button
          type='button'
          className='text-secondary hover:text-primary'
          disabled={isPending}>
          {isPending ? (
            <div className='mr-8 flex items-center'>
              <Ring />
            </div>
          ) : (
            <>
              <span className='sr-only'>Search</span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
            </>
          )}
        </button>
      </span>
    </div>
    // <div className='bg-tertiary lg:mt-32 mt-24 lg:mx-40 mx-16 flex rounded-md overflow-hidden border-secondary border-[2.5px] group'>
    //   <input
    //     value={inputValue}
    //     onChange={e => {
    //       setInputValue(e.target.value);
    //     }}
    //     placeholder='Search our diverse menu'
    //     className='flex-1 bg-tertiary h-12 px-4 text-secondary text-lg font-body focus:outline-none '
    //   />
    //   {isPending && (
    //     <div className='mr-8 flex items-center'>
    //       <Ring />
    //     </div>
    //   )}
  );
};

export default SearchBar;
