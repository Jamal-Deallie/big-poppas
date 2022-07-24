import { ContentContainer, Image, HeadingContainer, Text } from './styles';
import { useNavigate } from 'react-router';
import { ATCButton } from '../../components';
import { Box } from '@mui/material';
export default function CustomCard({ product }) {
  let navigate = useNavigate();

  return (
    <>
      {product?.map(item => {
        return (
          <ContentContainer key={item._id} id='card-item'>
            <Box onClick={() => navigate(`/${item._id}`)}>
              <HeadingContainer>
                <Text>${item.price}</Text>
                <Text>{item.name}</Text>
              </HeadingContainer>

              <Image src={item.image} alt={item.name} />
            </Box>
            <ATCButton items={item} />
          </ContentContainer>
        );
      })}
    </>
  );
}
