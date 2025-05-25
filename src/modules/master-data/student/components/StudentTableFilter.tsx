import { PickerValue } from '@mui/x-date-pickers/internals';
import { Box, Stack, SelectChangeEvent } from '@mui/material';
import { DateValidationError, PickerChangeHandlerContext } from '@mui/x-date-pickers';

import SearchInput from '../../../../components/input/SearchInput';
import CustomSelect from '../../../../components/input/CustomSelect';
import DateRangePicker from '../../../../components/input/DateRangePicker';
import ClearFilterButton from '../../../../components/button/ClearFilterButton';

type Props = {
  name: string;
  status: string;
  startDate: PickerValue;
  endDate: PickerValue;
  onSearch: ((even: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined;
  onStatusChange: ((e: SelectChangeEvent) => void) | undefined;
  onStartChange:
    | ((value: PickerValue, context: PickerChangeHandlerContext<DateValidationError>) => void)
    | undefined;
  onEndChange:
    | ((value: PickerValue, context: PickerChangeHandlerContext<DateValidationError>) => void)
    | undefined;
  onClear: () => void;
};

export default function StudentTableFilter({
  name,
  status,
  startDate,
  endDate,
  onSearch,
  onStatusChange,
  onStartChange,
  onEndChange,
  onClear,
}: Props) {
  const statusOptios = [
    {
      label: 'Semua',
      value: 'all',
    },
    { label: 'Aktif', value: 'active' },
    { label: 'Tidak Aktif', value: 'not_active' },
  ];

  return (
    <Stack mb={3} gap={2} direction={{ lg: 'row' }}>
      <SearchInput value={name} onChange={onSearch} />
      <DateRangePicker
        startValue={startDate}
        endValue={endDate}
        stackProps={{ direction: { lg: 'row' } }}
        onStartChange={onStartChange}
        onEndChange={onEndChange}
      />
      <CustomSelect
        value={status}
        options={statusOptios}
        label="Status"
        onChange={onStatusChange}
      />
      <Box
        sx={{
          ml: {
            xs: 'auto',
            lg: 0,
          },
        }}
      >
        <ClearFilterButton onClear={onClear} />
      </Box>
    </Stack>
  );
}
