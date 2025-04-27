import { Paper } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function DashboardContent({ children }: Props) {
  return (
    <Paper elevation={0} sx={{ p: 2 }}>
      {children}
    </Paper>
  );
}
