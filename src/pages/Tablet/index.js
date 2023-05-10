import React from 'react';
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

export default function Tablet() {
  return (
    <TabletWrapper>
      <Tablet_Main />
      <Tablet_Second />
      <Tablet_Third />
      <Tablet_Fourth />
      <Tablet_Toggle />
      <Tablet_Sixth />
      <Tablet_Seventh />
      <Tablet_Eighth />
      <Tablet_Ninth />
    </TabletWrapper>
  );
}

const TabletWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
