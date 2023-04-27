import React from 'react';
import styled from 'styled-components';
import PC_Main from './pages/PC/PC_Main';
import PC_Second from './pages/PC/PC_Second';

function App() {
  return (
    <AppContainer>
      <PC_Main />
      <PC_Second />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
