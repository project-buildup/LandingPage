import React from 'react';
import styled from 'styled-components';
import targetImage from '../../assets/targetImage.png';
export default function PC_Sixth() {
  return (
    <ContainerWrapper>
      <MainContainer>
        <TitleContainer>
          <TitleBox>MISSION</TitleBox>
          <TitleText>GASOMANN의 최종 목표는</TitleText>
          <BoldText>청년들의 소비권익 향상이에요</BoldText>
          <Line />
          <SmallText>청년들을 위한 금융교육 콘텐츠가 곧 찾아옵니다</SmallText>
        </TitleContainer>
        <BigText>COMMING SOON</BigText>
        <TargetImg src={targetImage} alt="target" />
      </MainContainer>
    </ContainerWrapper>
  );
}
const ContainerWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #000000;
`;

const MainContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 880px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #000000;
`;

const TitleContainer = styled.div`
  height: 231px;
  margin-top: 177px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleBox = styled.div`
  width: 104px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-family: 'GmarketSans';
  font-size: 16px;
  margin-bottom: 10px;
`;

const TitleText = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 400;
  font-size: 40px;
`;

const BoldText = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 40px;
`;

const Line = styled.div`
  margin: 30px 0px;
  height: 1px;
  width: 683px;
  background-color: white;
`;

const SmallText = styled.div`
  height: 23px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BigText = styled.div`
  height: 182px;
  margin-top: 75px;
  font-size: 140px;
  font-family: 'GmarketSans';
  font-weight: 700;
  opacity: 0.4;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TargetImg = styled.img`
  width: 312;
  height: 312px;
  position: absolute;
  top: 391px;
  left: 576px;
`;
