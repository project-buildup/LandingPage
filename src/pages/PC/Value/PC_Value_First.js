import React from 'react';
import styled from 'styled-components';
import phoneImage from '../../../assets/valueFirstPhoneImage.png';
import likeIcon from '../../../assets/likeIcon.png';
import { useAnimationOnScroll } from '../../../hooks/useAnimationOnScroll';

export default function PC_Value_First() {
  const [setRef, isVisible] = useAnimationOnScroll();

  return (
    <ContainerWrapper>
      <MainContainer>
        <BodyContainer ref={setRef}>
          <TitleContainer className={isVisible && 'animation'}>
            <TitleBox>
              <TitleBoxText>STEP 01</TitleBoxText>
            </TitleBox>
            <TitleText>GASOMANN에서 나에게</TitleText>
            <TitleTextWrapper>
              <TitleText>필요한 가치소비를&nbsp;</TitleText>
              <TitleBlueText>추천받기</TitleBlueText>
            </TitleTextWrapper>
            <TitleContentText>검증과정을 통해 후회하지 않을</TitleContentText>
            <TitleContentText>가치있는 소비만 추천해요!</TitleContentText>
          </TitleContainer>
          <PhoneImg className={isVisible && 'animation'} src={phoneImage} alt="phone" />
          <LikeIcon className={isVisible && 'animation'} src={likeIcon} alt="like icon" />
        </BodyContainer>
      </MainContainer>
    </ContainerWrapper>
  );
}
const ContainerWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.div`
  width: 1440px;
  height: 880px; //1459
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 615px;
  margin-top: 176.5px; //192 - 15.5
  padding-left: 236px;
  padding-right: 345px;
  display: flex;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  height: 246px;
  margin-top: 15.5px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  &.animation {
    animation: fadeInObject 0.8s forwards;
  }
`;

const TitleBox = styled.div`
  width: 116px;
  height: 34px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2484f3;
`;

const TitleBoxText = styled.div`
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 16px;
  font-family: 'GmarketSans';
`;

const TitleTextWrapper = styled.div`
  height: 58px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
`;

const TitleText = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
  color: black;
  font-weight: 700;
  font-size: 45px;
`;

const TitleBlueText = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2484f3;
  font-weight: 700;
  font-size: 45px;
`;

const TitleContentText = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 25px;
`;

const PhoneImg = styled.img`
  width: 315px; //285 30
  height: 615px; //584 31
  opacity: 0;
  &.animation {
    animation: fadeInApp 0.8s forwards;
    animation-delay: 0.6s;
  }
`;

const LikeIcon = styled.img`
  position: absolute;
  width: 159px;
  height: 159px;
  bottom: 160px;
  right: 560px;
  opacity: 0;
  &.animation {
    animation: fadeInObject 0.8s forwards;
    animation-delay: 1s;
  }
`;
