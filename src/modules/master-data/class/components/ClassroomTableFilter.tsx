import { Box, Stack } from '@mui/material';
import { PickerValue } from '@mui/x-date-pickers/internals';
import { DateValidationError, PickerChangeHandlerContext } from '@mui/x-date-pickers';

import SearchInput from '../../../../components/input/SearchInput';
import DateRangePicker from '../../../../components/input/DateRangePicker';
import ClearFilterButton from '../../../../components/button/ClearFilterButton';

type Props = {
  name: string;
  startDate: PickerValue;
  endDate: PickerValue;
  onSearch: ((even: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined;
  onStartChange:
    | ((value: PickerValue, context: PickerChangeHandlerContext<DateValidationError>) => void)
    | undefined;
  onEndChange:
    | ((value: PickerValue, context: PickerChangeHandlerContext<DateValidationError>) => void)
    | undefined;
  onClear: () => void;
};

export default function ClassroomTableFilter({
  name,
  startDate,
  endDate,
  onSearch,
  onStartChange,
  onEndChange,
  onClear,
}: Props) {
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
