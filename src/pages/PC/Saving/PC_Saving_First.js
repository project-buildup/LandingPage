import React from 'react';
import styled from 'styled-components';
import hamburgerIcon from '../../../assets/hamburgerIcon.png';
import coffeeIcon from '../../../assets/coffeeIcon.png';
import drinkIcon from '../../../assets/drinkIcon.png';
import triangleIcon from '../../../assets/triangleIconBlack.png';
import phoneImage from '../../../assets/savingFirstPhoneImage.png';
import challengeTexiImage from '../../../assets/challengeTexiImage.png';
import challengeDeliveryImage from '../../../assets/challengeDeliveryImage.png';

export default function PC_Saving_First() {
  return (
    <MainContainer>
      <ConsumeContainer>
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
      <TriangleIcon src={triangleIcon} alt="triangle" />
      <TextBox>
        <BoxText>이러한 소비로 돈 아깝지 않으셨나요?</BoxText>
        <BoxBlueText>GASOMANN 챌린지기능으로 절약해요!</BoxBlueText>
      </TextBox>
      <BodyContainer>
        <TitleContainer>
          <TitleBox>
            <TitleBoxText>STEP 01</TitleBoxText>
          </TitleBox>
          <TitleText>내가 참여하고싶은</TitleText>
          <TitleTextWrapper>
            <TitleText>챌린지&nbsp;</TitleText>
            <TitleBlueText>선택하기</TitleBlueText>
          </TitleTextWrapper>
          <TitleContentText>다양한 챌린지 선택의 폭으로</TitleContentText>
          <TitleContentText>지겹지않게 도전할 수 있어요!</TitleContentText>
        </TitleContainer>
        <PhoneImg src={phoneImage} alt="phone" />
        <ChallengeImg className="texi" src={challengeTexiImage} alt="texi challenge" />
        <ChallengeImg className="delivery" src={challengeDeliveryImage} alt="delivery challenge" />
      </BodyContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 1440px;
  height: 1459px;
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

const BodyContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 615px;
  margin-top: 197.5px; //213 - 15.5
  padding-left: 236px;
  padding-right: 345px;
  display: flex;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  width: 322px;
  height: 246px;
  margin-top: 15.5px;
  display: flex;
  flex-direction: column;
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
`;

const ChallengeImg = styled.img`
  position: absolute;
  width: 345px; // 345, 303, 42
  height: 134px; // 134, 92, 42

  &.texi {
    top: 80px;
    right: 150px;
  }

  &.delivery {
    bottom: 64px;
    right: 560px;
  }
`;
