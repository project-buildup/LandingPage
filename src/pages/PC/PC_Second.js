import React from 'react';
import styled from 'styled-components';
import circleImage from '../../assets/circleImage.png';
import phoneImage from '../../assets/secondPhoneImage.png';
import triangleIcon from '../../assets/triangleIconGray.png';
import blueArrowDown from '../../assets/blueArrowDown.png';
import blueArrowUp from '../../assets/blueArrowUp.png';
import redBackIcon from '../../assets/redBackIcon.png';
import moneyIcon from '../../assets/moneyIcon.png';

export default function PC_Second() {
  return (
    <MainContainer>
      <TitleContainer>
        <TitleBox>MEANING</TitleBox>
        <TitleText>
          절약이&nbsp;
          <BlueText>합리적인 소비</BlueText>로
        </TitleText>
        <TitleText>이어지는 솔루션</TitleText>
      </TitleContainer>
      <BodyContainer>
        <LeftTextWrapper>
          <LeftText>절약으로</LeftText>
          <LeftText>돈을 잘 모으고</LeftText>
        </LeftTextWrapper>
        <ImageContainer>
          <CircleImg src={circleImage} alt="circle" />
          <ArrowContainer>
            <ArrowWrapper>
              <ArrowHiddenWrapper>
                <ArrowImg src={blueArrowDown} alt="arrow" />
              </ArrowHiddenWrapper>
            </ArrowWrapper>
          </ArrowContainer>
          <ArrowContainer2>
            <ArrowWrapper2>
              <ArrowHiddenWrapper2>
                <ArrowImg2 src={blueArrowUp} alt="arrow" />
              </ArrowHiddenWrapper2>
            </ArrowWrapper2>
          </ArrowContainer2>
          <RedBackIcon src={redBackIcon} alt="red back" />
          <MoneyIcon src={moneyIcon} alt="money" />
          <PhoneImgWrapper>
            <PhoneImg src={phoneImage} alt="phone" />
          </PhoneImgWrapper>
        </ImageContainer>
        <RightContainer>
          <RightText>현명하게</RightText>
          <RightText>잘 소비하는 일</RightText>
          <TriangleIcon src={triangleIcon} alt="triangle" />
          <RightTextBox>
            <BoxText>헬스 · 마인드케어</BoxText>
            <BoxText>자기 계발 · 귀중한 경험</BoxText>
          </RightTextBox>
        </RightContainer>
      </BodyContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 1440px;
  height: 1065px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #000000;
`;

const TitleContainer = styled.div`
  padding-top: 135px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleBox = styled.div`
  width: 114px;
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
  font-weight: 700;
  font-size: 40px;
`;

const BlueText = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2484f3;
  font-weight: 700;
  font-size: 40px;
`;

const BodyContainer = styled.div`
  position: relative;
  margin-top: 5px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LeftTextWrapper = styled.div`
  position: relative;
  top: 60px;
  width: 253px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LeftText = styled.div`
  font-size: 35px;
  font-weight: 700;
  color: white;
  width: 253px;
  text-align: center;
`;

const ImageContainer = styled.div`
  height: 641px;
  width: 650px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CircleImg = styled.img`
  position: absolute;
  height: 641px;
`;

const ArrowContainer = styled.div`
  width: 536px;
  height: 641px;
  position: absolute;
  display: flex;
  justify-content: center;
`;
const ArrowWrapper = styled.div`
  width: 550px;
  height: 312px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  position: absolute;
`;

const ArrowHiddenWrapper = styled.div`
  position: absolute;
  /* top: -58px; */
  width: 536px;
  height: 641px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transform-origin: 49.5% 50%;
  animation: rotate 1.2s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
`;
const ArrowImg = styled.img`
  width: 536px;
  height: 254.5px;
  transform: rotate(180deg);
  margin-bottom: 57px;
`;

const ArrowContainer2 = styled.div`
  width: 536px;
  height: 641px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const ArrowWrapper2 = styled.div`
  width: 550px;
  height: 312px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  position: absolute;
`;

const ArrowHiddenWrapper2 = styled.div`
  position: absolute;
  bottom: 0px;
  width: 536px;
  height: 641px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transform-origin: 50.5% 50%;
  animation: rotate 1.2s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
`;
const ArrowImg2 = styled.img`
  width: 536px;
  height: 254.5px;
  transform: rotate(180deg);
  margin-top: 57px;
`;

const RedBackIcon = styled.img`
  height: 112px;
  position: absolute;
  right: 20px;
  bottom: 314px;
`;

const MoneyIcon = styled.img`
  height: 112px;
  position: absolute;
  left: 20px;
  top: 314px;
`;

const PhoneImgWrapper = styled.div`
  position: relative;
  width: 510px;
  height: 641px;
  display: flex;
  align-items: flex-end;
`;
const PhoneImg = styled.img`
  /* bottom: 0; */
  height: 514px;
`;

const RightContainer = styled.div`
  position: relative;
  top: 54px;
  width: 253px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

const RightText = styled.div`
  font-size: 35px;
  font-weight: 700;
  color: white;
`;
const TriangleIcon = styled.img`
  height: 14px;
  margin-top: 24px;
`;
const RightTextBox = styled.div`
  width: 253px;
  height: 100px;
  border-radius: 30px;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoxText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;
