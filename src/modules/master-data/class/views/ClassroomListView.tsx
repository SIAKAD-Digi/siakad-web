import { useState, useEffect } from 'react';
import { Button, TableRow, TableCell } from '@mui/material';
import { PickerValue } from '@mui/x-date-pickers/internals';

import { formatDate } from '../../../../utils/format-date';
import { useDebounce } from '../../../../hooks/use-debounce';
import { useGetClassroom } from '../hooks/use-get-classroom';
import CustomTable from '../../../../components/table/CustomTable';
import { useDeleteClassroom } from '../hooks/use-delete-classroom';
import ClassroomTableFilter from '../components/ClassroomTableFilter';
import ConfirmationModal from '../../../../components/modal/ConfirmationModal';
import ActionTableButton from '../../../../components/button/ActionTableButton';
import DashboardContent from '../../../../components/layout/main/DashboardContent';
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadCrumbs';

export default function ClassroomListView() {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState<PickerValue | null>(null);
  const [endDate, setEndDate] = useState<PickerValue | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [classroomId, setClassroomId] = useState('');
  const debounceName = useDebounce(name);
  const { data, loading, fetch } = useGetClassroom({
    page: page + 1,
    limit,
    name: debounceName,
    start_date: startDate?.format('YYYY-MM-DD'),
    end_date: endDate?.format('YYYY-MM-DD'),
  });

  const { submit, loading: deleteLoading } = useDeleteClassroom({
    classroomId,
    onSuccess: () => {
      setOpenModal(false);
      fetch();
    },
  });

  const headers = [{ label: 'Nama Kelas' }, { label: 'Tanggal dibuat' }, { label: 'Aksi' }];

  useEffect(() => {
    setPage(0);
  }, [name, startDate, endDate]);

  const resetFilter = () => {
    setName('');
    setStartDate(null);
    setEndDate(null);
  };

  const handleOpenModal = (id: string) => {
    setOpenModal(true);
    setClassroomId(id);
  };

  return (
    <>
      <CustomBreadcrumbs
        items={[{ label: 'Master Data' }, { label: 'Kelas' }]}
        action={<Button>Tambah</Button>}
      />
      <DashboardContent>
        <ClassroomTableFilter
          name={name}
          startDate={startDate}
          endDate={endDate}
          onSearch={(e) => setName(e.target.value)}
          onStartChange={(value) => setStartDate(value)}
          onEndChange={(value) => setEndDate(value)}
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
          render={(classroom) => {
            return (
              <TableRow key={classroom.id}>
                <TableCell>{classroom.name}</TableCell>
                <TableCell>{formatDate(classroom.created_at, 'DD MMMM YYYY HH:mm')}</TableCell>
                <TableCell>
                  <ActionTableButton
                    onClickEdit={() => {}}
                    onClickDelete={() => handleOpenModal(classroom.id)}
                  />
                </TableCell>
              </TableRow>
            );
          }}
          handleChangePage={(_, value) => setPage(value)}
          handleChangeRowsPerPage={(e) => setLimit(Number(e.target.value))}
        />
        <ConfirmationModal
          open={openModal}
          title="Apakah anda yakin menghapus kelas?"
          onAction={submit}
          onClose={() => setOpenModal(false)}
          loading={deleteLoading}
        />
      </DashboardContent>
    </>
  );
}
