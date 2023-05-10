import React from 'react';
import styled from 'styled-components';
import phoneImage from '../../../assets/valueFirstPhoneImage.png';
import likeIcon from '../../../assets/likeIcon.png';
import { useAnimationOnScroll } from '../../../hooks/useAnimationOnScroll';

export default function Tablet_Value_First() {
  const [setRef, isVisible] = useAnimationOnScroll();

  return (
    <ContainerWrapper>
      <MainContainer>
        <BodyContainer ref={setRef}>
          <TitleContainer className={isVisible && 'animation'}>
            <TitleBox>
              STEP 01
            </TitleBox>
            <TitleText>GASOMANN에서 </TitleText>
            <TitleText>나에게 필요한</TitleText>
            <TitleTextWrapper>
            <TitleText>가치소비를&nbsp;</TitleText>
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
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.div`
  width: 768px;
  height: 748px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  position: relative;
  width: 768px;
  margin-top: 93px; //115 - 13
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

const LikeIcon = styled.img`
  position: absolute;
  width: 120px;
  height: 120px;
  bottom: 140px;
  right: 280px;
  opacity: 0;
  &.animation {
    animation: fadeInObject 0.8s forwards;
    animation-delay: 1s;
  }
`;
