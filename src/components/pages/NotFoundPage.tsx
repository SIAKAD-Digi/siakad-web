import { Box, Stack, Typography } from '@mui/material';
import BackToHomeButton from '../button/BackToHomeButton';

export default function NotFoundPage() {
  return (
    <Stack alignItems="center" justifyContent="center" height="100vh" textAlign="center">
      <Box>
        <Typography variant="h2" color="text.secondary">
          404
        </Typography>
        <Typography mb={2}>Oops Halaman tidak di temukan!</Typography>
        <BackToHomeButton />
      </Box>
    </Stack>
  );
}
