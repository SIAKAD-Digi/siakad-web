import { Box, Stack } from '@mui/material';
import SearchInput from '../../../../components/input/SearchInput';
import DateRangePicker from '../../../../components/input/DateRangePicker';
import CustomSelect from '../../../../components/input/CustomSelect';
import ClearFilterButton from '../../../../components/button/ClearFilterButton';

export default function ClassroomTableFilter() {
  const statusOptios = [
    {
      label: 'Semua',
      value: 'all',
    },
    { label: 'Aktif', value: 'active' },
    { label: 'Tidak Aktif', value: 'not active' },
  ];

  return (
    <>
      <Stack mb={3} gap={2} direction={{ lg: 'row' }}>
        <SearchInput />
        <DateRangePicker stackProps={{ direction: { lg: 'row' } }} />
        <CustomSelect value="all" options={statusOptios} label="Status" />
        <Box
          sx={{
            ml: {
              xs: 'auto',
              lg: 0,
            },
          }}
        >
          <ClearFilterButton />
        </Box>
      </Stack>
    </>
  );
}
