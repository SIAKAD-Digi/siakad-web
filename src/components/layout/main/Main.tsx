import React from 'react';
import { Box, useTheme } from '@mui/material';

import useMobileQuery from '../../../hooks/useMobileQuery';

type ContentProps = {
  children: React.ReactNode;
};

const DashboardContent = ({ children }: ContentProps) => {
  const theme = useTheme();
  const isMobile = useMobileQuery();
  return (
    <Box
      component="main"
      sx={{
        ml: isMobile ? 1 : 39,
        mr: isMobile ? 1 : 2,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }}
    >
      {children}
    </Box>
  );
};

export default DashboardContent;
