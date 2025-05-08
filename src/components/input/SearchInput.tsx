import { TextField } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

import { SEARCH_PLACEHOLDER } from '../../constant/input';

type Props = {
  placeholder?: string;
  value?: string;
  onChange?: (even: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export default function SearchInput({ placeholder = SEARCH_PLACEHOLDER, value, onChange }: Props) {
  return (
    <TextField
      value={value}
      type="search"
      placeholder={placeholder}
      slotProps={{
        input: {
          startAdornment: <SearchOutlined sx={{ color: 'text.disabled' }} />,
        },
      }}
      onChange={onChange}
    />
  );
}
