import { ContentContainer, Image, HeadingContainer, Text } from './styles';
import { Link } from 'react-router-dom'
import { ATCButton } from '../../components';
import { Box } from '@mui/material';
export default function CustomCard({ product }) {


  return (
    <>
      {product?.map(item => {
        return (
          <ContentContainer key={item._id} id='card-item'>
            <Link to={`/menu/${item._id}`}>
              <HeadingContainer>
                <Text>${item.price}</Text>
                <Text>{item.name}</Text>
              </HeadingContainer>

              <Image src={item.image} alt={item.name} />
            </Link>
            <ATCButton items={item} />
          </ContentContainer>
        );
      })}
    </>
  );
}
