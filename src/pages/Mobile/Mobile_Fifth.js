import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Mobile_Fifth({ selected, setSelected }) {
  Mobile_Fifth.propTypes = {
    selected: PropTypes.string.isRequired,
    setSelected: PropTypes.func.isRequired,
  };

  return (
    <ContainerWrapper>
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
}
const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.div`
  width: 360px;
  height: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 130px;
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
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: 700;
  font-size: 25px;
`;

const BodyContainer = styled.div`
  margin-top: 48px;
  width: 303px;
  height: 43px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectContainer = styled.div`
  width: 151.5px;
  height: 41px;
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
  height: 25px;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
