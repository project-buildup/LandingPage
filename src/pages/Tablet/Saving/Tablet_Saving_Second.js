import React from 'react';
import styled from 'styled-components';
import phoneImage from '../../../assets/savingFirstPhoneImageTablet.png';
import challengeTexiImage from '../../../assets/challengeTexiImage.png';
import challengeDeliveryImage from '../../../assets/challengeDeliveryImage.png';
import { useAnimationOnScroll } from '../../../hooks/useAnimationOnScroll';

export default function Tablet_Saving_Second() {
  const [setRef, isVisible] = useAnimationOnScroll();

  return (
    <ContainerWrapper>
      <MainContainer>
        <BodyContainer ref={setRef}>
          <TitleContainer className={isVisible && 'animation'}>
            <TitleBox>
              STEP 01
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
  width: 768px;
  height: 702px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  position: relative;
  width: 768px;
  margin-top: 102px; //115 - 13
  padding-left: 41px;
  padding-right: 103px;
  display: flex;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  width: 322px;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
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
  font-family: 'GmarketSans';
  font-size: 12px;
  font-weight: 700;
  color: white;
`;

const TitleTextWrapper = styled.div`
  height: 39px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
`;

const TitleText = styled.div`
  height: 39px;
  display: flex;
  align-items: center;
  color: black;
  font-weight: 700;
  font-size: 30px;
`;

const TitleBlueText = styled.div`
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2484f3;
  font-weight: 700;
  font-size: 30px;
`;

const TitleContentText = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
`;

const PhoneImg = styled.img`
  width: 259px; //233 26
  height: 504px; //477.45 27
  opacity: 0;
  &.animation {
    animation: fadeInApp 0.8s forwards;
    animation-delay: 0.6s;
  }
`;

const ChallengeImg = styled.img`
  position: absolute;
  width: 209px; // 345, 303, 42

  &#texi {
    top: 80px;
    right: 40px;
    opacity: 0;
    &.animation {
      animation: fadeInObject 0.8s forwards;
      animation-delay: 1s;
    }
  }

  &#delivery {
    bottom: 120px;
    right: 200px;
    opacity: 0;
    &.animation {
      animation: fadeInObject 0.8s forwards;
      animation-delay: 1.4s;
    }
  }
`;
