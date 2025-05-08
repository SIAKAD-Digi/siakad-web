import { useState, useEffect } from 'react';
import { CourseEntity } from '../types/course.types';
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadCrumbs';
import { Button, TableRow, TableCell } from '@mui/material';
import DashboardContent from '../../../../components/layout/main/DashboardContent';
import CustomTable from '../../../../components/table/CustomTable';
import ActionTableButton from '../../../../components/button/ActionTableButton';
import CourseTableFilter from '../components/CourseTableFilter';

export default function CourseListView() {
  const [isLoading, setLoading] = useState(true);
  const headers = [{ label: 'Nama Pelajaran' }, { label: 'Tanggal dibuat' }, { label: 'Aksi' }];
  const data: CourseEntity[] = [
    {
      id: '1',
      name: 'Matematika',
      createAt: '05 Mei 2025',
    },
    {
      id: '2',
      name: 'Bahasa Indonesia',
      createAt: '05 Mei 2025',
    },
    {
      id: '3',
      name: 'Bahasa Inggris',
      createAt: '05 Mei 2025',
    },
  ];
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, [isLoading]);
  return (
    <>
      <CustomBreadcrumbs
        items={[{ label: 'Master Data' }, { label: 'Pelajaran' }]}
        action={<Button>Tambah</Button>}
      />
      <DashboardContent>
        <CourseTableFilter />
        <CustomTable
          headers={headers}
          count={100}
          page={1}
          isLoading={isLoading}
          isEmpty={data.length === 0}
          data={data}
          render={(course) => {
            return (
              <TableRow key={course.id}>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.createAt}</TableCell>
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
