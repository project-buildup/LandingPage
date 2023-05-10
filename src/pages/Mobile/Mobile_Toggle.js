import React, { useState } from 'react';
import Mobile_Fifth from './Mobile_Fifth';
import Mobile_Saving_First from './Saving/Mobile_Saving_First';
import Mobile_Saving_Second from './Saving/Mobile_Saving_Second';
import Mobile_Saving_Third from './Saving/Mobile_Saving_Third';
import Mobile_Saving_Fourth from './Saving/Mobile_Saving_Fourth';
import Mobile_Value_First from './Value/Mobile_Value_First';
import Mobile_Value_Second from './Value/Mobile_Value_Second';
import Mobile_Value_Third from './Value/Mobile_Value_Third';
import styled from 'styled-components';

export default function Mobile_Toggle() {
  const [selected, setSelected] = useState('saving');
  return (
    <ContainerWrapper>
      <Fifth_Wrapper>
        <Mobile_Fifth selected={selected} setSelected={setSelected} />
      </Fifth_Wrapper>
      {selected === 'saving' ? (
        <div>
          <Mobile_Saving_First />
          <Mobile_Saving_Second />
          <Mobile_Saving_Third />
          <Mobile_Saving_Fourth />
        </div>
      ) : (
        <div>
          <Mobile_Value_First />
          <Mobile_Value_Second />
          <Mobile_Value_Third />
        </div>
      )}
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Fifth_Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #878787;
`;
