import React from 'react';
import styled from 'styled-components';
import mapImage from '../../../assets/mapImage.png';
import triangleIcon from '../../../assets/triangleIconBlue.png';
import { useAnimationOnScroll } from '../../../hooks/useAnimationOnScroll';

export default function Mobile_Value_Third() {
  const [setRef, isVisible] = useAnimationOnScroll();

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
            <BoxText>부산지역과 온라인에서도</BoxText>
            <BoxText>GASOMANN의 가치소비를 </BoxText>
            <BoxText>곧 만나볼 수 있어요!</BoxText>
          </TextBox>
        </TextBoxWrapper>
      </MainContainer>
    </ContainerWrapper>
  );
}
const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #eff6ff;
`;

const MainContainer = styled.div`
  width: 360px;
  height: 1065px;
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
  width: 106px;
  height: 27px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-weight: 700;
  font-size: 12px;
  font-family: 'GmarketSans';
`;

const TitleText = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  color: black;
  font-weight: 700;
  font-size: 25px;
`;
const TitleContentWrapper = styled.div`
  margin-top: 12px;
`;

const TitleContentText = styled.div`
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
`;

const MapImg = styled.img`
  height: 331px;
  opacity: 0;
  margin-top: 43px;
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
  margin-top: 27px;
`;

const TextBox = styled.div`
  position: relative;
  width: 328px;
  height: 132px;
  border-radius: 30px;
  background-color: #2484f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoxText = styled.div`
  height: 26px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
`;
