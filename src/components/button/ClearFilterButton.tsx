import { Button } from '@mui/material';
import { Delete } from '@mui/icons-material';

type Props = {
  onClear: () => void;
};

export default function ClearFilterButton({ onClear }: Props) {
  return (
    <Button
      color="inherit"
      size="small"
      startIcon={<Delete fontSize="inherit" />}
      onClick={onClear}
    >
      Reset
    </Button>
  );
}
