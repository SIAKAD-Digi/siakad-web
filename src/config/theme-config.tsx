import { createTheme } from '@mui/material';
import { idID } from '@mui/material/locale';

const theme = createTheme(
  {
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained',
          disableElevation: true,
          sx: {
            textTransform: 'none',
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          size: 'small',
        },
      },
    },
  },
  idID,
);

export { theme };
