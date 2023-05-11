import React from 'react';
import styled from 'styled-components';
import PC from './pages/PC';
import Tablet from './pages/Tablet';
import Mobile from './pages/Mobile';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isPC = useMediaQuery({
    query: '(min-width:1440px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1439px)',
  });
  const isMobile = useMediaQuery({
    query: '(min-width:360px) and (max-width:767px)',
  });

  return (
    <AppContainer>
      {isPC && <PC />}
      {isTablet && <Tablet />}
      {isMobile && <Mobile />}
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
