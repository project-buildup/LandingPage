import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tablet_Fifth = forwardRef(function Tablet_Fifth(props, ref) {
  Tablet_Fifth.propTypes = {
    selected: PropTypes.string.isRequired,
    setSelected: PropTypes.func.isRequired,
  };

  const { selected, setSelected } = { ...props };

  return (
    <ContainerWrapper ref={ref}>
      <MainContainer>
        <TitleContainer>
          <TitleBox>POINT 02</TitleBox>
          <TitleText>돈 잘 모으고, 잘 쓰는 일은</TitleText>
          <TitleText>GASOMANN에게 맡겨주세요</TitleText>
        </TitleContainer>
        <BodyContainer>
          <SelectContainer className={selected === 'saving' && 'selected'} onClick={() => setSelected('saving')}>
            <Text>절약 챌린지</Text>
          </SelectContainer>
          <SelectContainer className={selected === 'value' && 'selected'} onClick={() => setSelected('value')}>
            <Text>가치소비 추천</Text>
          </SelectContainer>
        </BodyContainer>
      </MainContainer>
    </ContainerWrapper>
  );
});

export default Tablet_Fifth;

const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.div`
  width: 768px;
  height: 405px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 174px;
`;

const TitleBox = styled.div`
  width: 88px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-family: 'GmarketSans';
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 10px;
`;

const TitleText = styled.div`
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: 700;
  font-size: 30px;
`;

const BodyContainer = styled.div`
  margin-top: 73px;
  width: 468px;
  height: 43px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectContainer = styled.div`
  width: 243px;
  height: 43px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #989898;

  &.selected {
    color: black;
    border-bottom: 5px solid black;
  }

  cursor: pointer;
`;

const Text = styled.div`
  height: 28px;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
