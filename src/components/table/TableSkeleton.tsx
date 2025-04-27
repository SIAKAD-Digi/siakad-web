import { TableRow, Skeleton, TableCell } from '@mui/material';
import { TABLE_SKELETON_ROW_LENGTH } from '../../constant/table';

type Props = {
  totalCell: number;
};

function Cell({ totalCell }: Props) {
  return Array(totalCell)
    .fill(totalCell + TABLE_SKELETON_ROW_LENGTH)
    .map((num, i) => {
      return (
        <TableCell key={num + i}>
          <Skeleton />
        </TableCell>
      );
    });
}

export default function TableSkeleton({ totalCell }: Props) {
  return (
    <>
      {Array(TABLE_SKELETON_ROW_LENGTH)
        .fill(1)
        .map((num, i) => {
          return (
            <TableRow key={num + i}>
              <Cell totalCell={totalCell} />
            </TableRow>
          );
        })}
    </>
  );
}
