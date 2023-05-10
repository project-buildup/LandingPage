import React from 'react';
import styled from 'styled-components';
import hamburgerIcon from '../../../assets/hamburgerIcon.png';
import coffeeIcon from '../../../assets/coffeeIcon.png';
import drinkIcon from '../../../assets/drinkIcon.png';
import triangleIcon from '../../../assets/triangleIconBlack.png';
import { useAnimationOnScroll } from '../../../hooks/useAnimationOnScroll';

export default function Mobile_Saving_First() {
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
              <ConsumeText>번개모임과 술자리</ConsumeText>
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
  width: 360px;
  height: 445px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ConsumeContainer = styled.div`
  width: 317px;
  height: 135px;
  margin-top: 68px;
  display: flex;
  justify-content: space-between;
  opacity: 0;
  &.animation {
    animation: fadeInObject 0.8s forwards;
  }
`;

const ConsumeWrapper = styled.div`
  height: 135px;
  width: 93px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const CircleImgWrapper = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 88px;
  background-color: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircleImg = styled.img`
  width: 54.15px;
`;

const ConsumeTextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ConsumeText = styled.div`
  height: 17px;
  font-size: 13px;
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
  margin-top: 42px;
`;

const TextBox = styled.div`
  width: 328px;
  height: 98px;
  border-radius: 20px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoxText = styled.div`
  height: 23px;
  font-size: 18px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BoxBlueText = styled.div`
  height: 23px;
  font-size: 18px;
  font-weight: 700;
  color: #2484f3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
