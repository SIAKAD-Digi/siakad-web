import { useState, useEffect } from 'react';
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadCrumbs';
import { Button, TableRow, TableCell } from '@mui/material';
import { ClassroomEntity } from '../types/classroom.types';
import DashboardContent from '../../../../components/layout/main/DashboardContent';
import CustomTable from '../../../../components/table/CustomTable';
import ActionTableButton from '../../../../components/button/ActionTableButton';
import ClassroomTableFilter from '../components/ClassroomTableFilter';
import ModalDelete from '../../../../components/modal/ModalDelete';

const data: ClassroomEntity[] = [
  {
    id: '1',
    name: 'Kelas X IPA',
    createdAt: '01 Mei 2025',
  },
  {
    id: '2',
    name: 'Kelas X IPS',
    createdAt: '01 Mei 2025',
  },
  {
    id: '3',
    name: 'Kelas XI IPA',
    createdAt: '01 Mei 2025',
  },
];
export default function ClassroomListView() {
  const [isLoading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [classroom, setStudent] = useState<ClassroomEntity>();
  const [listClassroom, setListClassroom] = useState<ClassroomEntity[]>(data);
  const deleteClassroomById = (id?: string) => {
    setListClassroom((prevData) => prevData.filter((value) => value.id !== id));
  };
  const headers = [{ label: 'Nama Kelas' }, { label: 'Tanggal dibuat' }, { label: 'Aksi' }];
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, [isLoading]);
  return (
    <>
      <CustomBreadcrumbs
        items={[{ label: 'Master Data' }, { label: 'Kelas' }]}
        action={<Button>Tambah</Button>}
      />
      <DashboardContent>
        <ModalDelete
          id={classroom?.id}
          name={classroom?.name}
          open={open}
          onClose={handleClose}
          onDelete={() => deleteClassroomById(classroom?.id)}
        />
        <ClassroomTableFilter />
        <CustomTable
          headers={headers}
          count={100}
          page={1}
          isLoading={isLoading}
          isEmpty={listClassroom.length === 0}
          data={listClassroom}
          render={(classroom) => {
            return (
              <TableRow key={classroom.id}>
                <TableCell>{classroom.name}</TableCell>
                <TableCell>{classroom.createdAt}</TableCell>
                <TableCell>
                  <ActionTableButton
                    onClickDetail={() => {}}
                    onClickEdit={() => {}}
                    onClickDelete={() => {
                      setStudent(classroom);
                      handleOpen();
                    }}
                  />
                </TableCell>
              </TableRow>
            );
          }}
          handleChangePage={() => {}}
          handleChangeRowsPerPage={() => {}}
        />
      </DashboardContent>
    </>
  );
}
