import React, { useEffect, useState, lazy, Suspense } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const PC = lazy(() => import('./pages/PC'));
  const Tablet = lazy(() => import('./pages/Tablet'));
  const Mobile = lazy(() => import('./pages/Mobile'));
  const isPC = useMediaQuery({
    query: '(min-width:1440px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1439px)',
  });
  const isMobile = useMediaQuery({
    query: '(min-width:360px) and (max-width:767px)',
  });

  useEffect(() => {
    const isReady = async () => await document.fonts.ready;
    isReady();
    setIsLoading(false);
  }, [isLoading]);

  return (
    <AppContainer>
      <Suspense fallback={<Loading />}>
        {isLoading || (isPC && <PC />)}
        {isLoading || (isTablet && <Tablet />)}
        {isLoading || (isMobile && <Mobile />)}
      </Suspense>
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
