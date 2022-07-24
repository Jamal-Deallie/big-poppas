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
import { useRef, useCallback } from 'react';

export default function CTAContainer() {
  const emailInputElement = useRef();

  const formHandler = useCallback(
    () => event => {
      event.preventDefault();

      const data = {
        email: emailInputElement.current?.value,
      };

   
    },
    []
  );

  return (
    <CTASection>
      <ContentContainer>
        <Heading>
          JOIN OUR <Outline>NEWSLETTER </Outline>
        </Heading>
        <Subheader>
          Sign up to stay up to date with the latest announcements.
        </Subheader>
        <Form sx={{ m: 1, width: '15ch' }}>
          <EmailInput
            id='outlined-uncontrolled'
            type='email'
            label='Email'
            variant='standard'
            color='primary'
            ref={emailInputElement}
          />
          <CustomButton>Submit</CustomButton>
        </Form>
      </ContentContainer>
    </CTASection>
  );
}
