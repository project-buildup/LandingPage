import React from 'react';
import styled from 'styled-components';
import circleImage from '../../assets/circleImagePhone.png';
import phoneImage from '../../assets/secondPhoneImage.png';
import triangleIcon from '../../assets/triangleIconGray.png';
import blueArrowDown from '../../assets/blueArrowDownPhone.png';
import blueArrowUp from '../../assets/blueArrowUpPhone.png';
import redBackIcon from '../../assets/redBackIcon.png';
import moneyIcon from '../../assets/moneyIcon.png';
import { useAnimationOnScroll } from '../../hooks/useAnimationOnScroll';

export default function Mobile_Second() {
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
          <TopTextWrapper>
            <TopText>절약으로</TopText>
            <TopText>돈을 잘 모으고</TopText>
          </TopTextWrapper>
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
          <BottomText>현명하게</BottomText>
          <BottomText>잘 소비하는 일</BottomText>
          <TriangleIcon src={triangleIcon} alt="triangle" />
          <BottomTextBox>
            <BoxText>헬스 · 마인드케어</BoxText>
            <BoxText>자기 계발 · 귀중한 경험</BoxText>
          </BottomTextBox>
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
  width: 360px;
  height: 946px;
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
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 25px;
`;

const BlueText = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2484f3;
  font-weight: 700;
  font-size: 25px;
`;

const BodyContainer = styled.div`
  position: relative;
  margin-top: 55px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TopText = styled.div`
  height: 19px;
  font-size: 15px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 350px;
  width: 350px;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CircleImg = styled.img`
  position: absolute;
  height: 350px;
`;

const ArrowContainer = styled.div`
  width: 260px;
  height: 350px;
  position: absolute;
  display: flex;
  justify-content: center;
  /* background-color: red; */
`;
const ArrowWrapper = styled.div`
  width: 260px;
  height: 171px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  /* background-color: purple; */
`;

const ArrowHiddenWrapper = styled.div`
  position: absolute;
  width: 260px;
  height: 350px;
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
  width: 243px;
  height: 112px;
  transform: rotate(180deg);
  margin-bottom: 58px;
  margin-left: 11.5px;
`;

const ArrowContainer2 = styled.div`
  width: 260px;
  height: 350px;
  position: absolute;
  display: flex;
  justify-content: center;
`;
const ArrowWrapper2 = styled.div`
  width: 260px;
  height: 171px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  bottom: 0;
`;

const ArrowHiddenWrapper2 = styled.div`
  position: absolute;
  width: 260px;
  height: 350px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  &.animation {
    transform-origin: 50% 50%;
    animation: rotate 1.2s forwards;
    animation-delay: 0s;
  }
  bottom: 0;
`;
const ArrowImg2 = styled.img`
  width: 243px;
  height: 112px;
  transform: rotate(180deg);
  margin-right: 8px;
  margin-top: 59px;
`;

const RedBackIcon = styled.img`
  height: 50px;
  position: absolute;
  right: 36px;
  top: 128px;
`;

const MoneyIcon = styled.img`
  height: 50px;
  position: absolute;
  left: 36px;
  bottom: 128px;
`;

const PhoneImgWrapper = styled.div`
  position: relative;
  width: 232px;
  height: 304px;
  display: flex;
  align-items: flex-end;
`;
const PhoneImg = styled.img`
  /* bottom: 0; */
  height: 235px;
`;

const BottomText = styled.div`
  height: 19px;
  font-size: 15px;
  font-weight: 700;
  color: white;
  text-align: center;
`;
const TriangleIcon = styled.img`
  height: 8px;
  margin-top: 8px;
`;
const BottomTextBox = styled.div`
  width: 151px;
  height: 60px;
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
