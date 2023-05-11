/* eslint-disable */
import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import PC_Fifth from './PC_Fifth';
import PC_Saving_First from './Saving/PC_Saving_First';
import PC_Saving_Second from './Saving/PC_Saving_Second';
import PC_Saving_Third from './Saving/PC_Saving_Third';
import PC_Saving_Fourth from './Saving/PC_Saving_Fourth';
import PC_Value_First from './Value/PC_Value_First';
import PC_Value_Second from './Value/PC_Value_Second';
import PC_Value_Third from './Value/PC_Value_Third';
import styled from 'styled-components';

const PC_Toggle = forwardRef(function PC_Toggle(props, ref) {
  PC_Toggle.propTypes = {
    setLoadedPage: PropTypes.func.isRequired,
  };

  const [selected, setSelected] = useState('saving');
  return (
    <ContainerWrapper>
      <Fifth_Wrapper>
        <PC_Fifth selected={selected} setSelected={setSelected} />
      </Fifth_Wrapper>
      {selected === 'saving' ? (
        <div>
          <PC_Saving_First />
          <PC_Saving_Second />
          <PC_Saving_Third />
          <PC_Saving_Fourth setLoadedPage={props.setLoadedPage} />
        </div>
      ) : (
        <div>
          <PC_Value_First />
          <PC_Value_Second />
          <PC_Value_Third ref={ref} />
        </div>
      )}
    </ContainerWrapper>
  );
});

export default PC_Toggle;

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
