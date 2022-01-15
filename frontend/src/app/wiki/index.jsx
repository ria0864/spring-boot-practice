import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { Home, Nav, Layout } from 'components';

function Wiki() {
  return (
    <>
      <Reset />
      <Layout />
    </>
  );
}

export default Wiki;
