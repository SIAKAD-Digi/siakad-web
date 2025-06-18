import { useState } from 'react';
import { PickerValue } from '@mui/x-date-pickers/internals';

import TeacherForm from '../components/TeacherForm';
import { useCreateTeacher } from '../hooks/use-create-teacher';
import DashboardContent from '../../../../components/layout/main/DashboardContent';
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadCrumbs';

export default function TeacherCreateView() {
  const [name, setName] = useState('');
  const [nik, setNik] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [married, setMarried] = useState('married');
  const [birthOfDate, setBirthOfDate] = useState<PickerValue>(null);
  const [gender, setGender] = useState('laki-laki');
  const [address, setAddress] = useState('');

  const { submit, loading, error } = useCreateTeacher({
    name,
    nik,
    email,
    phone_number: phoneNumber,
    is_married: married === 'married',
    birth_of_date: birthOfDate?.format('YYYY-MM-DD').toString() || '',
    gender,
    address,
  });
  return (
    <>
      <CustomBreadcrumbs items={[{ label: 'Master Data' }, { label: 'Tambah Guru' }]} />
      <DashboardContent>
        <TeacherForm
          error={error}
          name={name}
          nik={nik}
          email={email}
          phoneNumber={phoneNumber}
          married={married}
          birthOfDate={birthOfDate}
          gender={gender}
          address={address}
          onChangeName={(e) => setName(e.target.value)}
          onChangeNik={(e) => setNik(e.target.value)}
          onChangePhoneNumber={(e) => setPhoneNumber(e.target.value)}
          onChangeEmail={(e) => setEmail(e.target.value)}
          onChangeBirthOfDate={(v) => setBirthOfDate(v)}
          onChangeGender={(e) => setGender(e.target.value)}
          onChangeMarried={(e) => setMarried(e.target.value)}
          onChangeStatus={(e) => e.target.value}
          onChangeAddress={(e) => setAddress(e.target.value)}
          onSubmit={submit}
          loading={loading}
        />
      </DashboardContent>
    </>
  );
}
