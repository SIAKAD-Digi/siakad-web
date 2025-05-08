import { Menu } from '@mui/icons-material';
import { Box, AppBar, Toolbar, IconButton } from '@mui/material';

import UserMenu from './UserMenu';
import { SIDEBAR_WIDTH } from '../../../config/sidebar-config';

type NavbarProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ setOpen }: NavbarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="inherit"
        elevation={0}
        position="fixed"
        sx={{
          height: 80,
          width: { md: `calc(100% - ${SIDEBAR_WIDTH}px)` },
          justifyContent: 'center',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: {
              xs: 'space-between',
              md: 'end',
            },
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { md: 'none' } }}
            onClick={() => setOpen(true)}
          >
            <Menu />
          </IconButton>
          <UserMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
