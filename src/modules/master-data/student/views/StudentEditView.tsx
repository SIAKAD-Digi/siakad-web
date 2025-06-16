import dayjs from 'dayjs';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { PickerValue } from '@mui/x-date-pickers/internals';

import StudentForm from '../components/StudentForm';
import { useUpdateStudent } from '../hooks/use-update-student';
import { useGetStudentDetail } from '../hooks/use-get-student-detail';
import DashboardContent from '../../../../components/layout/main/DashboardContent';
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadCrumbs';

export default function StudentEditView() {
  const { id = '' } = useParams();
  const { data } = useGetStudentDetail(id);
  const student = data?.data;
  console.log(student?.name);
  const [name, setName] = useState('');
  const [nik, setNik] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [studentGuardian, setStudentGuardian] = useState('');
  const [birthOfDate, setBirthOfDate] = useState<PickerValue>(null);
  const [gender, setGender] = useState('laki-laki');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState('not active');

  useEffect(() => {
    setName(student?.name || '');
    setNik(student?.nik || '');
    setEmail(student?.email || '');
    setPhoneNumber(student?.phone_number || '');
    setStudentGuardian(student?.student_guardian || '');
    setBirthOfDate(dayjs(student?.birth_of_date) || null);
    setGender(student?.gender || 'laki-laki');
    setAddress(student?.address || '');
    setStatus(student?.is_active ? 'active' : 'not active');
  }, [student]);

  const { submit, loading, error } = useUpdateStudent(
    {
      name,
      nik,
      email,
      phone_number: phoneNumber,
      student_guardian: studentGuardian,
      birth_of_date: birthOfDate?.format('YYYY-MM-DD').toString() || '',
      gender,
      address,
      is_active: status === 'active',
    },
    id,
  );
  return (
    <>
      <CustomBreadcrumbs items={[{ label: 'Master Data' }, { label: 'Edit Murid' }]} />
      <DashboardContent>
        <StudentForm
          isEdit
          error={error}
          name={name}
          nik={nik}
          email={email}
          phoneNumber={phoneNumber}
          studentGuardian={studentGuardian}
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
          onChangeStudentGuardian={(e) => setStudentGuardian(e.target.value)}
          onChangeStatus={(e) => setStatus(e.target.value)}
          onChangeAddress={(e) => setAddress(e.target.value)}
          onSubmit={submit}
          loading={loading}
        />
      </DashboardContent>
    </>
  );
}
