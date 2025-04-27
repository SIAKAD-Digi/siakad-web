import { Stack, LinearProgress } from '@mui/material';

export default function PageProgress() {
  return (
    <Stack
      position="relative"
      minWidth="100%"
      minHeight="80vh"
      justifyContent="center"
      alignItems="center"
    >
      <LinearProgress sx={{ width: 200 }} />
    </Stack>
  );
}
