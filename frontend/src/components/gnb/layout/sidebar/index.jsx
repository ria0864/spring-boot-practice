import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
const { SubMenu } = Menu;
const { Sider } = Layout;

function Sidebar() {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu mode="inline" style={{ borderRight: 0 }}>
        <SubMenu key="sub1" icon={<UserOutlined />} title="커뮤니티">
          <Menu.Item key="1">option1</Menu.Item>
          <Menu.Item key="2">option2</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="게시판">
          <Menu.Item key="3">option3</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<NotificationOutlined />} title="공지">
          <Menu.Item key="5">option5</Menu.Item>
          <Menu.Item key="6">option6</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
