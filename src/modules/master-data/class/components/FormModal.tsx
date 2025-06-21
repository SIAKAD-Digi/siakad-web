import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import {
  Button,
  Dialog,
  TextField,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@mui/material';

import { ErrorResponse } from '../../../../types/common-response.types';

type Props = {
  open: boolean;
  title: string;
  name: string;
  loading?: boolean;
  error: unknown;
  setName: Dispatch<SetStateAction<string>>;
  onAction: () => void;
  onClose: () => void;
};

function FormModal({
  open,
  title,
  name,
  loading = false,
  error,
  onAction,
  onClose,
  setName,
}: Props) {
  const response: ErrorResponse = axios.isAxiosError(error) ? error.response?.data : undefined;
  const errorName = response?.errors?.name;

  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField
          value={name}
          error={Boolean(errorName)}
          onChange={(e) => setName(e.target.value)}
          sx={{ mt: 2 }}
          label="Nama"
          helperText={Boolean(errorName) && errorName}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Batal
        </Button>
        <Button color="primary" loading={loading} onClick={onAction}>
          Simpan
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormModal;
