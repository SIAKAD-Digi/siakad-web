import { DatePicker } from '@mui/x-date-pickers';
import { Stack, StackProps } from '@mui/material';

type Props = {
  stackProps?: StackProps;
};

export default function DateRangePicker({ stackProps }: Props) {
  return (
    <Stack gap={2} {...stackProps}>
      <DatePicker label="Tanggal mulai" slotProps={{ textField: { size: 'small' } }} />
      <DatePicker label="Tanggal akhir" slotProps={{ textField: { size: 'small' } }} />
    </Stack>
  );
}
