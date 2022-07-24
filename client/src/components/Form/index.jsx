import React, { useState, useCallback } from 'react';
import { Login, ForgotPassword, Register } from '../../components';
import { FormSection} from './styles';
import { useLocation } from 'react-router-dom';
const initialState = {
  name: '',
  password: '',
  email: '',
  passwordConfirm: '',
};

export default function Form() {
  
  const [formData, setFormData] = useState(initialState);
  let location = useLocation();
  const formType = location.pathname.substring(1);



  const updateFormData = useCallback(
    type => event => {
      setFormData({ ...formData, [type]: event.target.value });
    },
    [formData]
  );


  const formHandler = useCallback(
    () => event => {
      event.preventDefault();

   
    },
    [formData]
  );

  function renderForm() {
    switch (formType) {
      case 'login':
        return (
          <Login
            formData={formData}
            setFormData={setFormData}
            updateFormData={updateFormData}
          />
        );
      case 'register':
        return (
          <Register
            formData={formData}
            setFormData={setFormData}
            updateFormData={updateFormData}
          />
        );
      case 'forgotPassword':
        return (
          <ForgotPassword
            formData={formData}
            setFormData={setFormData}
            updateFormData={updateFormData}
          />
        );
      default:
        return null;
    }
  }
  return <FormSection>{renderForm()}</FormSection>;
}
