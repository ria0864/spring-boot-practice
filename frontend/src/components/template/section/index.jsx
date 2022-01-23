import React from 'react';
import { Outlet } from 'react-router-dom';
import Breadcrumb from './breadcrumb';
import S from './style';

function Section() {
  return (
    <S.Section>
      <Breadcrumb />
      <S.Content>
        <Outlet />
      </S.Content>
    </S.Section>
  );
}

export default Section;
