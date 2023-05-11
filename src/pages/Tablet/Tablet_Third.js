import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gasomannCircle from '../../assets/gasomannCircle.png';
import valuableImage from '../../assets/valuableImage.png';
import stressfuImage from '../../assets/stressfuImage.png';
import dotCircle from '../../assets/dotCircle.png';
import { useAnimationOnScroll } from '../../hooks/useAnimationOnScroll';

export default function Tablet_Third({ setLoadedPage }) {
  Tablet_Third.propTypes = {
    setLoadedPage: PropTypes.func.isRequired,
  };

  const [setRef, isVisible] = useAnimationOnScroll();
  return (
    <ContainerWrapper>
      <MainContainer>
        <TitleContainer>
          <TitleBox>당신의 절약과 소비,</TitleBox>
          <TitleText>GASOMANN이 연결합니다</TitleText>
        </TitleContainer>
        <DotCircle className={isVisible && 'animation'} src={dotCircle} alt="dot circle" />
        <GasomannCircle src={gasomannCircle} alt="gasomann circle" />
        <Line className={isVisible && 'animation'} />
        <BodyContainer ref={setRef} className={isVisible && 'animation'}>
          <ContentContainer>
            <ContentImg src={valuableImage} alt="valuable" />
            <TextWrapper>
              <BoldText>가치 있는 소비하기</BoldText>
              <Text>나를 성장시킬 수 있는</Text>
              <Text>돈이 아깝지 않은 소비만 하기</Text>
            </TextWrapper>
          </ContentContainer>
          <ContentContainer>
            <ContentImg src={stressfuImage} alt="stressful" onLoad={() => setLoadedPage(3)} />
            <TextWrapper>
              <BoldText>충동적인 홧김소비는 그만!</BoldText>
              <Text>아, 조금만 참을 걸...</Text>
              <Text>다음날 후회했던 소비 줄이기</Text>
            </TextWrapper>
          </ContentContainer>
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
  position: relative;
  width: 768px;
  height: 1063px;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`;

const TitleContainer = styled.div`
  padding-top: 131px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleBox = styled.div`
  width: 218px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 14px;
`;

const TitleText = styled.div`
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: 700;
  font-size: 30px;
`;

const DotCircle = styled.img`
  position: absolute;
  top: 340px;
  width: 470px;
  height: 470px;
  opacity: 0;
  &.animation {
    animation: fadeInFromTop 1s ease-in-out forwards;
  }
`;

const GasomannCircle = styled.img`
  position: relative;
  width: 143px;
  height: 143px;
  margin-top: 29px;
`;

const BodyContainer = styled.div`
  position: relative;
  margin-top: 70px;
  width: 688px;
  display: flex;
  justify-content: space-between;
  opacity: 0;
  &.animation {
    animation: fadeInApp 1s ease-in-out forwards;
    animation-delay: 0.5s;
  }
`;

const Line = styled.div`
  position: absolute;
  bottom: -124px;
  left: 384px;
  height: 378px; //258
  width: 1px;
  background-color: black;
  opacity: 0;
  &.animation {
    animation: fadeInFromTop 1.5s ease-in-out forwards;
    animation-delay: 1s;
  }
`;

const ContentContainer = styled.div`
  width: 293px;
  height: 409px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 8px;
`;

const ContentImg = styled.img`
  width: 293px;
  height: 293px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoldText = styled.div`
  height: 32px;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  height: 28px;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;
