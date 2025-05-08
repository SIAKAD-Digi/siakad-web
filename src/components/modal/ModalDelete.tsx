import { Box, Modal, Stack, Button, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
type Props = {
  id?: string;
  name?: string;
  open: boolean;
  onClose: () => void;
  onDelete: (value: string) => void;
};
export default function ModalDelete({ id, name, open, onClose, onDelete }: Props) {
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6">
            Yakin ingin menghapus data <span style={{ color: 'blue' }}>{name}</span> ?
          </Typography>
          <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 4 }}>
            <Button variant="outlined" color="inherit" onClick={onClose}>
              Tidak
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                onDelete(id ?? '');
                onClose();
              }}
            >
              Ya
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
