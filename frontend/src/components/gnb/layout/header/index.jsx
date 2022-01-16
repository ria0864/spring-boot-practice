import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
const { Header: HeaderLayout } = Layout;

const StyledHeader = styled(HeaderLayout)`
  display: flex;
  align-items: center;
  line-height: normal;
`;

function Header() {
  return (
    <StyledHeader className="header">
      <div className="logo">
        <img src="/images/tmaxsoft.png" />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ width: '100%', isplay: 'flex', 'justify-content': 'flex-end' }}
      >
        <Menu.Item key="1">
          <Link to="/account/login">Login</Link>
        </Menu.Item>
      </Menu>
    </StyledHeader>
  );
}

export default Header;
