import { EditOutlined, DeleteOutline, VisibilityOutlined } from '@mui/icons-material';
import { Stack, IconButton } from '@mui/material';

export default function ActionTableButton() {
  return (
    <Stack direction="row" gap={2}>
      <IconButton size="small" color="warning">
        <VisibilityOutlined />
      </IconButton>
      <IconButton size="small" color="success">
        <EditOutlined />
      </IconButton>
      <IconButton size="small" color="error">
        <DeleteOutline />
      </IconButton>
    </Stack>
  );
}
