import { useState, useCallback, useEffect } from 'react';
import {
  ContactFormSection,
  FormWrap,
  CustomInput,
  CustomLink,
  FormContainer,
} from './styles';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Grid,
  Button,
  Box,
  Stack,
  Typography,
} from '@mui/material';
import { useContactUsMutation } from '../../features/contact/contactSlice';

export default function ContactForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    inquiry: '',
  });
  const [error, setError] = useState('');

  const [contactus, { isSuccess }] = useContactUsMutation();

  const updateFormData = useCallback(
    type => event => {
      setFormData({ ...formData, [type]: event.target.value });
    },
    [formData]
  );

  useEffect(() => {
    if (isSuccess) {
      setFormData({
        email: '',
        name: '',
        inquiry: '',
      });
      navigate(from, { replace: true });
    }
  }, [isSuccess, setFormData, navigate, from]);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await contactus(formData).unwrap();
    } catch (err) {
      setError('Contact Form Failed to Send');
    }
  };

  return (
    <ContactFormSection>
      <FormContainer>
        <FormWrap>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant='header3' sx={{ fontSize: '6.5rem' }}>
              <span>ASK</span> WHAT YOUR <span>INTEREST</span> ARE
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', mt: 2.5 }}>
            {error && (
              <Typography
                variant='body1'
                sx={{ color: 'primary.main', textAlign: 'center' }}>
                {error}
              </Typography>
            )}
          </Box>
          <Box sx={{ textAlign: 'center', mt: 2.5 }}>
            <Typography variant='body1'>
              If our <CustomLink to='faqs'>FAQs</CustomLink> didn’t provide the
              answer you’re looking for, we’re here and happy to help! Just fill
              out the form below.
            </Typography>
          </Box>
          <Box sx={{ mt: 7.5 }}>
            <Stack
              spacing={4}
              component='form'
              onSubmit={handleSubmit}
              noValidate>
              <CustomInput
                fullWidth
                id='name'
                label='Name'
                name='name'
                onChange={updateFormData('name')}
                value={formData.name}
                inputProps={{
                  autoComplete: 'off',
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <CustomInput
                margin='normal'
                fullWidth
                id='user'
                label='Email Address'
                onChange={updateFormData('email')}
                value={formData.email}
                autoFocus
                inputProps={{
                  autoComplete: 'off',
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <CustomInput
                fullWidth
                multiline
                rows={8}
                id='inquiry'
                label='Inquiry'
                name='inquiry'
                onChange={updateFormData('inquiry')}
                value={formData.inquiry}
                inputProps={{
                  autoComplete: 'off',
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <Button variant='main' type='submit'>
                Submit
              </Button>

              <Grid item xs={12} sx={{ textAlign: 'center', pt: 2.5 }}>
                <CustomLink to='/' variant='body2'>
                  Cancel
                </CustomLink>
              </Grid>
            </Stack>
          </Box>
        </FormWrap>
      </FormContainer>
    </ContactFormSection>
  );
}
