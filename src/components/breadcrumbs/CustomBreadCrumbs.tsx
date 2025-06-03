import React from 'react';
import { Link } from 'react-router';
import { Box, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

type Item = {
  label: string;
  link?: string;
};

type Props = {
  items?: Item[];
  action?: React.ReactNode;
};

export default function CustomBreadcrumbs({ items, action }: Props) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
      <Breadcrumbs maxItems={3} aria-label="breadcrumb">
        {items &&
          items.map((item, i) => {
            if (!item.link) {
              return (
                <Typography
                  key={item.label}
                  color={i === items.length - 1 ? 'primary' : 'textDisabled'}
                >
                  {item.label}
                </Typography>
              );
            }
            return (
              <Link key={item.label} to={item.link}>
                {item.label}
              </Link>
            );
          })}
      </Breadcrumbs>
      <Box>{action}</Box>
    </Stack>
  );
}
