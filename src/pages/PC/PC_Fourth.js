import React from 'react';
import styled from 'styled-components';
import coffeeImage from '../../assets/coffeeImage.png';
import healthImage from '../../assets/healthImage.png';
import { useAnimationOnScroll } from '../../hooks/useAnimationOnScroll';

export default function PC_Fourth() {
  const [setRef, isVisible] = useAnimationOnScroll();

  return (
    <ContainerWrapper>
      <MainContainer>
        <TitleContainer>
          <TitleBox>MEANING</TitleBox>
          <TitleText>홧김소비와 가치소비란?</TitleText>
        </TitleContainer>
        <BodyContainer ref={setRef}>
          <CardContainer id="left" className={isVisible && 'animation'}>
            <CircleImg src={coffeeImage} alt="coffee" />
            <TextWrapper>
              <BoldText>홧김소비</BoldText>
              <Text>순간적인 유혹에 의한 불필요한 소비</Text>
              <BlueText>습관적으로 마시는 커피 · 충동적 쇼핑 등</BlueText>
            </TextWrapper>
          </CardContainer>
          <CardContainer id="right" className={isVisible && 'animation'}>
            <CircleImg src={healthImage} alt="health" />
            <TextWrapper>
              <BoldText>가치소비</BoldText>
              <Text>소비 주체에 귀중한 경험</Text>
              <Text>및 유용한 자산이 되는 소비</Text>
              <BlueText>헬스케어 · 자기개발 · 취미 등</BlueText>
            </TextWrapper>
          </CardContainer>
        </BodyContainer>
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
  position: relative;
  width: 1440px;
  height: 897px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 120px;
`;

const TitleBox = styled.div`
  width: 114px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-family: 'GmarketSans';
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 10px;
`;

const TitleText = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: 700;
  font-size: 40px;
`;

const BodyContainer = styled.div`
  margin-top: 50px;
  width: 860px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 411px;
  height: 468px;
  border-radius: 42px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  opacity: 0;
  &.animation {
    &#left {
      animation: fadeInApp 1.2s forwards;
      animation-delay: 0.6s;
    }
    &#right {
      animation: fadeInApp 1.2s forwards;
      animation-delay: 1.2s;
    }
  }
`;

const CircleImg = styled.img`
  width: 222px;
  height: 222px;
  border-radius: 111px;
  margin-top: 46px;
  margin-bottom: 32px;
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
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  height: 28px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlueText = styled.div`
  height: 28px;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2484f3;
`;
