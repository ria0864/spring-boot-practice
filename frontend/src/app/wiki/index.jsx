import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { Layout, Account } from 'components';

function Wiki() {
  return (
    <>
      <Reset />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="account/*" element={<Account />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Wiki;
