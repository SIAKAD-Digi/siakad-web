import { Close } from '@mui/icons-material';
import { Stack, Drawer, IconButton, Typography } from '@mui/material';

import Navigation from './Navigation';
import useMobileQuery from '../../../hooks/useMobileQuery';
import { SIDEBAR_WIDTH } from '../../../config/sidebar-config';

type SidebarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const isMobile = useMobileQuery();

  return (
    <Drawer
      open={open || !isMobile}
      hideBackdrop={!isMobile}
      variant={isMobile ? 'temporary' : 'persistent'}
      PaperProps={{
        sx: { width: SIDEBAR_WIDTH },
        elevation: 0,
      }}
      onClose={() => setOpen(false)}
      aria-hidden={false}
    >
      <Stack
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
        pl={2}
        height={80}
      >
        <Typography variant="h4" color="primary.main">
          SIAKAD Digi
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { md: 'none' } }}
          onClick={() => setOpen(false)}
        >
          <Close />
        </IconButton>
      </Stack>
      <Navigation />
    </Drawer>
  );
};

export default Sidebar;
