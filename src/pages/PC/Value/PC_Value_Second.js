import React from 'react';
import styled from 'styled-components';
import phoneImage from '../../../assets/valueSecondPhoneImage.png';
import checkIcon from '../../../assets/checkIcon.png';
import couponImage from '../../../assets/couponImage.png';
import { useAnimationOnScroll } from '../../../hooks/useAnimationOnScroll';

export default function PC_Value_Second() {
  const [setRef, isVisible] = useAnimationOnScroll();

  return (
    <ContainerWrapper>
      <MainContainer>
        <BodyContainer ref={setRef}>
          <TitleContainer className={isVisible && 'animation'}>
            <TitleBox>
              <TitleBoxText>STEP 02</TitleBoxText>
            </TitleBox>
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
  width: 1440px;
  height: 882px; //1459
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 615px;
  margin-top: 158.5px; //174 - 15.5
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

const CheckIcon = styled.img`
  position: absolute;
  width: 159px;
  height: 159px;
  bottom: 60px;
  right: 565px;
  opacity: 0;
  &.animation {
    animation: fadeInObject 0.8s forwards;
    animation-delay: 1s;
  }
`;

const CouponImg = styled.img`
  position: absolute;
  width: 249px;
  height: 399px;
  top: 58px;
  right: 230px;
  opacity: 0;
  &.animation {
    animation: fadeInApp 0.8s forwards;
    animation-delay: 1.4s;
  }
`;
