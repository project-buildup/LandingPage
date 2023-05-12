import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import phoneImage from '../../../assets/savingThirdPhoneImage.png';
import archivingCardImage from '../../../assets/archivingCardImage.png';
import { useAnimationOnScroll } from '../../../hooks/useAnimationOnScroll';

const Tablet_Saving_Fourth = forwardRef(function Tablet_Saving_Fourth(props, ref) {
  Tablet_Saving_Fourth.propTypes = {
    setLoadedPage: PropTypes.func.isRequired,
    setSelected: PropTypes.func.isRequired,
  };

  const { setLoadedPage, setSelected } = { ...props };

  const [setRef, isVisible] = useAnimationOnScroll();

  const handleGoValue = () => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => setSelected('value'), 800);
  };

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
          <ArchivingImg
            className={isVisible && 'animation'}
            src={archivingCardImage}
            alt="archiving"
            onLoad={() => setLoadedPage(5)}
          />
        </BodyContainer>
        <GoValueButton className={isVisible && 'animation'} onClick={() => handleGoValue()}>
          가치소비 추천 보러가기
        </GoValueButton>
      </MainContainer>
    </ContainerWrapper>
  );
});

export default Tablet_Saving_Fourth;

const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #eff6ff;
`;

const MainContainer = styled.div`
  width: 768px;
  height: 880px;
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

const ArchivingImg = styled.img`
  position: absolute;
  width: 160px;
  top: 126px;
  right: 45px;
  opacity: 0;
  &.animation {
    animation: fadeInApp 0.8s forwards;
    animation-delay: 1s;
  }
`;

const GoValueButton = styled.div`
  width: 202px;
  height: 49px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2484f3;
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin-top: 120px;
  cursor: pointer;
  opacity: 0;
  &.animation {
    animation: fadeInApp 0.8s forwards;
    animation-delay: 1.4s;
  }
`;
