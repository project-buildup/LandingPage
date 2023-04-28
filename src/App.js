import React from 'react';
import styled from 'styled-components';
import PC_Main from './pages/PC/PC_Main';
import PC_Second from './pages/PC/PC_Second';
import PC_Third from './pages/PC/PC_Third';
import PC_Fourth from './pages/PC/PC_Fourth';

function App() {
  return (
    <AppContainer>
      <PC_Main />
      <PC_Second />
      <PC_Third />
      <PC_Fourth />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
