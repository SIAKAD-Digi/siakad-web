import {
  BarChart,
  TimerOutlined,
  StorageOutlined,
  NewspaperOutlined,
  BorderColorOutlined,
  CalendarViewDayOutlined,
} from '@mui/icons-material';
import React from 'react';

import { pathConfig } from './path-config';

export const SIDEBAR_WIDTH = 300;

export type SideBarMenuType = {
  label: string;
  icon?: React.ReactNode;
  path: string;
  children?: SideBarMenuType[];
};

const sidebarMenu: SideBarMenuType[] = [
  {
    label: 'Dashboard',
    icon: <BarChart />,
    path: '/',
  },
  {
    label: 'Master Data',
    icon: <StorageOutlined />,
    path: pathConfig.masterData.root,
    children: [
      {
        label: 'Guru',
        path: pathConfig.masterData.teacher,
      },
      {
        label: 'Murid',
        path: pathConfig.masterData.student,
      },
      {
        label: 'Kelas',
        path: pathConfig.masterData.class,
      },
      {
        label: 'Pelajaran',
        path: pathConfig.masterData.course,
      },
    ],
  },
  {
    label: 'Entri Nilai',
    icon: <BorderColorOutlined />,
    path: pathConfig.valueEntry,
  },
  {
    label: 'Absensi',
    icon: <CalendarViewDayOutlined />,
    path: pathConfig.absence,
  },
  {
    label: 'Jadwal',
    icon: <TimerOutlined />,
    path: pathConfig.schedule,
  },
  {
    label: 'Berita',
    icon: <NewspaperOutlined />,
    path: pathConfig.news,
  },
];

export { sidebarMenu };
