import { useCallback, useMemo, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetProductsBySearchQuery } from '../../features/product/productSlice';
import { CustomCard } from '../../components';
import { Box, Typography, CircularProgress } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProductWrapper } from './styles';


export default function SearchResultsContainer() {
  const location = useLocation();
  const ref = useRef();
  const { search } = location;
  const term = useMemo(() => search.split('=').at(-1), [search]);
  const { isLoading, isSuccess, isError, data } =
    useGetProductsBySearchQuery(term);

  useEffect(() => {
    let targets = gsap.utils.toArray('#card-item');
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(targets, { opacity: 0, y: 100 });

    ScrollTrigger.batch(targets, {
      trigger: ref.current,
      start: 'top 75%',
      end: 'bottom 25%',
      toggleActions: 'play none none reverse',
      invalidateOnRefresh: true,
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.1 }),
    });

    return () => {
      ScrollTrigger.refresh();
    };
  }, []);

  const renderedProducts = useCallback(() => {
    if (isLoading) {
      return (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress color='secondary' />
        </Box>
      );
    } else if (isSuccess) {
      const { doc } = data || {};

      return <CustomCard product={doc} />;
    } else if (isError) {
      return <Typography>An Error has occurred</Typography>;
    }
  }, [isLoading, isSuccess, isError, data]);

  return <ProductWrapper ref={ref}>{renderedProducts()}</ProductWrapper>;
}
