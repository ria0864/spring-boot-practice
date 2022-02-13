import React from 'react';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

export default [
  {
    title: '커뮤니티',
    key: 'sub1',
    icon: <UserOutlined />,
    option: [
      {
        key: 1,
        value: 'option1',
      },
      {
        key: 2,
        value: 'option2',
      },
    ],
  },
  {
    title: '게시판',
    key: 'sub2',
    icon: <LaptopOutlined />,
    option: [
      {
        key: 1,
        value: 'option1',
      },
      {
        key: 2,
        value: 'option2',
      },
    ],
  },
  {
    title: '공지',
    key: 'sub3',
    icon: <NotificationOutlined />,
    option: [
      {
        key: 1,
        value: 'option1',
      },
      {
        key: 2,
        value: 'option2',
      },
    ],
  },
];
