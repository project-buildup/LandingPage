import React from 'react';
import styled from 'styled-components';
import phoneImage from '../../../assets/savingFirstPhoneImage.png';
import challengeTexiImage from '../../../assets/challengeTexiImage.png';
import challengeDeliveryImage from '../../../assets/challengeDeliveryImage.png';
import { useAnimationOnScroll } from '../../../hooks/useAnimationOnScroll';

export default function Mobile_Saving_Second() {
  const [setRef, isVisible] = useAnimationOnScroll();

  return (
    <ContainerWrapper>
      <MainContainer>
        <BodyContainer ref={setRef}>
          <TitleContainer className={isVisible && 'animation'}>
            <TitleBox>STEP 01</TitleBox>
            <TitleText>내가 참여하고싶은</TitleText>
            <TitleTextWrapper>
              <TitleText>챌린지&nbsp;</TitleText>
              <TitleBlueText>선택하기</TitleBlueText>
            </TitleTextWrapper>
            <TitleContentText>다양한 챌린지 선택의 폭으로</TitleContentText>
            <TitleContentText>지겹지않게 도전할 수 있어요!</TitleContentText>
          </TitleContainer>
          <PhoneImg className={isVisible && 'animation'} src={phoneImage} alt="phone" />
          <ChallengeImg id="texi" className={isVisible && 'animation'} src={challengeTexiImage} alt="texi challenge" />
          <ChallengeImg
            id="delivery"
            className={isVisible && 'animation'}
            src={challengeDeliveryImage}
            alt="delivery challenge"
          />
        </BodyContainer>
      </MainContainer>
    </ContainerWrapper>
  );
}
const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.div`
  width: 360px;
  height: 756px;
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
  margin-top: 19px;
  width: 195px; //195 175.2
  height: 379px; //379 359
  opacity: 0;
  &.animation {
    animation: fadeInApp 0.8s forwards;
    animation-delay: 0.6s;
  }
`;

const ChallengeImg = styled.img`
  position: absolute;
  width: 152px;

  &#texi {
    top: 262px;
    left: 90px;
    opacity: 0;
    &.animation {
      animation: fadeInObject 0.8s forwards;
      animation-delay: 1s;
    }
  }

  &#delivery {
    top: 406px;
    right: 90px;
    opacity: 0;
    &.animation {
      animation: fadeInObject 0.8s forwards;
      animation-delay: 1.4s;
    }
  }
`;
