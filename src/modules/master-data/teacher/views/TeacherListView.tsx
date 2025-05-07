import { useEffect, useState } from 'react';
import { TeacherEntity } from '../types/teacher.types';
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadCrumbs';
import { Button, TableCell, TableRow } from '@mui/material';
import DashboardContent from '../../../../components/layout/main/DashboardContent';
import CustomTable from '../../../../components/table/CustomTable';
import ActionTableButton from '../../../../components/button/ActionTableButton';
import TeacherTableFilter from '../components/TeacherTableFilter';

export default function TeacherListView() {
  const [isLoading, setLoading] = useState(true);
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
      id: '1',
      name: 'Munawire',
      nik: '111222333',
      gender: 'Laki - Laki',
      noHp: '085867123123',
      dateOfBirth: '20 Mei 2003',
      status: 'Aktif',
    },
    {
      id: '1',
      name: 'Munawire',
      nik: '111222333',
      gender: 'Laki - Laki',
      noHp: '085867123123',
      dateOfBirth: '20 Mei 2003',
      status: 'Aktif',
    },
    {
      id: '1',
      name: 'Munawire',
      nik: '111222333',
      gender: 'Laki - Laki',
      noHp: '085867123123',
      dateOfBirth: '20 Mei 2003',
      status: 'Aktif',
    },
    {
      id: '1',
      name: 'Munawire',
      nik: '111222333',
      gender: 'Laki - Laki',
      noHp: '085867123123',
      dateOfBirth: '20 Mei 2003',
      status: 'Aktif',
    },
  ];
  return (
    <>
      <CustomBreadcrumbs
        items={[{ label: 'Master Data' }, { label: 'Guru' }]}
        action={<Button>Tambah</Button>}
      />
      <DashboardContent>
        <TeacherTableFilter />
        <CustomTable
          headers={headers}
          count={100}
          page={1}
          isLoading={isLoading}
          isEmpty={data.length === 0}
          data={data}
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
                  <ActionTableButton />
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
