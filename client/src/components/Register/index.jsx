import React, { useState, useCallback } from 'react';
import {
  CustomButton,
  RegisterSection,
  FormWrap,
  CustomInput,
  Link,
  RegisterWrap,
  CustomLink,
  FormContainer,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { Grid, Button, InputAdornment, IconButton, Box } from '@mui/material';
import { Heading } from '../../components';
import { useSignUpUserMutation } from '../../features/user/userSlice';
import { setUser } from '../../features/auth/authSlice';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    passwordConfirm: '',
  });
  const { name, password, email, passwordConfirm } = formData;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(showPassword => !showPassword);
  };

  const updateFormData = useCallback(
    type => event => {
      setFormData({ ...formData, [type]: event.target.value });
    },
    [formData]
  );

  const [signUpUser, { isLoading, isSuccess, isError, data }] =
    useSignUpUserMutation();

  const canSave =
    [name, email, password, passwordConfirm].every(Boolean) && !isLoading;

  const handleSubmit = async () => {
    if (canSave) {
      try {
        signUpUser(formData).unwrap();
        setFormData({
          name: '',
          password: '',
          email: '',
          passwordConfirm: '',
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (isSuccess) {
    console.log(data);
  } else if (isError) {
    console.error('An Error has occurred');
  }
  return (
    <RegisterSection>
      <FormContainer>
        <Heading firstLine={'Register'} />
        <Box sx={{ mt: 7.5 }} component='form' onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <CustomInput
                name='firstName'
                fullWidth
                id='outlined-required'
                label='First Name'
                onChange={updateFormData('firstName')}
                value={formData.firstName}
                inputProps={{
                  autoComplete: 'off',
                }}
                autoFocus
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInput
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                onChange={updateFormData('lastName')}
                value={formData.lastName}
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
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                onChange={updateFormData('email')}
                value={formData.email}
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
                fullWidth
                label='Password'
                id='outlined-start-adornment'
                type={showPassword ? 'text' : 'password'}
                onChange={updateFormData('password')}
                value={formData.password}
                name='password'
                autoComplete='new-password'
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='start'>
                      <IconButton
                        onClick={handleClickShowPassword}
                        aria-label='toggle password visibility'
                        sx={{
                          pointerEvents: 'click',
                        }}>
                        {showPassword ? (
                          <VisibilityOff fontSize='large' />
                        ) : (
                          <Visibility fontSize='large' />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomInput
                fullWidth
                label='Password Confirm'
                id='outlined-start-adornment-confirm'
                type={showPassword ? 'text' : 'password'}
                onChange={updateFormData('passwordConfirm')}
                value={formData.passwordConfirm}
                name='password'
                autoComplete='new-password'
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='start'>
                      <IconButton
                        onClick={handleClickShowPassword}
                        aria-label='toggle password visibility'
                        sx={{
                          pointerEvents: 'click',
                        }}>
                        {showPassword ? (
                          <VisibilityOff fontSize='large' />
                        ) : (
                          <Visibility fontSize='large' />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: '2.5rem' }}>
            <CustomButton type='submit'>Submit</CustomButton>
          </Box>

          <Grid item xs={12} sx={{ textAlign: 'center', pt: 5.5 }}>
            <CustomLink to='/signin' variant='body2'>
              Already have an account? Sign in
            </CustomLink>
          </Grid>
        </Box>
      </FormContainer>
    </RegisterSection>
  );
}
