import { useState } from 'react';
import { CustomInput, Form, CustomButton, CustomLink } from './styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { Typography, Grid, Container } from '@mui/material';
import { useContactUsMutation } from '../../features/contact/contactSlice';

export default function ContactForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formValue, setFormValue] = useState({
    email: '',
    name: '',
    inquiry: '',
  });

  const [error, setError] = useState('');
  const from = location.state?.from?.pathname || '/';
  const [contactus, { isSuccess }] = useContactUsMutation();

  const handleChange = event => {
    const { name, value } = event.target;
    setFormValue(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  if (isSuccess) {
    navigate(from, { replace: true });
  }

  const canSave = [formValue.name, formValue.email, formValue.message].every(
    Boolean
  );

  const handleSubmit = async e => {
    e.preventDefault();

    if (canSave) {
      try {
        await contactus({
          ...formValue,
        });
      } catch (err) {
        if (!err?.originalStatus) {
          setError('Contact Form Failed to Send');
        }
      }
    }
  };
  return (
    <Container>
      <Form component='form' onSubmit={handleSubmit}>
        <Grid container rowSpacing={5}>
          <Grid item xs={12}>
            <CustomInput
              name='name'
              fullWidth
              id='outlined-required'
              label='Name'
              onChange={handleChange}
              value={formValue.name}
              inputProps={{
                autoComplete: 'off',
              }}
              autoFocus
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <CustomInput
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              onChange={handleChange}
              value={formValue.email}
              inputProps={{
                autoComplete: 'off',
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              multiline
              rows={8}
              fullWidth
              type='text'
              id='message'
              label='Message'
              name='message'
              onChange={handleChange}
              value={formValue.message}
              inputProps={{
                autoComplete: 'off',
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
        <CustomButton type='submit' fullWidth>
          Submit
        </CustomButton>

        <Grid item xs={12} sx={{ textAlign: 'center', pt: 5.5 }}>
          <CustomLink to='/'>Cancel</CustomLink>
        </Grid>
      </Form>
    </Container>
  );
}
