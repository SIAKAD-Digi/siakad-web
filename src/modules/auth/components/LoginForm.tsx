import React, { useState } from 'react';
import { Alert, Stack, Button, TextField } from '@mui/material';

import { useLogin } from '../hooks/use-login';
import { NUMBER_ONLY } from '../../../constant/regex';

export default function LoginForm() {
  const [nik, setNik] = useState('');
  const [password, setPassword] = useState('');
  const { submit, loading, errorMessage } = useLogin({ nik, password });
  const disabled = nik === '' || password === '';

  const handleNik = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (NUMBER_ONLY.test(value) || value === '') {
      setNik(e.target.value);
    }
  };

  return (
    <Stack gap={2}>
      {errorMessage && (
        <Alert severity="error" color="error">
          {errorMessage}
        </Alert>
      )}
      <TextField label="NIK" value={nik} onChange={handleNik} />
      <TextField label="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <Button loading={loading} disabled={disabled} onClick={submit}>
        Login
      </Button>
    </Stack>
  );
}
