import { useState } from 'react';
import { PickerValue } from '@mui/x-date-pickers/internals';

import StudentForm from '../components/StudentForm';
import { useCreateStudent } from '../hooks/use-create-student';
import DashboardContent from '../../../../components/layout/main/DashboardContent';
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadCrumbs';

export default function StudentCreateView() {
  const [name, setName] = useState('');
  const [nik, setNik] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [studentGuardian, setStudentGuardian] = useState('');
  const [birthOfDate, setBirthOfDate] = useState<PickerValue>(null);
  const [gender, setGender] = useState('laki-laki');
  const [address, setAddress] = useState('');

  const { submit, loading, error } = useCreateStudent({
    name,
    nik,
    email,
    phone_number: phoneNumber,
    student_guardian: studentGuardian,
    birth_of_date: birthOfDate?.format('YYYY-MM-DD').toString() || '',
    gender,
    address,
  });
  return (
    <>
      <CustomBreadcrumbs items={[{ label: 'Master Data' }, { label: 'Tambah Murid' }]} />
      <DashboardContent>
        <StudentForm
          error={error}
          name={name}
          nik={nik}
          email={email}
          phoneNumber={phoneNumber}
          studentGuardian={studentGuardian}
          birthOfDate={birthOfDate}
          gender={gender}
          address={address}
          onChangeName={(e) => setName(e.target.value)}
          onChangeNik={(e) => setNik(e.target.value)}
          onChangePhoneNumber={(e) => setPhoneNumber(e.target.value)}
          onChangeEmail={(e) => setEmail(e.target.value)}
          onChangeBirthOfDate={(v) => setBirthOfDate(v)}
          onChangeGender={(e) => setGender(e.target.value)}
          onChangeStudentGuardian={(e) => setStudentGuardian(e.target.value)}
          onChangeStatus={(e) => e.target.value}
          onChangeAddress={(e) => setAddress(e.target.value)}
          onSubmit={submit}
          loading={loading}
        />
      </DashboardContent>
    </>
  );
}
