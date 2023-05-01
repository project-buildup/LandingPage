import React from 'react';
import styled from 'styled-components';
import mapImage from '../../../assets/mapImage.png';
import triangleIcon from '../../../assets/triangleIconBlue.png';
import okayImage from '../../../assets/okayImage.png';
import { useAnimationOnScroll } from '../../../hooks/useAnimationOnScroll';

export default function PC_Value_Third() {
  const [setRef, isVisible] = useAnimationOnScroll();

  return (
    <ContainerWrapper>
      <MainContainer>
        <BodyContainer ref={setRef}>
          <TitleContainer className={isVisible && 'animation'}>
            <TitleBox>
              <TitleBoxText>SERVICE</TitleBoxText>
            </TitleBox>
            <TitleText>현재 대구지역에서만</TitleText>
            <TitleText>지원하고 있어요</TitleText>
            <TitleContentWrapper>
              <TitleContentText>다른지역 오프라인</TitleContentText>
              <TitleContentText>가치소비는 조금만 기다려주세요</TitleContentText>
            </TitleContentWrapper>
            <PartnerButton>제휴업체 확인하기</PartnerButton>
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
      </MainContainer>
    </ContainerWrapper>
  );
}
const ContainerWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #eff6ff;
`;

const MainContainer = styled.div`
  width: 1440px;
  height: 951px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #eff6ff;
`;

const BodyContainer = styled.div`
  position: relative;
  width: 930px;
  margin-top: 129px;
  display: flex;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  height: 321px;
  margin-top: 84px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  &.animation {
    animation: fadeInObject 0.8s forwards;
  }
`;

const TitleBox = styled.div`
  width: 106px;
  height: 34px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
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

const TitleText = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
  color: black;
  font-weight: 700;
  font-size: 45px;
`;

const TitleContentWrapper = styled.div`
  margin-top: 18px;
`;

const TitleContentText = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
`;

const PartnerButton = styled.div`
  width: 199px;
  height: 46px;
  margin-top: 34px;
  border-radius: 6px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
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
  width: 745px;
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
