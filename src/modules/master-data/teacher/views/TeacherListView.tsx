import { useState, useEffect } from 'react';
import { TeacherEntity } from '../types/teacher.types';
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadCrumbs';
import { Button, TableRow, TableCell } from '@mui/material';
import DashboardContent from '../../../../components/layout/main/DashboardContent';
import CustomTable from '../../../../components/table/CustomTable';
import ActionTableButton from '../../../../components/button/ActionTableButton';
import TeacherTableFilter from '../components/TeacherTableFilter';
import ModalDelete from '../../../../components/modal/ModalDelete';

const data: TeacherEntity[] = [
  {
    id: '1',
    name: 'Anange',
    nik: '111222333',
    gender: 'Laki - Laki',
    noHp: '085867123123',
    dateOfBirth: '20 Mei 2003',
    status: 'Aktif',
  },
  {
    id: '2',
    name: 'Munawire',
    nik: '111222333',
    gender: 'Laki - Laki',
    noHp: '085867123123',
    dateOfBirth: '20 Mei 2003',
    status: 'Aktif',
  },
  {
    id: '3',
    name: 'Munawire',
    nik: '111222333',
    gender: 'Laki - Laki',
    noHp: '085867123123',
    dateOfBirth: '20 Mei 2003',
    status: 'Aktif',
  },
  {
    id: '4',
    name: 'Munawire',
    nik: '111222333',
    gender: 'Laki - Laki',
    noHp: '085867123123',
    dateOfBirth: '20 Mei 2003',
    status: 'Aktif',
  },
  {
    id: '5',
    name: 'Munawire',
    nik: '111222333',
    gender: 'Laki - Laki',
    noHp: '085867123123',
    dateOfBirth: '20 Mei 2003',
    status: 'Aktif',
  },
];

export default function TeacherListView() {
  const [isLoading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState<TeacherEntity>();
  const [teachers, setTeachers] = useState<TeacherEntity[]>(data);

  const deleteTeacherById = (id?: string) => {
    setTeachers((prevTeachers) => prevTeachers.filter((teacher) => teacher.id !== id));
  };

  const headers = [
    { label: 'Nama' },
    { label: 'NIK' },
    { label: 'Jenis Kelamin', minWidth: 122 },
    { label: 'Nomor Telepon' },
    { label: 'Tanggal Lahir', minWidth: 122 },
    { label: 'Status' },
    { label: 'Aksi' },
  ];
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, [isLoading]);

  return (
    <>
      <CustomBreadcrumbs
        items={[{ label: 'Master Data' }, { label: 'Guru' }]}
        action={<Button>Tambah</Button>}
      />
      <DashboardContent>
        <ModalDelete
          id={name?.id}
          open={open}
          onClose={handleClose}
          onDelete={() => deleteTeacherById(name?.id)}
          name={name?.name}
        />
        <TeacherTableFilter />
        <CustomTable
          headers={headers}
          count={100}
          page={1}
          isLoading={isLoading}
          isEmpty={teachers.length === 0}
          data={teachers}
          render={(teacher) => {
            return (
              <TableRow key={teacher.id}>
                <TableCell>{teacher.name}</TableCell>
                <TableCell>{teacher.nik}</TableCell>
                <TableCell>{teacher.gender}</TableCell>
                <TableCell>{teacher.noHp}</TableCell>
                <TableCell>{teacher.dateOfBirth}</TableCell>
                <TableCell>{teacher.status}</TableCell>
                <TableCell>
                  <ActionTableButton
                    onClickDetail={() => {}}
                    onClickEdit={() => {}}
                    onClickDelete={() => {
                      setName(teacher);
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
