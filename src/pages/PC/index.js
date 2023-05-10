import React from 'react';
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

export default function PC() {
  return (
    <PCWrapper>
      <PC_Main />
      <PC_Second />
      <PC_Third />
      <PC_Fourth />
      <PC_Toggle />
      <PC_Sixth />
      <PC_Seventh />
      <PC_Eighth />
      <PC_Ninth />
    </PCWrapper>
  );
}

const PCWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
