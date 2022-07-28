import { ContactForm, Heading } from '../../components';
import { Link } from 'react-router-dom';
import {
  Subheader,
  ContactSection,
  Image,
  ContactWrap,
  CustomLink,
} from './styles';
import { Grid, Container } from '@mui/material';

export default function ContactUsContainer() {
  return (
    <ContactSection>
      <ContactWrap>
        <Container>
          <ContactForm />
        </Container>
      </ContactWrap>
    </ContactSection>
  );
}
