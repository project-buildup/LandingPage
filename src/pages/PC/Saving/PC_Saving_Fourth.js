import React from 'react';
import styled from 'styled-components';
import phoneImage from '../../../assets/savingThirdPhoneImage.png';
import archivingCardImage from '../../../assets/archivingCardImage.png';
import { useAnimationOnScroll } from '../../../hooks/useAnimationOnScroll';

export default function PC_Saving_Fourth() {
  const [setRef, isVisible] = useAnimationOnScroll();

  return (
    <ContainerWrapper>
      <MainContainer>
        <BodyContainer ref={setRef}>
          <TitleContainer className={isVisible && 'animation'}>
            <TitleBox>
              <TitleBoxText>STEP 03</TitleBoxText>
            </TitleBox>
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
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #eff6ff;
`;

const MainContainer = styled.div`
  width: 1440px;
  height: 972px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #eff6ff;
`;

const BodyContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 615px;
  margin-top: 179.5px; //195 - 15.5
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
  height: 26px;
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

const ArchivingImg = styled.img`
  position: absolute;
  width: 238px;
  height: 423px;
  top: 126px;
  right: 230px;
  opacity: 0;
  &.animation {
    animation: fadeInApp 0.8s forwards;
    animation-delay: 1s;
  }
`;
