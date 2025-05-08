import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { List, colors, Collapse, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';

import { SideBarMenuType } from '../../../config/sidebar-config';

type NavigationItemProps = {
  label: string;
  path: string;
  icon: React.ReactNode;
  children?: SideBarMenuType[];
};

const NavigationItem = ({ label, icon, children, path }: NavigationItemProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen(!open);
  };

  const selected = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }

    return location.pathname.startsWith(path);
  };

  return !children ? (
    <ListItemButton
      sx={{
        borderRadius: 1,
        mb: 1,
        py: 0.5,
        color: (theme) => theme.palette.grey[600],
        '&.MuiListItemButton-root.Mui-selected': {
          color: (theme) => theme.palette.primary.main,
        },
      }}
      selected={selected(path)}
      onClick={() => navigate(path)}
    >
      <ListItemIcon
        sx={{
          color: selected(path)
            ? (theme) => theme.palette.primary.main
            : (theme) => theme.palette.grey[600],
          minWidth: 34,
          py: 0,
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  ) : (
    <React.Fragment>
      <ListItemButton
        className="Parent-item"
        onClick={handleToggle}
        sx={{
          mb: 1,
          borderRadius: 1,
          py: 0.5,
          color: (theme) => theme.palette.grey[600],
          '&.Parent-item.MuiListItemButton-root.Mui-selected': {
            color: (theme) => theme.palette.primary.main,
          },
        }}
        selected={selected(path)}
      >
        <ListItemIcon
          sx={{
            color: selected(path)
              ? (theme) => theme.palette.primary.main
              : (theme) => theme.palette.grey[600],
            minWidth: 34,
            py: 0,
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {children.map((nav, i) => {
        const isLastChild = i + 1 === children.length;
        return (
          <Collapse key={i} in={open} timeout="auto">
            <List component="div" disablePadding>
              <ListItemButton
                selected={selected(nav.path)}
                sx={{
                  position: 'relative',
                  borderRadius: 1,
                  ml: 6,
                  mb: 1,
                  py: 0.5,
                  color: (theme) => theme.palette.grey[600],
                  '&.MuiListItemButton-root.Mui-selected': {
                    color: (theme) => theme.palette.primary.main,
                  },
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    left: '-22px',
                    width: '22px',
                    top: '10px',
                    height: isLastChild ? '0px' : '30px',
                    borderLeft: `2px solid ${colors.grey[300]}`,
                  },
                  '::after': {
                    content: '""',
                    position: 'absolute',
                    top: '-8px',
                    left: '-22px',
                    width: '22px',
                    height: '28px',
                    borderBottom: `2px solid ${colors.grey[300]}`,
                    borderLeft: `2px solid ${colors.grey[300]}`,
                    borderBottomLeftRadius: 10,
                  },
                }}
                onClick={() => navigate(nav.path)}
              >
                <ListItemText primary={nav.label} />
              </ListItemButton>
            </List>
          </Collapse>
        );
      })}
    </React.Fragment>
  );
};

export default NavigationItem;
