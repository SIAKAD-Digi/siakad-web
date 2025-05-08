import MenuItem from '@mui/material/MenuItem';
import { Box, InputLabel, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Option = { label: string; value?: string | number };

type Props = {
  label?: string;
  value?: string;
  options: Option[];
  onChange?: (even: SelectChangeEvent) => void;
};

export default function CustomSelect({ label, value, options, onChange }: Props) {
  return (
    <Box>
      <FormControl sx={{ minWidth: 100 }} fullWidth>
        <InputLabel size="small" id="demo-simple-select-label">
          {label}
        </InputLabel>
        <Select
          fullWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size="small"
          value={value}
          label={label}
          onChange={onChange}
        >
          {options.map((option) => (
            <MenuItem key={option.label} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
