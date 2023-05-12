import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mapImage from '../../../assets/mapImage.png';
import triangleIcon from '../../../assets/triangleIconBlue.png';
import okayImage from '../../../assets/okayImage.png';
import { useAnimationOnScroll } from '../../../hooks/useAnimationOnScroll';

const Tablet_Value_Third = forwardRef(function Tablet_Value_Third(props, ref) {
  Tablet_Value_Third.propTypes = {
    setSelected: PropTypes.func.isRequired,
  };

  const { setSelected } = { ...props };
  const [setRef, isVisible] = useAnimationOnScroll();

  const handleGoSavingClick = () => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => setSelected('saving'), 800);
  };

  return (
    <ContainerWrapper>
      <MainContainer>
        <BodyContainer ref={setRef}>
          <TitleContainer className={isVisible && 'animation'}>
            <TitleBox>SERVICE</TitleBox>
            <TitleText>현재 대구지역에서만</TitleText>
            <TitleText>지원하고 있어요</TitleText>
            <TitleContentWrapper>
              <TitleContentText>다른지역 오프라인 가치소비는</TitleContentText>
              <TitleContentText>조금만 기다려주세요</TitleContentText>
            </TitleContentWrapper>
          </TitleContainer>
          <MapImg className={isVisible && 'animation'} src={mapImage} alt="map" />
        </BodyContainer>
        <TextBoxWrapper className={isVisible && 'animation'}>
          <TriangleIcon src={triangleIcon} alt="triangle" />
          <TextBox>
            <BoxText>부산지역과 온라인에서도 GASOMANN의</BoxText>
            <BoxText>가치소비를 곧 만나볼 수 있어요!</BoxText>
            <OkayImg src={okayImage} alt="okay" />
          </TextBox>
        </TextBoxWrapper>
        <GoSavingButton className={isVisible && 'animation'} onClick={() => handleGoSavingClick()}>
          절약 챌린지 보러가기
        </GoSavingButton>
      </MainContainer>
    </ContainerWrapper>
  );
});

export default Tablet_Value_Third;

const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #eff6ff;
`;

const MainContainer = styled.div`
  width: 768px;
  height: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyContainer = styled.div`
  position: relative;
  width: 768px;
  margin-top: 93px; //115 - 13
  padding-left: 41px;
  padding-right: 103px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.div`
  width: 322px;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  &.animation {
    animation: fadeInObject 0.8s forwards;
  }
`;

const TitleBox = styled.div`
  width: 106px;
  height: 27px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
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

const TitleContentWrapper = styled.div`
  height: 52px;
  margin-top: 18px;
  margin-bottom: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleContentText = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
`;

const MapImg = styled.img`
  width: 381px;
  opacity: 0;
  &.animation {
    animation: fadeInApp 0.8s forwards;
    animation-delay: 0.6s;
  }
`;

const TextBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  &.animation {
    animation: fadeInObject 0.8s forwards;
    animation-delay: 1.2s;
  }
`;
const TriangleIcon = styled.img`
  height: 18px;
  margin-top: 59px;
`;

const TextBox = styled.div`
  position: relative;
  width: 688px;
  height: 155px;
  border-radius: 30px;
  background-color: #2484f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BoxText = styled.div`
  height: 31px;
  margin-left: 212px;
  font-size: 24px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
`;

const OkayImg = styled.img`
  width: 130px;
  height: 125px;
  position: absolute;
  left: 67px;
  bottom: 0px;
`;

const GoSavingButton = styled.div`
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
  margin-top: 110px;
  cursor: pointer;

  opacity: 0;
  &.animation {
    animation: fadeInObject 0.8s forwards;
    animation-delay: 1.6s;
  }
`;
