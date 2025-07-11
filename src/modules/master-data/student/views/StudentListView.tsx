import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { Button, TableRow, TableCell } from '@mui/material';
import { PickerValue } from '@mui/x-date-pickers/internals';

import { useGetStudents } from '../hooks/use-get-students';
import { formatDate } from '../../../../utils/format-date';
import { pathConfig } from '../../../../config/path-config';
import { useDebounce } from '../../../../hooks/use-debounce';
import { useDeleteStudent } from '../hooks/use-delete-student';
import StudentTableFilter from '../components/StudentTableFilter';
import CustomTable from '../../../../components/table/CustomTable';
import ConfirmationModal from '../../../../components/modal/ConfirmationModal';
import ActionTableButton from '../../../../components/button/ActionTableButton';
import DashboardContent from '../../../../components/layout/main/DashboardContent';
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadCrumbs';

export default function StudentListView() {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('all');
  const [startDate, setStartDate] = useState<PickerValue | null>(null);
  const [endDate, setEndDate] = useState<PickerValue | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [studentId, setStudentId] = useState('');
  const debounceName = useDebounce(name);
  const { data, loading, fetch } = useGetStudents({
    page: page + 1,
    limit,
    name: debounceName,
    status,
    start_date: startDate?.format('YYYY-MM-DD'),
    end_date: endDate?.format('YYYY-MM-DD'),
  });

  const { submit, loading: deleteLoading } = useDeleteStudent({
    studentId,
    onSuccess: () => {
      setOpenModal(false);
      fetch();
    },
  });

  const navigate = useNavigate();

  const headers = [
    { label: 'Nama' },
    { label: 'NIK' },
    { label: 'Kelas' },
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
    setStudentId(id);
  };

  return (
    <>
      <CustomBreadcrumbs
        items={[{ label: 'Master Data' }, { label: 'Murid' }]}
        action={
          <Link to={pathConfig.masterData.studentCreate}>
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
          render={(student) => {
            return (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.nik}</TableCell>
                <TableCell>{student.class_name || '-'}</TableCell>
                <TableCell>{student.is_active ? 'Aktif' : 'Tidak Aktif'}</TableCell>
                <TableCell>{formatDate(student.created_at, 'DD MMMM YYYY HH:mm')}</TableCell>
                <TableCell>
                  <ActionTableButton
                    onClickDetail={() => navigate(`${pathConfig.masterData.student}/${student.id}`)}
                    onClickEdit={() =>
                      navigate(`${pathConfig.masterData.student}/${student.id}/edit`)
                    }
                    onClickDelete={() => handleOpenModal(student.id)}
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
          title="Apakah anda yakin menghapus siswa?"
          onAction={submit}
          onClose={() => setOpenModal(false)}
          loading={deleteLoading}
        />
      </DashboardContent>
    </>
  );
}
