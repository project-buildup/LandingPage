import React from 'react';
import styled from 'styled-components';
import phoneImage from '../../../assets/valueSecondPhoneImage.png';
import checkIcon from '../../../assets/checkIcon.png';
import couponImage from '../../../assets/couponImage.png';
import { useAnimationOnScroll } from '../../../hooks/useAnimationOnScroll';

export default function Mobile_Value_Second() {
  const [setRef, isVisible] = useAnimationOnScroll();

  return (
    <ContainerWrapper>
      <MainContainer>
        <BodyContainer ref={setRef}>
          <TitleContainer className={isVisible && 'animation'}>
            <TitleBox>STEP 02</TitleBox>
            <TitleText>쿠폰별 달성금액 절약</TitleText>
            <TitleTextWrapper>
              <TitleText>성공하고 가치소비&nbsp;</TitleText>
              <TitleBlueText>할인받기</TitleBlueText>
            </TitleTextWrapper>
            <TitleContentText>쿠폰 별 일정금액 절약만 성공하면,</TitleContentText>
            <TitleContentText>할인쿠폰까지 제공해줘요!</TitleContentText>
          </TitleContainer>
          <PhoneImg className={isVisible && 'animation'} src={phoneImage} alt="phone" />
          <CheckIcon className={isVisible && 'animation'} src={checkIcon} alt="like icon" />
          <CouponImg className={isVisible && 'animation'} src={couponImage} alt="coupon" />
        </BodyContainer>
      </MainContainer>
    </ContainerWrapper>
  );
}
const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f9f9fa;
`;

const MainContainer = styled.div`
  width: 360px;
  height: 748px;
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

const CheckIcon = styled.img`
  position: absolute;
  width: 72px;
  height: 72px;
  bottom: 60px;
  left: 10px;
  opacity: 0;
  &.animation {
    animation: fadeInObject 0.8s forwards;
    animation-delay: 1s;
  }
`;

const CouponImg = styled.img`
  position: absolute;
  width: 125px;
  bottom: 98px;
  left: 156px;
  opacity: 0;
  &.animation {
    animation: fadeInApp 0.8s forwards;
    animation-delay: 1.4s;
  }
`;
