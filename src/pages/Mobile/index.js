import React from 'react';
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

export default function Mobile() {
  return (
    <MobileWrapper>
      <Mobile_Main />
      <Mobile_Second />
      <Mobile_Third />
      <Mobile_Fourth />
      <Mobile_Toggle />
      <Mobile_Sixth />
      <Mobile_Seventh />
      <Mobile_Eighth />
      <Mobile_Ninth />
    </MobileWrapper>
  );
}

const MobileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
