import React, { useState, useCallback, useEffect } from 'react';
import {
  CustomButton,
  LoginSection,
  FormContainer,
  CustomInput,
  CustomLink,
  LinkContainer,
  FormWrap,
} from './styles';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Stack,
  Button,
  InputAdornment,
  IconButton,
  Box,
  Typography,
  Container,
} from '@mui/material';
import { Heading } from '..';
import { useSignInUserMutation } from '../../features/user/userSlice';
import { setCredentials } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const from = location.state?.from?.pathname || '/';
  const [formData, setFormData] = useState({
    password: '',
    email: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(showPassword => !showPassword);
  };

  const updateFormData = useCallback(
    type => event => {
      setFormData({ ...formData, [type]: event.target.value });
    },
    [formData]
  );

  const [signInUser, { isLoading, isSuccess, data }] = useSignInUserMutation();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await signInUser(formData).unwrap();
    } catch (err) {
      setError('Sign In Failed');
    }
  };

  
  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setCredentials({ token: data.token, name: data.user.firstName })
      );
      setFormData({
        password: '',
        email: '',
      });
      navigate(from, { replace: true });
    }
  }, [isSuccess, dispatch, setCredentials, setFormData, navigate]);

  return (
    <LoginSection>
      <Container sx={{ position: 'relative', height: '60rem' }}>
        <FormWrap>
          <Box sx={{ ml: 9 }} fullWidth>
            <Heading firstLine={'SIGN IN'} />
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

          <Box sx={{ p: 2 }}>
            <Stack
              spacing={4}
              component='form'
              onSubmit={handleSubmit}
              noValidate>
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
              <Button variant='main' type='submit'>
                Submit
              </Button>
              <LinkContainer>
                <CustomLink to='/forgotpassword'>Forgot Password</CustomLink>
                <Typography>|</Typography>
                <CustomLink to='/signup'>Create An Account</CustomLink>
              </LinkContainer>
            </Stack>
          </Box>
        </FormWrap>
      </Container>
    </LoginSection>
  );
}
