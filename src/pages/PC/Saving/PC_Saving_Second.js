import React from 'react';
import styled from 'styled-components';
import phoneImage from '../../../assets/savingFirstPhoneImage.png';
import challengeTexiImage from '../../../assets/challengeTexiImage.png';
import challengeDeliveryImage from '../../../assets/challengeDeliveryImage.png';
import { useAnimationOnScroll } from '../../../hooks/useAnimationOnScroll';

export default function PC_Saving_Second() {
  const [setRef, isVisible] = useAnimationOnScroll();

  return (
    <ContainerWrapper>
      <MainContainer>
        <BodyContainer ref={setRef}>
          <TitleContainer className={isVisible && 'animation'}>
            <TitleBox>
              <TitleBoxText>STEP 01</TitleBoxText>
            </TitleBox>
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
  width: 1440px;
  height: 859px; //1459
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 615px;
  margin-top: 131.5px; //147 - 15.5
  padding-left: 236px;
  padding-right: 345px;
  display: flex;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  width: 322px;
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

const ChallengeImg = styled.img`
  position: absolute;
  width: 345px; // 345, 303, 42
  height: 134px; // 134, 92, 42

  &#texi {
    top: 80px;
    right: 150px;
    opacity: 0;
    &.animation {
      animation: fadeInObject 0.8s forwards;
      animation-delay: 1s;
    }
  }

  &#delivery {
    bottom: 64px;
    right: 560px;
    opacity: 0;
    &.animation {
      animation: fadeInObject 0.8s forwards;
      animation-delay: 1.4s;
    }
  }
`;
