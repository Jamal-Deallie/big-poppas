import {
  CTASection,
  Heading,
  Subheader,
  ContentContainer,
  Form,
  EmailInput,
  Outline,
} from './styles';
import { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useNewsLetterMutation } from '../../features/newsletter/newsLetterSlice';
export default function CTAContainer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [newsLetter, { isSuccess }] = useNewsLetterMutation();

  const handleChange = event => {
    setEmail(event.target.value);
  };

  if (isSuccess) {
    setEmail('');
  }

  const handleSubmit = async e => {
    e.preventDefault();

    if (email) {
      try {
        await newsLetter({
          email,
        }).unwrap();
      } catch (err) {
        setError('Submission Failed');
      }
    }
  };

  return (
    <CTASection>
      <ContentContainer>
        <Heading>
          JOIN OUR <Outline>NEWSLETTER </Outline>
        </Heading>
        {error && (
          <Box>
            <Typography variant='body2' sx={{ color: 'secondary.main' }}>
              {error}
            </Typography>
          </Box>
        )}
        <Typography color='secondary' sx={{ textAlign: 'center' }}>
          Sign up to stay up to date with the latest announcements.
        </Typography>
        <Form onSubmit={handleSubmit} method='POST'>
          <EmailInput
            type='email'
            label='Email Address'
            variant='standard'
            fullWidth
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <Button
            type='submit'
            fullWidth
            variant='secondary'
            sx={{ mt: '2.5rem' }}>
            Submit
          </Button>
        </Form>
      </ContentContainer>
    </CTASection>
  );
}

// fullWidth
// id='email'
// label='Email Address'
// name='email'
// onChange={e => setEmail(e.target.value)}
// value={email}
// inputProps={{
//   autoComplete: 'off',
// }}
// InputLabelProps={{
//   shrink: true,
// }}
