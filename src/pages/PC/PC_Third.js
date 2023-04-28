import React from 'react';
import styled from 'styled-components';
import thirdPageImage from '../../assets/thirdPageImage.png';

export default function PC_Third() {
  return (
    <MainContainer>
      <TitleContainer>
        <TitleBox>당신의 절약과 소비,</TitleBox>
        <TitleText>GASOMANN이 연결합니다</TitleText>
      </TitleContainer>
      <BodyContainer>
        <ThirdPageImg src={thirdPageImage} alt="circle" />
        <TextContainer>
          <TextWrapper>
            <BoldText>가치있는 소비하기</BoldText>
            <Text>나를 성장시킬 수 있는</Text>
            <Text>돈이 아깝지 않은 소비만 하기</Text>
          </TextWrapper>
          <Line />
          <TextWrapper>
            <BoldText>충동적인 홧김소비는 그만!</BoldText>
            <Text>아, 조금만 참을 걸...</Text>
            <Text>다음날 후회했던 소비 줄이기</Text>
          </TextWrapper>
        </TextContainer>
      </BodyContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 1440px;
  height: 1068px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
`;

const TitleContainer = styled.div`
  padding-top: 135px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleBox = styled.div`
  width: 269.13px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 19px;
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
  position: relative;
  margin-top: 29px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  position: absolute;
  top: 522px;
  left: 719.5px;
  height: 256px;
  width: 1px;
  background-color: black;
`;

const ThirdPageImg = styled.img`
  width: 876px;
  height: 545px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  width: 790px;
  height: 96px;
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 8px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoldText = styled.div`
  height: 32px;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  height: 28px;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;
