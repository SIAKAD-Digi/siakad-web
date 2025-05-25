import dayjs from 'dayjs';
import { Stack, StackProps } from '@mui/material';
import { PickerValue } from '@mui/x-date-pickers/internals';
import { DatePicker, DateValidationError, PickerChangeHandlerContext } from '@mui/x-date-pickers';

type Props = {
  stackProps?: StackProps;
  startValue?: PickerValue;
  endValue?: PickerValue;
  onStartChange?:
    | ((value: PickerValue, context: PickerChangeHandlerContext<DateValidationError>) => void)
    | undefined;
  onEndChange?:
    | ((value: PickerValue, context: PickerChangeHandlerContext<DateValidationError>) => void)
    | undefined;
};

export default function DateRangePicker({
  stackProps,
  startValue,
  endValue,
  onStartChange,
  onEndChange,
}: Props) {
  return (
    <Stack gap={2} {...stackProps}>
      <DatePicker
        label="Tanggal mulai"
        slotProps={{ textField: { size: 'small' } }}
        value={startValue}
        maxDate={dayjs(endValue)}
        onChange={onStartChange}
      />
      <DatePicker
        label="Tanggal akhir"
        value={endValue}
        minDate={dayjs(startValue)}
        slotProps={{ textField: { size: 'small' } }}
        onChange={onEndChange}
      />
    </Stack>
  );
}
