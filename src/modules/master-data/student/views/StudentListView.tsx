import { Button, TableRow, TableCell } from '@mui/material';
import CustomTable from '../../../../components/table/CustomTable';
import StudentTableFilter from '../components/StudentTableFilter';
import { StudentEntity } from '../types/student.types';
import { useState, useEffect } from 'react';
import ActionTableButton from '../../../../components/button/ActionTableButton';
import DashboardContent from '../../../../components/layout/main/DashboardContent';
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadCrumbs';
import ModalDelete from '../../../../components/modal/ModalDelete';
const data: StudentEntity[] = [
  {
    id: '1',
    name: 'Dian Bayu Nugroho',
    nik: '111222333',
    gender: 'Laki - Laki',
    class: 'VII IPA 2',
    dateOfBirth: '20 Mei 2003',
    status: 'Aktif',
  },
  {
    id: '2',
    name: 'Dian Bayu Nugroho',
    nik: '111222333',
    gender: 'Laki - Laki',
    class: 'VII IPA 2',
    dateOfBirth: '20 Mei 2003',
    status: 'Aktif',
  },
  {
    id: '3',
    name: 'Dian Bayu Nugroho',
    nik: '111222333',
    gender: 'Laki - Laki',
    class: 'VII IPA 2',
    dateOfBirth: '20 Mei 2003',
    status: 'Aktif',
  },
  {
    id: '4',
    name: 'Dian Bayu Nugroho',
    nik: '111222333',
    gender: 'Laki - Laki',
    class: 'VII IPA 2',
    dateOfBirth: '20 Mei 2003',
    status: 'Aktif',
  },
  {
    id: '5',
    name: 'Dian Bayu Nugroho',
    nik: '111222333',
    gender: 'Laki - Laki',
    class: 'VII IPA 2',
    dateOfBirth: '20 Mei 2003',
    status: 'Aktif',
  },
  {
    id: '6',
    name: 'Dian Bayu Nugroho',
    nik: '111222333',
    gender: 'Laki - Laki',
    class: 'VII IPA 2',
    dateOfBirth: '20 Mei 2003',
    status: 'Aktif',
  },
];
export default function StudentListView() {
  const [isLoading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [student, setStudent] = useState<StudentEntity>();
  const [listStudent, setListStudents] = useState<StudentEntity[]>(data);

  const deleteStudentById = (id?: string) => {
    setListStudents((prevStudents) => prevStudents.filter((value) => value.id !== id));
  };
  const headers = [
    { label: 'Nama' },
    { label: 'NIK' },
    { label: 'Jenis Kelamin', minWidth: 122 },
    { label: 'Kelas' },
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
        items={[{ label: 'Master Data' }, { label: 'Murid' }]}
        action={<Button>Tambah</Button>}
      />
      <DashboardContent>
        <ModalDelete
          id={student?.id}
          name={student?.name}
          open={open}
          onClose={handleClose}
          onDelete={() => deleteStudentById(student?.id)}
        />
        <StudentTableFilter />
        <CustomTable
          headers={headers}
          count={100}
          page={1}
          isLoading={isLoading}
          isEmpty={listStudent.length === 0}
          data={listStudent}
          render={(student) => {
            return (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.nik}</TableCell>
                <TableCell>{student.gender}</TableCell>
                <TableCell>{student.class}</TableCell>
                <TableCell>{student.dateOfBirth}</TableCell>
                <TableCell>{student.status}</TableCell>
                <TableCell>
                  <ActionTableButton
                    onClickDetail={() => {}}
                    onClickEdit={() => {}}
                    onClickDelete={() => {
                      setStudent(student);
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
