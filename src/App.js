import React from 'react';
import styled from 'styled-components';
import PC_Main from './pages/PC/PC_Main';
import PC_Second from './pages/PC/PC_Second';
import PC_Third from './pages/PC/PC_Third';
import PC_Fourth from './pages/PC/PC_Fourth';
import PC_Toggle from './pages/PC/PC_Toggle';
import PC_Sixth from './pages/PC/PC_Sixth';
import PC_Seventh from './pages/PC/PC_Seventh';
import PC_Eighth from './pages/PC/PC_Eighth';
import PC_Ninth from './pages/PC/PC_Ninth';

function App() {
  return (
    <AppContainer>
      <PC_Main />
      <PC_Second />
      <PC_Third />
      <PC_Fourth />
      <PC_Toggle />
      <PC_Sixth />
      <PC_Seventh />
      <PC_Eighth />
      <PC_Ninth />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
