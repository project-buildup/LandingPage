import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Tablet_Fifth from './Tablet_Fifth';
import Tablet_Saving_First from './Saving/Tablet_Saving_First';
import Tablet_Saving_Second from './Saving/Tablet_Saving_Second';
import Tablet_Saving_Third from './Saving/Tablet_Saving_Third';
import Tablet_Saving_Fourth from './Saving/Tablet_Saving_Fourth';
import Tablet_Value_First from './Value/Tablet_Value_First';
import Tablet_Value_Second from './Value/Tablet_Value_Second';
import Tablet_Value_Third from './Value/Tablet_Value_Third';
import styled from 'styled-components';

export default function PC_Toggle({ setLoadedPage }) {
  PC_Toggle.propTypes = {
    setLoadedPage: PropTypes.func.isRequired,
  };

  const toggleRef = useRef();
  const [selected, setSelected] = useState('saving');

  return (
    <ContainerWrapper>
      <Fifth_Wrapper>
        <Tablet_Fifth selected={selected} setSelected={setSelected} ref={toggleRef} />
      </Fifth_Wrapper>
      {selected === 'saving' ? (
        <div>
          <Tablet_Saving_First />
          <Tablet_Saving_Second />
          <Tablet_Saving_Third />
          <Tablet_Saving_Fourth setLoadedPage={setLoadedPage} setSelected={setSelected} ref={toggleRef} />
        </div>
      ) : (
        <div>
          <Tablet_Value_First />
          <Tablet_Value_Second />
          <Tablet_Value_Third ref={toggleRef} setSelected={setSelected} />
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
