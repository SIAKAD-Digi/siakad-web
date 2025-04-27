import { Button } from '@mui/material';
import { pathConfig } from '../../config/path-config';
import { Link } from 'react-router';
import { ArrowBackOutlined } from '@mui/icons-material';

export default function BackToHomeButton() {
  return (
    <Link to={pathConfig.dashboard}>
      <Button size="small" startIcon={<ArrowBackOutlined />}>
        Kembali
      </Button>
    </Link>
  );
}
