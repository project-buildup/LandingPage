import React, { useRef, useState } from 'react';
import Mobile_Main from './Mobile_Main';
import Mobile_Second from './Mobile_Second';
import Mobile_Third from './Mobile_Third';
import Mobile_Fourth from './Mobile_Fourth';
import Mobile_Toggle from './Mobile_Toggle';
import Mobile_Sixth from './Mobile_Sixth';
import Mobile_Seventh from './Mobile_Seventh';
import Mobile_Eighth from './Mobile_Eighth';
import Mobile_Ninth from './Mobile_Ninth';
import styled from 'styled-components';
import MenuBar from '../../components/MenuBar';

export default function Mobile() {
  const ref = useRef();
  const [loadedPage, setLoadedPage] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <MobileWrapper>
      <Mobile_Main setLoadedPage={setLoadedPage} ref={ref} setOpen={setOpen} />
      {loadedPage > 0 && <Mobile_Second setLoadedPage={setLoadedPage} />}
      {loadedPage > 1 && <Mobile_Third setLoadedPage={setLoadedPage} />}
      {loadedPage > 2 && <Mobile_Fourth setLoadedPage={setLoadedPage} />}
      {loadedPage > 3 && <Mobile_Toggle setLoadedPage={setLoadedPage} />}
      {loadedPage > 4 && <Mobile_Sixth />}
      {loadedPage > 4 && <Mobile_Seventh ref={ref} />}
      {loadedPage > 4 && <Mobile_Eighth ref={ref} />}
      {loadedPage > 4 && <Mobile_Ninth />}
      <MenuBar ref={ref} open={open} setOpen={setOpen} />
    </MobileWrapper>
  );
}

const MobileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
