import { ContactForm, Heading } from '../../components';
import { Link } from 'react-router-dom';
import {
  Subheader,
  ContactSection,
  Image,
  ContactWrap,
  GridItem,
} from './styles';
import { Grid, Container } from '@mui/material';

export default function ContactUsContainer() {
  return (
    <ContactSection>
      <Heading firstLine={'ask what your'} secondLine={'interests are'} />

      <ContactWrap>
        <Subheader>
          If our <Link to='faqs'>FAQs</Link> didn’t provide the answer you’re
          looking for, we’re here and happy to help! Just fill out the form
          below.
        </Subheader>
        <Container>
          <ContactForm />
        </Container>
      </ContactWrap>
    </ContactSection>
  );
}
