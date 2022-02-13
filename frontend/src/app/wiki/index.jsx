import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { Template, Account, Home } from 'components';

function Wiki() {
  return (
    <>
      <Reset />
      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="" element={<Home />} />
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
