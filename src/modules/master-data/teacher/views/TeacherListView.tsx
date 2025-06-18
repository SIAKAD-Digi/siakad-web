import { useState, useEffect } from 'react';
import { Button, TableRow, TableCell } from '@mui/material';
import { PickerValue } from '@mui/x-date-pickers/internals';

import { useGetTeachers } from '../hooks/use-get-teachers';
import { formatDate } from '../../../../utils/format-date';
import { useDebounce } from '../../../../hooks/use-debounce';
import CustomTable from '../../../../components/table/CustomTable';
import StudentTableFilter from '../../student/components/StudentTableFilter';
import ActionTableButton from '../../../../components/button/ActionTableButton';
import DashboardContent from '../../../../components/layout/main/DashboardContent';
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadCrumbs';

export default function TeacherListView() {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('all');
  const [startDate, setStartDate] = useState<PickerValue | null>(null);
  const [endDate, setEndDate] = useState<PickerValue | null>(null);
  const debounceName = useDebounce(name);

  const { data, loading } = useGetTeachers({
    page: page + 1,
    limit,
    name: debounceName,
    status,
    start_date: startDate?.format('YYYY-MM-DD'),
    end_date: endDate?.format('YYYY-MM-DD'),
  });

  const headers = [
    { label: 'Nama' },
    { label: 'NIK' },
    { label: 'Email', minWidth: 122 },
    { label: 'Status' },
    { label: 'Waktu dibuat', minWidth: 122 },
    { label: 'Aksi' },
  ];

  useEffect(() => {
    setPage(0);
  }, [name, status, startDate, endDate]);

  const resetFilter = () => {
    setName('');
    setStatus('all');
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <>
      <CustomBreadcrumbs
        items={[{ label: 'Master Data' }, { label: 'Guru' }]}
        action={<Button>Tambah</Button>}
      />
      <DashboardContent>
        <StudentTableFilter
          name={name}
          status={status}
          startDate={startDate}
          endDate={endDate}
          onSearch={(e) => setName(e.target.value)}
          onStartChange={(value) => setStartDate(value)}
          onEndChange={(value) => setEndDate(value)}
          onStatusChange={(e) => setStatus(e.target.value)}
          onClear={resetFilter}
        />
        <CustomTable
          headers={headers}
          count={data?.meta?.total || 0}
          page={page}
          rowsPerPage={limit}
          isLoading={loading}
          isEmpty={data?.data?.length === 0}
          data={data?.data || []}
          render={(teacher) => {
            return (
              <TableRow key={teacher.id}>
                <TableCell>{teacher.name}</TableCell>
                <TableCell>{teacher.nik}</TableCell>
                <TableCell>{teacher.email}</TableCell>
                <TableCell>{teacher.is_active ? 'Aktif' : 'Tidak Aktif'}</TableCell>
                <TableCell>{formatDate(teacher.created_at, 'DD MMMM YYYY HH:mm')}</TableCell>
                <TableCell>
                  <ActionTableButton
                    onClickDetail={() => {}}
                    onClickEdit={() => {}}
                    onClickDelete={() => {}}
                  />
                </TableCell>
              </TableRow>
            );
          }}
          handleChangePage={(_, value) => setPage(value)}
          handleChangeRowsPerPage={(e) => setLimit(Number(e.target.value))}
        />
      </DashboardContent>
    </>
  );
}
