import { Button, Dialog, DialogTitle, DialogActions } from '@mui/material';

type Props = {
  open: boolean;
  title: string;
  loading?: boolean;
  onAction: () => void;
  onClose: () => void;
};

function ConfirmationModal({ open, title, loading = false, onAction, onClose }: Props) {
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Batal
        </Button>
        <Button color="error" loading={loading} onClick={onAction}>
          Hapus
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationModal;
