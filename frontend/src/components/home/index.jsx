import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  font-size: 1.2rem;
  text-align: center;
  color: white;
  background-color: #777777;
  height: calc(100vh - 3rem);
`;

function Home() {
  return <Main>홈 영역</Main>;
}

export default Home;
