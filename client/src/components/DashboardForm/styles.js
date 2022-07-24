import { styled } from '@mui/material/styles';
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  FormControl
} from '@mui/material';

export const ForgotPasswordSection = styled('div')(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  padding: '12.5rem 0',
  backgroundColor: theme.palette.warning.main,
}));

export const CustomButton = styled(Button)`
  font-family: 'open Sans', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #1c1c1c;
  cursor: pointer;
  border: 3px solid;
  padding: 1.2rem 1rem;
  background: #e9e7dc;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }
`;

export const FormWrap = styled(Container)`
  padding-top: 7.5rem;
  width: 45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
`;

export const CustomInput = styled(TextField)({
  '& label.Mui-focused': {
    color: ' #e9e7dc',
  },
  '& label': {
    color: ' #1c1c1c',
    fontFamily: 'open-sans, sans-serif',
    fontSize: 18,
    margin: 'dense',
  },
  '&& .MuiInput-underline:hover:before': {
    borderBottomColor: '#e9e7dc',
  },
  '& .MuiInput-underline': {
    marginTop: 25,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#1c1c1c',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: ' #1c1c1c',
  },
  '& .MuiInput-underline:focused': {
    borderBottomColor: ' #e9e7dc',
  },
});

export const CustomSelect = styled(Select)(({ theme }) => ({



  '& .MuiSelect-standard': {
    padding: '10px 10px',
    fontFamily: 'open-sans',
    fontSize: 16,
  },
  '&& .MuiSelect-standard:hover': {
    borderBottom: '2px solid #e9e7dc',
    fontSize: 16,
  },

  // '&& .MuiSelect-standard:hover:after': {
  //   borderBottom: '2px solid #e9e7dc',
  // },
  // '&& .MuiSelect:hover:after': {
  //   borderBottom: '2px solid #e9e7dc',
  // },
  // '&& .MuiSelect-standard:hover:before': {
  //   borderBottom: '2px solid #e9e7dc',
  // },

  // '&& .MuiSelect-root:hover:before': {
  //   borderBottom: '2px solid #e9e7dc',
  // },
  // '&& .MuiSelect-root:hover': {
  //   borderBottom: '2px solid #e9e7dc',
  // },

}));


export const FormWrapper = styled(FormControl)({
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderColor: "#e9e7dc"
  }
})

export const Link = styled('p')`
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    color: '#e9e7dc';
  }
`;
