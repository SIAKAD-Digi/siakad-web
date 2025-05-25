import { Stack, Typography } from '@mui/material';

import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  return (
    <Stack height="100dvh" alignItems="center" justifyContent="center">
      <Stack gap={2} width="100%" maxWidth={400} px={2}>
        <Typography textAlign="center" fontWeight="600" variant="h4">
          SIAKAD Digi
        </Typography>
        <LoginForm />
      </Stack>
    </Stack>
  );
}
