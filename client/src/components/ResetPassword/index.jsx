import React, { useState, useCallback, useEffect } from 'react';
import {
  CustomButton,
  ForgotPasswordSection,
  FormWrap,
  CustomInput,
  Link,
} from './styles';
import { FormControl } from '@mui/material';
import { Heading } from '../../components';
import { useNavigate } from 'react-router-dom';
import {
  useSignUpUserMutation,
  useSignInUserMutation,
} from '../../features/user/userSlice';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const initialState = {
  password: '',
  passwordConfirm: '',
};

export default function ResetPassword() {

  const [formData, setFormData] = useState(initialState);
  const [signUpUser] = useSignUpUserMutation();
  const dispatch = useDispatch();
 
  let location = useLocation();
  let navigate = useNavigate();
  const formType = location.pathname.substring(1).toLowerCase();

  const updateFormData = useCallback(
    type => event => {
      setFormData({ ...formData, [type]: event.target.value });
    },

    [formData]
  );

  console.log(formData);



  return (
    <ForgotPasswordSection>
      <Heading firstLine={'Reset'} secondLine={'Password'} />
      <FormWrap>
        <FormControl variant='standard'>
          <CustomInput
            id='outlined-basic'
            variant='standard'
            onChange={updateFormData('password')}
            value={formData.password}
            type='password'
            label='Password'
          />
        </FormControl>
        <FormControl variant='standard'>
          <CustomInput
            id='outlined-basic'
            variant='standard'
            onChange={updateFormData('passwordConfirm')}
            value={formData.passwordConfirm}
            type='passwordConfirm'
            label='Password Confirm'
          />
        </FormControl>

        <CustomButton onClick={null}>Submit</CustomButton>
        <Link onClick={() => navigate('/')}>Cancel</Link>
      </FormWrap>
    </ForgotPasswordSection>
  );
}
