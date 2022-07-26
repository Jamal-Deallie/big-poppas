import {
  CTASection,
  Heading,
  Subheader,
  ContentContainer,
  Form,
  EmailInput,
  Outline,
  CustomButton,
} from './styles';
import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useNewsLetterMutation } from '../../features/newsletter/newsLetterSlice';
export default function CTAContainer() {
  // const emailInputElement = useRef();

  // const formHandler = useCallback(
  //   () => event => {
  //     event.preventDefault();

  //     const data = {
  //       email: emailInputElement.current?.value,
  //     };

  //   },
  //   []
  // );

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
        <Subheader>
          Sign up to stay up to date with the latest announcements.
        </Subheader>
        <Form onSubmit={handleSubmit} method='POST'>
          <EmailInput
            type='email'
            label='Email Address'
            variant='standard'
            fullWidth
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <CustomButton type='submit' fullWidth>
            Submit
          </CustomButton>
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
