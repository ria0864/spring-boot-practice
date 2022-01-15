import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: absolute;
  background-color: #f0ffff;
  color: #000000;
  right: 0;
  height: inherit;
`;

function Account() {
  return <Div>sign in</Div>;
}

export default Account;
