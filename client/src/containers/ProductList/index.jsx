import { useCallback } from 'react';
import {
  selectAllProducts,
  useGetProductsQuery,
} from '../../features/product/productSlice';
import { useSelector } from 'react-redux';
import { CustomCard } from '../../components';
import { Box, Typography, CircularProgress } from '@mui/material';
import { ProductWrapper } from './styles';
import useRefSelector from '../../hooks/useRefSelector';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ProductListContainer() {
  const { isLoading, isSuccess, isError } = useGetProductsQuery();
  const loadedProducts = useSelector(selectAllProducts);
  const [q, ref] = useRefSelector();

  useEnhancedEffect(() => {
    let targets = gsap.utils.toArray(q('#card-item'));
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(targets, { opacity: 0, y: 100 });

    ScrollTrigger.batch(targets, {
      trigger: ref.current,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reset',
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
          <CircularProgress />
        </Box>
      );
    } else if (isSuccess) {
      return <CustomCard product={loadedProducts} />;
    } else if (isError) {
      return (
        <Typography variant='header1' sx={{ color: 'secondary.light' }}>
          An Error has occurred
        </Typography>
      );
    }
  }, [isLoading, isSuccess, isError, loadedProducts]);

  return <ProductWrapper ref={ref}>{renderedProducts()}</ProductWrapper>;
}
