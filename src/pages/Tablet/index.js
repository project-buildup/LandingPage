import React, { useRef, useState } from 'react';
import Tablet_Main from './Tablet_Main';
import Tablet_Second from './Tablet_Second';
import Tablet_Third from './Tablet_Third';
import Tablet_Fourth from './Tablet_Fourth';
import Tablet_Toggle from './Tablet_Toggle';
import Tablet_Sixth from './Tablet_Sixth';
import Tablet_Seventh from './Tablet_Seventh';
import Tablet_Eighth from './Tablet_Eighth';
import Tablet_Ninth from './Tablet_Ninth';
import styled from 'styled-components';
import MenuBar from '../../components/MenuBar';
import Tablet_NavBar from '../../components/Tablet_NavBar';

export default function Tablet() {
  const ref = useRef();
  const [loadedPage, setLoadedPage] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <TabletWrapper>
      <Tablet_Main setLoadedPage={setLoadedPage} ref={ref} open={open} setOpen={setOpen} />
      {loadedPage > 0 && <Tablet_Second setLoadedPage={setLoadedPage} />}
      {loadedPage > 1 && <Tablet_Third setLoadedPage={setLoadedPage} />}
      {loadedPage > 2 && <Tablet_Fourth setLoadedPage={setLoadedPage} />}
      {loadedPage > 3 && <Tablet_Toggle setLoadedPage={setLoadedPage} />}
      {loadedPage > 4 && <Tablet_Sixth />}
      {loadedPage > 4 && <Tablet_Seventh ref={ref} />}
      {loadedPage > 4 && <Tablet_Eighth ref={ref} />}
      {loadedPage > 4 && <Tablet_Ninth />}
      <Tablet_NavBar setOpen={setOpen} />
      <MenuBar ref={ref} open={open} setOpen={setOpen} />
    </TabletWrapper>
  );
}

const TabletWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
