import { Box, Stack, Typography } from '@mui/material';
import BackToHomeButton from '../button/BackToHomeButton';

export default function ForbidenPage() {
  return (
    <Stack alignItems="center" justifyContent="center" height="100vh" textAlign="center">
      <Box>
        <Typography variant="h2" color="text.secondary">
          403
        </Typography>
        <Typography mb={2}>Oops Kamu tidak memiliki akses untuk halaman ini!</Typography>
        <BackToHomeButton />
      </Box>
    </Stack>
  );
}
