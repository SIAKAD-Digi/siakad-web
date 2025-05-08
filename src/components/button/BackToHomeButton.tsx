import { Link } from 'react-router';
import { Button } from '@mui/material';
import { ArrowBackOutlined } from '@mui/icons-material';

import { pathConfig } from '../../config/path-config';

export default function BackToHomeButton() {
  return (
    <Link to={pathConfig.dashboard}>
      <Button size="small" startIcon={<ArrowBackOutlined />}>
        Kembali
      </Button>
    </Link>
  );
}
