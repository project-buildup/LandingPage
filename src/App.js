import React from 'react';
import PC_Main from './pages/PC/PC_Main';
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>
      <PC_Main />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
