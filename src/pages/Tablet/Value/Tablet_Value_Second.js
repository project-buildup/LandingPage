import React from 'react';
import styled from 'styled-components';
import phoneImage from '../../../assets/valueSecondPhoneImage.png';
import checkIcon from '../../../assets/checkIcon.png';
import couponImage from '../../../assets/couponImage.png';
import { useAnimationOnScroll } from '../../../hooks/useAnimationOnScroll';

export default function Tablet_Value_Second() {
  const [setRef, isVisible] = useAnimationOnScroll();

  return (
    <ContainerWrapper>
      <MainContainer>
        <BodyContainer ref={setRef}>
          <TitleContainer className={isVisible && 'animation'}>
            <TitleBox>
              STEP 02
            </TitleBox>
            <TitleText>쿠폰별 달성금액 절약</TitleText>
              <TitleText>성공하고 가치소비</TitleText>
            <TitleBlueText>할인받기</TitleBlueText>
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
  justify-content: flex-start;
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
  color: #2484f3;
  font-weight: 700;
  font-size: 30px;
  margin-bottom:18px
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
const CheckIcon = styled.img`
  position: absolute;
  width: 130px;
  height: 130px;
  bottom: 50px;
  right: 280px;
  opacity: 0;
  &.animation {
    animation: fadeInObject 0.8s forwards;
    animation-delay: 1s;
  }
`;

const CouponImg = styled.img`
  position: absolute;
  width: 164px;
  top: 58px;
  right: 40px;
  opacity: 0;
  &.animation {
    animation: fadeInApp 0.8s forwards;
    animation-delay: 1.4s;
  }
`;
