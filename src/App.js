import React, { useState } from 'react';
import styled from 'styled-components';
import PC from './pages/PC';
import Tablet from './pages/Tablet';
import Mobile from './pages/Mobile';
import { useMediaQuery } from 'react-responsive';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const isPC = useMediaQuery({
    query: '(min-width:1440px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1439px)',
  });
  const isMobile = useMediaQuery({
    query: '(min-width:360px) and (max-width:767px)',
  });

  document.fonts.ready.then(() => {
    setIsLoading(false);
  });

  return (
    <AppContainer>
      {isLoading && <Loading />}
      {isLoading || (isPC && <PC />)}
      {isLoading || (isTablet && <Tablet />)}
      {isLoading || (isMobile && <Mobile />)}
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

const Loading = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #2484f3;
`;
