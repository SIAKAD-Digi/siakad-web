import { Folder } from '@mui/icons-material';
import { Stack, TableRow, TableCell, Typography } from '@mui/material';

export default function TableEmpty() {
  return (
    <TableRow>
      <TableCell colSpan={100}>
        <Stack justifyContent="center" alignItems="center" height={320} width="100%">
          <Folder sx={{ fontSize: 100, color: (theme) => theme.palette.text.disabled }} />
          <Typography color="text.disabled">No data</Typography>
        </Stack>
      </TableCell>
    </TableRow>
  );
}
