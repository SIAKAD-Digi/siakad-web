import { useState } from 'react';
import { Outlet } from 'react-router';
import { Box, colors } from '@mui/material';

import Main from './Main';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box bgcolor={colors.grey[100]} minHeight="100vh" pt={12}>
      <Navbar setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
      <Main>
        <Outlet />
      </Main>
    </Box>
  );
};
