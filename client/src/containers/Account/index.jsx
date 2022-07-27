import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import {
  TabContainer,
  CustomTab,
  AccountSection,
  CustomTabs,
  PanelWrap,
  HeadingWrap,
  AccountOuter,
  CustomDivider,
} from './styles';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/auth/authSlice';
import { LogoutButton, Panels } from '../../components';

export default function FormContainer() {
  const [index, setIndex] = useState(0);
  const onTabClicked = (event, index) => {
    setIndex(index);
  };

  const name = useSelector(selectUser);

  return (
    <AccountSection>
      <AccountOuter>
        <HeadingWrap>
          {name && (
            <>
              <Typography variant='header3'>
                <span> Hello</span> {`${name}`}
              </Typography>
            </>
          )}
          <Box
            sx={{
              width: '35rem',
              mt: '4.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <LogoutButton />
          </Box>
          <CustomDivider />
        </HeadingWrap>
        <CustomDivider />
        <TabContainer>
          <CustomTabs value={index} onChange={onTabClicked}>
            <CustomTab label='Account Details' />
            <CustomTab label='Order History' />
            <CustomTab label='Update Profile' />
          </CustomTabs>
        </TabContainer>
        <PanelWrap>
          <Panels value={index} index={0}>
            <Typography variant='body2' color='primary'>
              Account Details Test
            </Typography>
          </Panels>
          <Panels value={index} index={1}>
            <Typography variant='body2' color='primary'>
              Order History Test
            </Typography>
          </Panels>
          <Panels value={index} index={2}>
            <Typography variant='body2' color='primary'>
              Update Profile Test
            </Typography>
          </Panels>
        </PanelWrap>
      </AccountOuter>
    </AccountSection>
  );
}
