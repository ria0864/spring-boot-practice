import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import styled from 'styled-components';
import Header from './header';
import Sidebar from './sidebar';
import 'antd/dist/antd.css';
import './index.scss';

const { Content } = Layout;

const StyledLayout = styled(Layout)`
  height: calc(100vh - 64px);
`;

function Template() {
  return (
    <Layout>
      <Header />
      <StyledLayout>
        <Sidebar />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>(Breadcrumb)</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </StyledLayout>
    </Layout>
  );
}
export default Template;
