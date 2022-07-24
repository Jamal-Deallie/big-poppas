import React, { useState, useCallback, useEffect } from 'react';
import {
  CustomButton,
  ForgotPasswordSection,
  FormWrap,
  CustomInput,
  CustomSelect,
  FormWrapper
} from './styles';
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Heading } from '../../components';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const initialState = {
  name: '',
  slug: '',
  description: '',
  price: '',
  image: '',
  spicy: '',
};

export default function DashboardForm() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialState);
  const { password, email } = formData;

  const updateFormData = useCallback(
    type => event => {
      setFormData({ ...formData, [type]: event.target.value });
    },
    [formData]
  );

  // const [addProduct, { isLoading, isSuccess, isError, data }] =
  //   useAddProductMutation();

  // const canSave =[name, slug, description, price, image, spicy].every(Boolean) && !isLoading;

  // const handleSubmit = async () => {
  //   // if (canSave) {
  //   try {
  //     await addProduct(formData).unwrap();
  //     setFormData({
  //       name: '',
  //       slug: '',
  //       description: '',
  //       price: '',
  //       image: '',
  //       spicy: '',
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   // }
  // };

  // if (isSuccess) {
  //   console.log(data);
  // } else if (isError) {
  //   console.error('An Error has occurred');
  // }

  return (
    <ForgotPasswordSection>
      <Heading firstLine={'Dashboard'} />
      <FormWrap>
        <FormControl variant='standard'>
          <CustomInput
            variant='standard'
            label='Email'
            onChange={updateFormData('email')}
            value={formData.email}
            type='email'
          />
        </FormControl>
        <FormControl variant='standard'>
          <CustomInput
            variant='standard'
            onChange={updateFormData('password')}
            value={formData.password}
            type='password'
            label='Password'
          />
        </FormControl>
        <FormControl variant='standard'>
          <CustomInput
            variant='standard'
            onChange={updateFormData('password')}
            value={formData.password}
            type='password'
            label='Password'
          />
        </FormControl>
        <FormControl variant='standard'>
          <CustomInput
            variant='standard'
            onChange={updateFormData('password')}
            value={formData.password}
            type='password'
            label='Password'
          />
        </FormControl>
        <FormWrapper variant='standard'>
          <InputLabel id='demo-simple-select-standard-label'>Spicy</InputLabel>
          <CustomSelect
            id='demo-simple-select-standard-label'
            label='Spicy'
            value={formData.spicy}
            onChange={updateFormData('spicy')}>
            <MenuItem value={true} sx={{ fontSize: 16 }}>
              True
            </MenuItem>
            <MenuItem value={false} sx={{ fontSize: 16 }}>
              False
            </MenuItem>
          </CustomSelect>
        </FormWrapper>
        <CustomButton onClick={null}>Submit</CustomButton>
      </FormWrap>
    </ForgotPasswordSection>
  );
}
