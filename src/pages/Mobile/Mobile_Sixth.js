import React from 'react';
import styled from 'styled-components';
import targetImage from '../../assets/targetImage.png';
export default function Mobile_Sixth() {
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
        <BigText>COMMING</BigText>
        <BigText>SOON</BigText>
        <TargetImg src={targetImage} alt="target" />
      </MainContainer>
    </ContainerWrapper>
  );
}
const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #000000;
`;

const MainContainer = styled.div`
  position: relative;
  width: 360px;
  height: 631px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  margin-top: 121px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleBox = styled.div`
  width: 84px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-family: 'GmarketSans';
  font-size: 12px;
  margin-bottom: 14px;
`;

const TitleText = styled.div`
  height: 32.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 400;
  font-size: 25px;
`;

const BoldText = styled.div`
  height: 32.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 25px;
`;

const Line = styled.div`
  margin: 20px 0px;
  height: 1px;
  width: 300px;
  background-color: white;
`;

const SmallText = styled.div`
  height: 18px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 59px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BigText = styled.div`
  height: 70px;
  font-size: 54px;
  font-family: 'GmarketSans';
  font-weight: 700;
  opacity: 0.4;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TargetImg = styled.img`
  width: 217px;
  height: 217px;
  position: absolute;
  bottom: 128px;
  left: 80px;
`;
