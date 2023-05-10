import React from 'react';
import styled from 'styled-components';
// import PC from './pages/PC';
import Mobile from './pages/Mobile';

function App() {
  return (
    <AppContainer>
      {/* <PC /> */}
      <Mobile />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
