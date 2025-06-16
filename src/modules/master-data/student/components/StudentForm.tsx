import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { PickerValue } from '@mui/x-date-pickers/internals';
import { Stack, Button, TextField, SelectChangeEvent } from '@mui/material';
import { DatePicker, DateValidationError, PickerChangeHandlerContext } from '@mui/x-date-pickers';

import { pathConfig } from '../../../../config/path-config';
import CustomSelect from '../../../../components/input/CustomSelect';
import { ErrorResponse } from '../../../../types/common-response.types';

type Props = {
  isEdit?: boolean;
  onSubmit: () => void;
  loading: boolean;
  error: unknown;
  name: string;
  nik: string;
  email: string;
  phoneNumber: string;
  studentGuardian: string;
  birthOfDate: PickerValue;
  gender: string;
  address: string;
  status?: string;
  onChangeName?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChangeNik?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChangeEmail?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChangePhoneNumber?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChangeStudentGuardian?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChangeBirthOfDate?: (
    value: PickerValue,
    context: PickerChangeHandlerContext<DateValidationError>,
  ) => void;
  onChangeGender?: (even: SelectChangeEvent) => void;
  onChangeStatus?: (even: SelectChangeEvent) => void;
  onChangeAddress?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export default function StudentForm({
  isEdit = false,
  onSubmit,
  loading,
  error,
  name,
  nik,
  email,
  phoneNumber,
  studentGuardian,
  birthOfDate,
  gender,
  address,
  status,
  onChangeName,
  onChangeNik,
  onChangeEmail,
  onChangePhoneNumber,
  onChangeStudentGuardian,
  onChangeGender,
  onChangeAddress,
  onChangeStatus,
  onChangeBirthOfDate,
}: Props) {
  const gendersOptions = [
    { label: 'Laki-Laki', value: 'laki-laki' },
    { label: 'Perempuan', value: 'perempuan' },
  ];

  const statusOptions = [
    { label: 'Aktif', value: 'active' },
    { label: 'Tidak Aktif', value: 'not active' },
  ];

  const response: ErrorResponse = axios.isAxiosError(error) ? error.response?.data : undefined;
  const errorName = response?.errors?.name;
  const errorNik = response?.errors?.nik;
  const errorEmail = response?.errors?.email;
  const errorPhoneNumber = response?.errors?.phone_number;
  const errorStudentGuardian = response?.errors?.student_guardian;
  const errorBirthOfDate = response?.errors?.birth_of_date;
  const errorAddress = response?.errors?.address;

  return (
    <>
      <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>
        <Stack flex={1} gap={2}>
          <TextField
            label="Nama"
            value={name}
            onChange={onChangeName}
            error={Boolean(errorName)}
            helperText={Boolean(errorName) && errorName}
          />
          <TextField
            label="NIK"
            value={nik}
            onChange={onChangeNik}
            error={Boolean(errorNik)}
            helperText={Boolean(errorNik) && errorNik}
          />
          <TextField
            label="email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            error={Boolean(errorEmail)}
            helperText={Boolean(errorEmail) && errorEmail}
          />
          <TextField
            label="No Telepon"
            value={phoneNumber}
            onChange={onChangePhoneNumber}
            error={Boolean(errorPhoneNumber)}
            helperText={Boolean(errorPhoneNumber) && errorPhoneNumber}
          />
          <TextField
            label="Wali Murid"
            value={studentGuardian}
            onChange={onChangeStudentGuardian}
            error={Boolean(errorStudentGuardian)}
            helperText={Boolean(errorStudentGuardian) && errorStudentGuardian}
          />
        </Stack>
        <Stack flex={1} gap={2}>
          <DatePicker
            slotProps={{
              textField: {
                size: 'small',
                error: Boolean(errorBirthOfDate),
                helperText: Boolean(errorBirthOfDate) && errorBirthOfDate,
              },
            }}
            label="Tanggal Lahir"
            value={birthOfDate}
            onChange={onChangeBirthOfDate}
          />
          <CustomSelect
            label="Jenis Kelamin"
            value={gender}
            options={gendersOptions}
            onChange={onChangeGender}
          />
          {isEdit && (
            <CustomSelect
              label="Status"
              value={status}
              options={statusOptions}
              onChange={onChangeStatus}
            />
          )}
          <TextField
            multiline
            label="Alamat"
            value={address}
            rows={3}
            onChange={onChangeAddress}
            error={Boolean(errorAddress)}
            helperText={Boolean(errorAddress) && errorAddress}
          />
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="end" mt={3} gap={3}>
        <Link to={pathConfig.masterData.student}>
          <Button variant="outlined">Batal</Button>
        </Link>
        <Button loading={loading} onClick={onSubmit}>
          Simpan
        </Button>
      </Stack>
    </>
  );
}
