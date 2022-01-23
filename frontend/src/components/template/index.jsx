import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Section from './section';
import S from './style';

function Template() {
  return (
    <>
      <Header />
      <S.Layout>
        <Sidebar />
        <Section />
      </S.Layout>
    </>
  );
}
export default Template;
