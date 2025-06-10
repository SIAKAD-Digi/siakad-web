import { useState, useEffect } from 'react';
import { Box, colors } from '@mui/material';
import { Outlet, useLocation } from 'react-router';

import Main from './Main';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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
