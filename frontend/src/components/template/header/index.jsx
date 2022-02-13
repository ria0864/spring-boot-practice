import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';

function Header() {
  return (
    <S.Header>
      <S.Logo>
        <Link to="/">
          <img src="/images/logo.png" />
        </Link>
      </S.Logo>
      <S.Tabs>
        <Link to="/account/login">Login</Link>
      </S.Tabs>
    </S.Header>
  );
}

export default Header;
