import { useState, useEffect } from 'react';
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadCrumbs';
import { Button, TableRow, TableCell } from '@mui/material';
import { ClassroomEntity } from '../types/classroom.types';
import DashboardContent from '../../../../components/layout/main/DashboardContent';
import CustomTable from '../../../../components/table/CustomTable';
import ActionTableButton from '../../../../components/button/ActionTableButton';
import ClassroomTableFilter from '../components/ClassroomTableFilter';

export default function ClassroomListView() {
  const [isLoading, setLoading] = useState(true);
  const headers = [{ label: 'Nama Kelas' }, { label: 'Tanggal dibuat' }, { label: 'Aksi' }];
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
        <ClassroomTableFilter />
        <CustomTable
          headers={headers}
          count={100}
          page={1}
          isLoading={isLoading}
          isEmpty={data.length === 0}
          data={data}
          render={(classes) => {
            return (
              <TableRow key={classes.id}>
                <TableCell>{classes.name}</TableCell>
                <TableCell>{classes.createdAt}</TableCell>
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
