import { ContactForm } from '../../components';
import { Link } from 'react-router-dom';
import {
  Icon,
  Subheader,
  SocialContainer,
  ContactContainer,
  Outline,
  Heading,
  IconWrap,
  ContactDetailsSection,
  Text,
  Title,
  GridItem,
} from './styles';

import { Grid, Container } from '@mui/material';

export default function ContactDetailsContainer() {
  return (
    <ContactDetailsSection>
      <Heading>
        same number, <Outline>same hood</Outline>
      </Heading>
      <ContactContainer container>
        <GridItem item md={4}>
          <IconWrap>
            <Icon src='/images/icons/telephone.svg' alt='telephone' />
          </IconWrap>

          <br />
          <Text>123-222-3333</Text>
        </GridItem>
        <GridItem item md={4}>
          <IconWrap>
            <Icon src='/images/icons/email.svg' alt='email' />
          </IconWrap>

          <br />
          <Text> info@bigpoppas.com</Text>
        </GridItem>
        <GridItem item md={4}>
          <IconWrap>
            <Icon src='/images/icons/address.svg' alt='address' />
          </IconWrap>

          <br />
          <Text>
            26 St James Pl <br />
            Brooklyn, NY 11205
          </Text>
        </GridItem>
      </ContactContainer>
    </ContactDetailsSection>
  );
}
