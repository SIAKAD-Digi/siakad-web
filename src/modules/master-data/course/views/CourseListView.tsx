import { useState, useEffect } from 'react';
import { Button, TableRow, TableCell } from '@mui/material';

import { CourseEntity } from '../types/course.types';
import CourseTableFilter from '../components/CourseTableFilter';
import CustomTable from '../../../../components/table/CustomTable';
import ModalDelete from '../../../../components/modal/ModalDelete';
import ActionTableButton from '../../../../components/button/ActionTableButton';
import DashboardContent from '../../../../components/layout/main/DashboardContent';
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadCrumbs';
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

export default function CourseListView() {
  const [isLoading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [course, setCourse] = useState<CourseEntity>();
  const [listCourse, setListCourse] = useState<CourseEntity[]>(data);

  const deleteCourseById = (id?: string) => {
    setListCourse((prevData) => prevData.filter((value) => value.id !== id));
  };
  const headers = [{ label: 'Nama Pelajaran' }, { label: 'Tanggal dibuat' }, { label: 'Aksi' }];

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
        <ModalDelete
          id={course?.id}
          name={course?.name}
          open={open}
          onClose={handleClose}
          onDelete={() => deleteCourseById(course?.id)}
        />
        <CourseTableFilter />
        <CustomTable
          headers={headers}
          count={100}
          page={1}
          isLoading={isLoading}
          isEmpty={listCourse.length === 0}
          data={listCourse}
          render={(course) => {
            return (
              <TableRow key={course.id}>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.createAt}</TableCell>
                <TableCell>
                  <ActionTableButton
                    onClickDetail={() => {}}
                    onClickEdit={() => {}}
                    onClickDelete={() => {
                      setCourse(course);
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
