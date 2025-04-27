import { CloseOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';

export default function ClearFilterButton() {
  return (
    <Button color="inherit" size="small" startIcon={<CloseOutlined fontSize="inherit" />}>
      Reset
    </Button>
  );
}
