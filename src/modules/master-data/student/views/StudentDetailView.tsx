import { useParams } from 'react-router';
import { Card, Chip, Stack, Avatar, Typography } from '@mui/material';

import { useGetStudentDetail } from '../hooks/use-get-student-detail';
import DashboardContent from '../../../../components/layout/main/DashboardContent';
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadCrumbs';

export default function StudentDetailView() {
  const { id = '' } = useParams();
  const { data } = useGetStudentDetail(id);

  const fields = [
    [
      {
        label: 'Nama',
        value: data?.data?.name || '-',
      },
      {
        label: 'Nik',
        value: data?.data?.nik || '-',
      },
      {
        label: 'No Telepon',
        value: data?.data?.phone_number || '-',
      },
      {
        label: 'Email',
        value: data?.data?.email || '-',
      },
      {
        label: 'Kelas',
        value: data?.data?.class_name || '-',
      },
      {
        label: 'Jenis Kelamin',
        value: data?.data?.gender || '-',
      },
      {
        label: 'Wali Murid',
        value: data?.data?.student_guardian || '-',
      },
      {
        label: 'Alamat',
        value: data?.data?.address || '-',
      },
    ],
    [
      {
        label: 'Status',
        value: data?.data?.is_active ? (
          <Chip color="success" label="Aktif" />
        ) : (
          <Chip color="error" label="Tidak Aktif" />
        ),
      },
      {
        label: 'Poto',
        value: (
          <Avatar
            src={data?.data?.profile_picture || undefined}
            variant="rounded"
            sx={{ width: 100, height: 100 }}
          />
        ),
      },
    ],
  ];

  return (
    <>
      <CustomBreadcrumbs items={[{ label: 'Master Data' }, { label: 'Murid Detail' }]} />
      <DashboardContent>
        <Card sx={{ p: 2 }}>
          <Stack direction={{ xs: 'column-reverse', sm: 'row' }} overflow="scroll">
            <Stack flex={0.8}>
              {fields[0].map((value) => (
                <Stack key={value.label} direction="row" alignItems="center" mb={2}>
                  <Typography variant="subtitle2" color="text.disabled" minWidth={120}>
                    {value.label}
                  </Typography>
                  <Typography variant="subtitle2" color="text.disabled" minWidth={20}>
                    :
                  </Typography>
                  <Typography variant="subtitle1">{value.value}</Typography>
                </Stack>
              ))}
            </Stack>
            <Stack>
              {fields[1].map((value) => (
                <Stack key={value.label} direction="row" alignItems="center" mb={2}>
                  <Typography variant="subtitle2" color="text.disabled" minWidth={120}>
                    {value.label}
                  </Typography>
                  <Typography variant="subtitle2" color="text.disabled" minWidth={20}>
                    :
                  </Typography>
                  {value.value}
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Card>
      </DashboardContent>
      ;
    </>
  );
}
