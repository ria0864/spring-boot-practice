import React from 'react';
import styled from 'styled-components';
import Account from 'components/gnb/account';

const Tabs = styled.div`
  display: flex;
  font-size: 1.2rem;
  text-align: center;
  color: white;
  background-color: cornflowerblue;
  height: 3rem;
`;

const Logo = styled.div`
  text-align: center;
  color: white;
  background-color: green;
  width: 4rem;
  height: 3rem;
`;

function Nav() {
  return (
    <Tabs>
      <Logo>logo</Logo>
      <Account></Account>
    </Tabs>
  );
}

export default Nav;
