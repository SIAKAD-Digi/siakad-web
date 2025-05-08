import { Stack, IconButton } from '@mui/material';
import { EditOutlined, DeleteOutline, VisibilityOutlined } from '@mui/icons-material';

type Props = {
  onClickDetail?: () => void;
  onClickEdit?: () => void;
  onClickDelete?: () => void;
};
export default function ActionTableButton({ onClickDetail, onClickEdit, onClickDelete }: Props) {
  return (
    <Stack direction="row" gap={2}>
      <IconButton size="small" color="warning" onClick={onClickDetail}>
        <VisibilityOutlined />
      </IconButton>
      <IconButton size="small" color="success" onClick={onClickEdit}>
        <EditOutlined />
      </IconButton>
      <IconButton size="small" color="error" onClick={onClickDelete}>
        <DeleteOutline />
      </IconButton>
    </Stack>
  );
}
