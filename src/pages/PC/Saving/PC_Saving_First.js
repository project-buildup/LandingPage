import React from 'react';
import styled from 'styled-components';
import hamburgerIcon from '../../../assets/hamburgerIcon.png';
import coffeeIcon from '../../../assets/coffeeIcon.png';
import drinkIcon from '../../../assets/drinkIcon.png';
import triangleIcon from '../../../assets/triangleIconBlack.png';
import { useAnimationOnScroll } from '../../../hooks/useAnimationOnScroll';

export default function PC_Saving_First() {
  const [setRef, isVisible] = useAnimationOnScroll();
  return (
    <ContainerWrapper>
      <MainContainer>
        <ConsumeContainer ref={setRef} className={isVisible && 'animation'}>
          <ConsumeWrapper>
            <CircleImgWrapper>
              <CircleImg src={hamburgerIcon} alt="hamburgerIcon" />
            </CircleImgWrapper>
            <ConsumeTextWrapper>
              <ConsumeText>홧김에</ConsumeText>
              <ConsumeText>시켜먹는 야식</ConsumeText>
            </ConsumeTextWrapper>
          </ConsumeWrapper>
          <ConsumeWrapper>
            <CircleImgWrapper>
              <CircleImg src={coffeeIcon} alt="coffeeIcon" />
            </CircleImgWrapper>
            <ConsumeTextWrapper>
              <ConsumeText>습관적으로</ConsumeText>
              <ConsumeText>마시는 커피</ConsumeText>
            </ConsumeTextWrapper>
          </ConsumeWrapper>
          <ConsumeWrapper>
            <CircleImgWrapper>
              <CircleImg src={drinkIcon} alt="drinkIcon" />
            </CircleImgWrapper>
            <ConsumeTextWrapper>
              <ConsumeText>끊임없는</ConsumeText>
              <ConsumeText>번개 모임과 술자리</ConsumeText>
            </ConsumeTextWrapper>
          </ConsumeWrapper>
        </ConsumeContainer>
        <TextBoxWrapper className={isVisible && 'animation'}>
          <TriangleIcon src={triangleIcon} alt="triangle" />
          <TextBox>
            <BoxText>이러한 소비로 돈 아깝지 않으셨나요?</BoxText>
            <BoxBlueText>GASOMANN 챌린지기능으로 절약해요!</BoxBlueText>
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
`;

const MainContainer = styled.div`
  width: 1440px;
  height: 600px; //1459
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ConsumeContainer = styled.div`
  width: 667px;
  height: 241px;
  margin-top: 86px;
  display: flex;
  justify-content: space-between;
  opacity: 0;
  &.animation {
    animation: fadeInObject 0.8s forwards;
  }
`;

const ConsumeWrapper = styled.div`
  width: 169px;
  height: 241px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const CircleImgWrapper = styled.div`
  width: 169px;
  height: 169px;
  border-radius: 85px;
  background-color: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircleImg = styled.img`
  width: 104px;
`;

const ConsumeTextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ConsumeText = styled.div`
  height: 26px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  &.animation {
    animation: fadeInObject 0.8s forwards;
    animation-delay: 0.6s;
  }
`;
const TriangleIcon = styled.img`
  height: 18px;
  margin-top: 59px;
`;

const TextBox = styled.div`
  width: 667px;
  height: 130px;
  border-radius: 30px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoxText = styled.div`
  height: 32.5px;
  font-size: 24px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BoxBlueText = styled.div`
  height: 32.5px;
  font-size: 24px;
  font-weight: 700;
  color: #2484f3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
