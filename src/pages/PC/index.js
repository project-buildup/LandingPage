import React, { useRef, useState } from 'react';
import PC_Main from './PC_Main';
import PC_Second from './PC_Second';
import PC_Third from './PC_Third';
import PC_Fourth from './PC_Fourth';
import PC_Toggle from './PC_Toggle';
import PC_Sixth from './PC_Sixth';
import PC_Seventh from './PC_Seventh';
import PC_Eighth from './PC_Eighth';
import PC_Ninth from './PC_Ninth';
import styled from 'styled-components';
import PC_NavBar from '../../components/PC_NavBar';

export default function PC() {
  const contactRef = useRef();
  const partnerRef = useRef();
  const [loadedPage, setLoadedPage] = useState(0);

  return (
    <PCWrapper>
      <PC_Main setLoadedPage={setLoadedPage} ref={contactRef} />
      {loadedPage > 0 && <PC_Second setLoadedPage={setLoadedPage} />}
      {loadedPage > 1 && <PC_Third setLoadedPage={setLoadedPage} />}
      {loadedPage > 2 && <PC_Fourth setLoadedPage={setLoadedPage} />}
      {loadedPage > 3 && <PC_Toggle setLoadedPage={setLoadedPage} ref={partnerRef} />}
      {loadedPage > 4 && <PC_Sixth />}
      {loadedPage > 4 && <PC_Seventh ref={contactRef} partnerRef={partnerRef} />}
      {loadedPage > 4 && <PC_Eighth ref={contactRef} />}
      {loadedPage > 4 && <PC_Ninth />}
      <PC_NavBar ref={contactRef} />
    </PCWrapper>
  );
}

const PCWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
