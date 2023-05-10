import React from 'react';
import styled from 'styled-components';
import circleImage from '../../assets/circleImageTablet.png';
import phoneImage from '../../assets/secondPhoneImage.png';
import triangleIcon from '../../assets/triangleIconGray.png';
import blueArrowDown from '../../assets/blueArrowDownTablet.png';
import blueArrowUp from '../../assets/blueArrowUpTablet.png';
import redBackIcon from '../../assets/redBackIcon.png';
import moneyIcon from '../../assets/moneyIcon.png';
import { useAnimationOnScroll } from '../../hooks/useAnimationOnScroll';

export default function Tablet_Second() {
  const [setRef, isVisible] = useAnimationOnScroll();

  return (
    <ContainerWrapper>
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
                <ArrowHiddenWrapper className={isVisible && 'animation'}>
                  <ArrowImg src={blueArrowDown} alt="arrow" />
                </ArrowHiddenWrapper>
              </ArrowWrapper>
            </ArrowContainer>
            <ArrowContainer2>
              <ArrowWrapper2>
                <ArrowHiddenWrapper2 ref={setRef} className={isVisible && 'animation'}>
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
  width: 768px;
  height: 810px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  padding-top: 122px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleBox = styled.div`
  width: 92px;
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
  font-weight: 700;
  font-size: 30px;
`;

const BlueText = styled.div`
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2484f3;
  font-weight: 700;
  font-size: 30px;
`;

const BodyContainer = styled.div`
  position: relative;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LeftTextWrapper = styled.div`
  position: absolute;
  top: 226px;
  left:-114px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LeftText = styled.div`
  height: 26px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  height: 430px;
  width: 430px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CircleImg = styled.img`
  position: absolute;
  height: 430px;
`;

const ArrowContainer = styled.div`
  width: 430px;
  height: 430px;
  position: absolute;
  display: flex;
  justify-content: center;
`;
const ArrowWrapper = styled.div`
  width: 430px;
  height: 210px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  position: absolute;
`;

const ArrowHiddenWrapper = styled.div`
  position: absolute;
  /* top: -58px; */
  width: 430px;
  height: 430px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  &.animation {
    transform-origin: 50% 50%;
    animation: rotate 1.2s forwards;
    animation-delay: 0s;
  }
`;
const ArrowImg = styled.img`
  width: 322px;
  height: 153px;
  transform: rotate(180deg);
  margin-bottom: 57px;
  margin-left:10px;
`;

const ArrowContainer2 = styled.div`
  width: 430px;
  height: 430px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const ArrowWrapper2 = styled.div`
  width: 430px;
  height: 210px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  position: absolute;
`;

const ArrowHiddenWrapper2 = styled.div`
  position: absolute;
  bottom: 0px;
  width: 430px;
  height: 430px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  &.animation {
    transform-origin: 50% 50%;
    animation: rotate 1.2s forwards;
    animation-delay: 0s;
  }
`;
const ArrowImg2 = styled.img`
  width: 322px;
  height: 153px;
  transform: rotate(180deg);
  margin-top: 57px;
  margin-right:10px;
`;

const RedBackIcon = styled.img`
  height: 68px;
  position: absolute;
  right: 30px;
  bottom: 213px;
`;

const MoneyIcon = styled.img`
  height: 68px;
  position: absolute;
  left: 30px;
  top: 213px;
`;

const PhoneImgWrapper = styled.div`
  position: relative;
  width: 320px;
  height: 410px;
  display: flex;
  align-items: flex-end;
`;
const PhoneImg = styled.img`
  /* bottom: 0; */
  height: 316px;
`;

const RightContainer = styled.div`
  position: absolute;
  top: 176px;
  right: -130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

const RightText = styled.div`
  height: 26px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TriangleIcon = styled.img`
  height: 10px;
  margin-top: 13px;
`;
const RightTextBox = styled.div`
  width: 151px;
  height: 68px;
  border-radius: 16px;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoxText = styled.div`
  height: 16px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
