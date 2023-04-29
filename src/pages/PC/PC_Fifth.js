import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function PC_Fifth({ selected, setSelected }) {
  PC_Fifth.propTypes = {
    selected: PropTypes.string.isRequired,
    setSelected: PropTypes.func.isRequired,
  };

  return (
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
  );
}

const MainContainer = styled.div`
  width: 1440px;
  height: 467px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #878787;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 198px;
`;

const TitleBox = styled.div`
  width: 110px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-family: 'GmarketSans';
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 10px;
`;

const TitleText = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: 700;
  font-size: 40px;
`;

const BodyContainer = styled.div`
  margin-top: 78px;
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
