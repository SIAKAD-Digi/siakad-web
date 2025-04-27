import { useMediaQuery } from '@mui/material';

const useMobileQuery = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return isMobile;
};

export default useMobileQuery;
