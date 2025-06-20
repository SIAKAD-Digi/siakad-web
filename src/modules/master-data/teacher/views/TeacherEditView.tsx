import dayjs from 'dayjs';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { PickerValue } from '@mui/x-date-pickers/internals';

import TeacherForm from '../components/TeacherForm';
import { useUpdateTeacher } from '../hooks/use-update-teacher';
import { useGetTeacherDetail } from '../hooks/use-get-teacher-detail';
import DashboardContent from '../../../../components/layout/main/DashboardContent';
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadCrumbs';

export default function TeacherEditView() {
  const { id = '' } = useParams();
  const { data } = useGetTeacherDetail(id);
  const teacher = data?.data;
  const [name, setName] = useState('');
  const [nik, setNik] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [married, setMarried] = useState('married');
  const [birthOfDate, setBirthOfDate] = useState<PickerValue>(null);
  const [gender, setGender] = useState('laki-laki');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState('not active');

  useEffect(() => {
    setName(teacher?.name || '');
    setNik(teacher?.nik || '');
    setEmail(teacher?.email || '');
    setPhoneNumber(teacher?.phone_number || '');
    setMarried(teacher?.is_married ? 'married' : 'not married');
    setBirthOfDate(dayjs(teacher?.birth_of_date) || null);
    setGender(teacher?.gender || 'laki-laki');
    setAddress(teacher?.address || '');
    setStatus(teacher?.is_active ? 'active' : 'not active');
  }, [teacher]);

  const { submit, loading, error } = useUpdateTeacher(
    {
      name,
      nik,
      email,
      phone_number: phoneNumber,
      is_married: married === 'married',
      birth_of_date: birthOfDate?.format('YYYY-MM-DD').toString() || '',
      gender,
      address,
      is_active: status === 'active',
    },
    id,
  );
  return (
    <>
      <CustomBreadcrumbs items={[{ label: 'Master Data' }, { label: 'Edit Guru' }]} />
      <DashboardContent>
        <TeacherForm
          isEdit
          error={error}
          name={name}
          nik={nik}
          email={email}
          phoneNumber={phoneNumber}
          married={married}
          birthOfDate={birthOfDate}
          gender={gender}
          address={address}
          status={status}
          onChangeName={(e) => setName(e.target.value)}
          onChangeNik={(e) => setNik(e.target.value)}
          onChangePhoneNumber={(e) => setPhoneNumber(e.target.value)}
          onChangeEmail={(e) => setEmail(e.target.value)}
          onChangeBirthOfDate={(v) => setBirthOfDate(v)}
          onChangeGender={(e) => setGender(e.target.value)}
          onChangeMarried={(e) => setMarried(e.target.value)}
          onChangeStatus={(e) => setStatus(e.target.value)}
          onChangeAddress={(e) => setAddress(e.target.value)}
          onSubmit={submit}
          loading={loading}
        />
      </DashboardContent>
    </>
  );
}
