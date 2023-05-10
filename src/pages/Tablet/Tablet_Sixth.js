import React from 'react';
import styled from 'styled-components';
import targetImage from '../../assets/targetImage.png';
export default function Tablet_Sixth() {
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
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #000000;
`;

const MainContainer = styled.div`
  position: relative;
  width: 768px;
  height: 746px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  height: 231px;
  margin-top: 177px;
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
  margin-bottom: 10px;
`;

const TitleText = styled.div`
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 400;
  font-size: 30px;
`;

const BoldText = styled.div`
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 30px;
`;

const Line = styled.div`
  margin: 20px 0px;
  height: 1px;
  width: 491px;
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
  height: 91px;
  margin-top: 75px;
  font-size: 70px;
  font-family: 'GmarketSans';
  font-weight: 700;
  opacity: 0.4;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TargetImg = styled.img`
  width: 254px;
  height: 254px;
  position: absolute;
  top: 384px;
  left: 258px;
`;
