import { useState, useEffect } from 'react';
import { Button, TableRow, TableCell } from '@mui/material';
import { PickerValue } from '@mui/x-date-pickers/internals';

import FormModal from '../components/FormModal';
import { formatDate } from '../../../../utils/format-date';
import { useDebounce } from '../../../../hooks/use-debounce';
import { useGetClassroom } from '../hooks/use-get-classroom';
import CustomTable from '../../../../components/table/CustomTable';
import { useDeleteClassroom } from '../hooks/use-delete-classroom';
import { useCreateClassroom } from '../hooks/use-create-classroom';
import { useUpdateClassroom } from '../hooks/use-update-classroom';
import ClassroomTableFilter from '../components/ClassroomTableFilter';
import { useGetClassroomDetail } from '../hooks/use-get-classroom-detail';
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
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalCreateEdit, setOpenModalCreateEdit] = useState(false);
  const [classroomId, setClassroomId] = useState('');
  const debounceName = useDebounce(name);
  const [payloadName, setPayloadName] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const { data, loading, fetch } = useGetClassroom({
    page: page + 1,
    limit,
    name: debounceName,
    start_date: startDate?.format('YYYY-MM-DD'),
    end_date: endDate?.format('YYYY-MM-DD'),
  });

  const { submit: deleteAction, loading: deleteLoading } = useDeleteClassroom({
    classroomId,
    onSuccess: () => {
      setOpenModalDelete(false);
      fetch();
    },
  });

  const {
    submit: createAction,
    error: errorCreate,
    loading: createLoading,
  } = useCreateClassroom({
    payload: { name: payloadName },
    onSuccess: () => {
      setOpenModalCreateEdit(false);
      setPage(0);
      fetch();
    },
  });

  const { fetch: fetchDetail } = useGetClassroomDetail({
    onSuccess: (name) => {
      setPayloadName(name || '');
    },
  });

  const {
    submit: updateAction,
    error: errorUpdate,
    loading: updateLoading,
  } = useUpdateClassroom({
    payload: {
      name: payloadName,
    },
    id: classroomId,
    onSuccess: () => {
      setOpenModalCreateEdit(false);
      setPage(0);
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

  const handleOpenModalDelete = (id: string) => {
    setOpenModalDelete(true);
    setClassroomId(id);
  };

  const handleOpenModalEdit = (id: string) => {
    setClassroomId(id);
    setIsEdit(true);
    setOpenModalCreateEdit(true);
    fetchDetail(id);
  };

  const handleOpenModalCreate = () => {
    setIsEdit(false);
    setPayloadName('');
    setOpenModalCreateEdit(true);
  };

  const handleActionCreateOrEdit = () => {
    if (isEdit) {
      updateAction();
    } else {
      createAction();
    }
  };

  return (
    <>
      <CustomBreadcrumbs
        items={[{ label: 'Master Data' }, { label: 'Kelas' }]}
        action={<Button onClick={handleOpenModalCreate}>Tambah</Button>}
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
                    onClickEdit={() => handleOpenModalEdit(classroom.id)}
                    onClickDelete={() => handleOpenModalDelete(classroom.id)}
                  />
                </TableCell>
              </TableRow>
            );
          }}
          handleChangePage={(_, value) => setPage(value)}
          handleChangeRowsPerPage={(e) => setLimit(Number(e.target.value))}
        />
        <ConfirmationModal
          open={openModalDelete}
          title="Apakah anda yakin menghapus kelas?"
          onAction={deleteAction}
          onClose={() => setOpenModalDelete(false)}
          loading={deleteLoading}
        />
        <FormModal
          title={isEdit ? 'Edit Kelas' : 'Tambah kelas'}
          name={payloadName}
          error={errorCreate || errorUpdate}
          setName={setPayloadName}
          loading={createLoading || updateLoading}
          open={openModalCreateEdit}
          onAction={handleActionCreateOrEdit}
          onClose={() => setOpenModalCreateEdit(false)}
        />
      </DashboardContent>
    </>
  );
}
