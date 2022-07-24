import React, { useState, useCallback } from 'react';
import {
  CustomButton,
  RegisterSection,
  FormWrap,
  CustomInput,
  Link,
  RegisterWrap,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { FormControl, Typography } from '@mui/material';
import { Heading } from '../../components';
import { useForgotPasswordMutation } from '../../features/user/userSlice';
import { setUser } from '../../features/auth/authSlice';

const initialState = {
  email: '',
};
export default function ForgotPassword() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const { email } = formData;

  const updateFormData = useCallback(
    type => event => {
      setFormData({ ...formData, [type]: event.target.value });
    },
    [formData]
  );

  const [forgotPassword, { isLoading, isSuccess, isError, data }] =
    useForgotPasswordMutation();

  const canSave = [email].every(Boolean) && !isLoading;

  const handleSubmit = async () => {
    if (canSave) {
      try {
        forgotPassword(formData).unwrap();
        setFormData({
          email: '',
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
      <Heading firstLine={'Forgot'} secondLine={'Password ?'} />
      <Typography>
        Please enter your email address below. You will receive a link to reset
        your password.
      </Typography>
      <RegisterWrap onSubmit={handleSubmit}>
        <FormWrap>
          <FormControl variant='standard'>
            <CustomInput
              id='outlined-basic'
              variant='standard'
              label='Email'
              onChange={updateFormData('email')}
              value={formData.email}
              type='email'
            />
          </FormControl>

          <CustomButton type='submit'>Submit</CustomButton>
          <Link onClick={() => navigate('/')}>Return to Store</Link>
        </FormWrap>
      </RegisterWrap>
    </RegisterSection>
  );
}
