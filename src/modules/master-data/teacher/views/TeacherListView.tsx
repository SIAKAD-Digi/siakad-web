import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { Button, TableRow, TableCell } from '@mui/material';
import { PickerValue } from '@mui/x-date-pickers/internals';

import { useGetTeachers } from '../hooks/use-get-teachers';
import { formatDate } from '../../../../utils/format-date';
import { pathConfig } from '../../../../config/path-config';
import { useDebounce } from '../../../../hooks/use-debounce';
import { useDeleteTeacher } from '../hooks/use-delete-teacher';
import CustomTable from '../../../../components/table/CustomTable';
import StudentTableFilter from '../../student/components/StudentTableFilter';
import ConfirmationModal from '../../../../components/modal/ConfirmationModal';
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
  const [openModal, setOpenModal] = useState(false);
  const [teacherId, setTeacherId] = useState('');
  const debounceName = useDebounce(name);

  const { data, loading, fetch } = useGetTeachers({
    page: page + 1,
    limit,
    name: debounceName,
    status,
    start_date: startDate?.format('YYYY-MM-DD'),
    end_date: endDate?.format('YYYY-MM-DD'),
  });

  const { submit, loading: deleteLoading } = useDeleteTeacher({
    teacherId,
    onSuccess: () => {
      setOpenModal(false);
      fetch();
    },
  });

  const navigate = useNavigate();

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

  const handleOpenModal = (id: string) => {
    setOpenModal(true);
    setTeacherId(id);
  };

  return (
    <>
      <CustomBreadcrumbs
        items={[{ label: 'Master Data' }, { label: 'Guru' }]}
        action={
          <Link to={pathConfig.masterData.teacherCreate}>
            <Button>Tambah</Button>
          </Link>
        }
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
                    onClickDetail={() => navigate(`${pathConfig.masterData.teacher}/${teacher.id}`)}
                    onClickEdit={() =>
                      navigate(`${pathConfig.masterData.teacher}/${teacher.id}/edit`)
                    }
                    onClickDelete={() => handleOpenModal(teacher.id)}
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
          title="Apakah anda yakin menghapus guru?"
          onAction={submit}
          onClose={() => setOpenModal(false)}
          loading={deleteLoading}
        />
      </DashboardContent>
    </>
  );
}
