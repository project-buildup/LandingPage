import React from 'react';
import styled from 'styled-components';
import phoneImage from '../../../assets/savingThirdPhoneImage.png';
import archivingCardImage from '../../../assets/archivingCardImage.png';
import { useAnimationOnScroll } from '../../../hooks/useAnimationOnScroll';

export default function Mobile_Saving_Fourth() {
  const [setRef, isVisible] = useAnimationOnScroll();

  return (
    <ContainerWrapper>
      <MainContainer>
        <BodyContainer ref={setRef}>
          <TitleContainer className={isVisible && 'animation'}>
            <TitleBox>STEP 03</TitleBox>
            <TitleText>나의 절약 업적을</TitleText>
            <TitleTextWrapper>
              <TitleBlueText>한 번에 확인</TitleBlueText>
              <TitleText>해보세요</TitleText>
            </TitleTextWrapper>
            <TitleContentText>절약을 했다는 것</TitleContentText>
            <TitleContentText>그 자체만으로 뿌듯해져요</TitleContentText>
          </TitleContainer>
          <PhoneImg className={isVisible && 'animation'} src={phoneImage} alt="phone" />
          <ArchivingImg className={isVisible && 'animation'} src={archivingCardImage} alt="archiving" />
        </BodyContainer>
      </MainContainer>
    </ContainerWrapper>
  );
}
const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #eff6ff;
`;

const MainContainer = styled.div`
  width: 360px;
  height: 811px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  position: relative;
  margin-top: 83px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  &.animation {
    animation: fadeInObject 0.8s forwards;
  }
`;

const TitleBox = styled.div`
  width: 98px;
  height: 27px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2484f3;
  color: white;
  font-weight: 700;
  font-size: 12px;
  font-family: 'GmarketSans';
`;

const TitleTextWrapper = styled.div`
  height: 32px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`;

const TitleText = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  color: black;
  font-weight: 700;
  font-size: 25px;
`;

const TitleBlueText = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2484f3;
  font-weight: 700;
  font-size: 25px;
`;

const TitleContentText = styled.div`
  height: 18px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
`;

const PhoneImg = styled.img`
  width: 195px; //195 175.2
  height: 379px; //379 359
  opacity: 0;
  &.animation {
    animation: fadeInApp 0.8s forwards;
    animation-delay: 0.6s;
  }
`;

const ArchivingImg = styled.img`
  position: absolute;
  width: 150px;
  top: 230px;
  left: 120px;
  opacity: 0;
  &.animation {
    animation: fadeInApp 0.8s forwards;
    animation-delay: 1s;
  }
`;
