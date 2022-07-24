import { CustomCard } from '../../components';
import { ProductWrapper } from './styles';
import {
  useGetProductsQuery,
  selectAllProducts,
} from '../../features/product/productSlice';
import { useSelector } from 'react-redux';

export default function ProductList({ items }) {
  return (
    <ProductWrapper>
      <CustomCard items={items} />
    </ProductWrapper>
  );
}
