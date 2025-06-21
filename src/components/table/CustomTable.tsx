import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import TableEmpty from './TableEmpty';
import TableSkeleton from './TableSkeleton';

type THeader = {
  label: string;
  minWidth?: number | string;
};

type Props<T> = {
  headers: THeader[];
  page: number;
  count: number;
  rowsPerPage?: number;
  isLoading: boolean;
  isEmpty: boolean;
  data: T[];
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
  handleChangeRowsPerPage: (_: React.ChangeEvent<HTMLInputElement>) => void;
  render: (data: T) => React.ReactNode;
};

export default function CustomTable<T>({
  headers,
  page,
  count,
  rowsPerPage = 10,
  isLoading,
  isEmpty,
  data,
  handleChangePage,
  handleChangeRowsPerPage,
  render,
}: Props<T>) {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell
                  key={header.label}
                  sx={{
                    minWidth: header.minWidth,
                    fontWeight: (theme) => theme.typography.fontWeightBold,
                  }}
                >
                  {header.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading && <TableSkeleton totalCell={headers.length} />}
            {isEmpty && <TableEmpty />}
            {!isLoading && !isEmpty && data && data.map((row) => render(row))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
