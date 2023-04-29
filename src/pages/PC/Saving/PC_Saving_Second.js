import React from 'react';
import styled from 'styled-components';
import phoneImage from '../../../assets/savingSecondPhoneImage.png';
import videoWrapper from '../../../assets/videoWrapper.png';
import kakaopayIcon from '../../../assets/kakaopayIcon.png';
import tossIcon from '../../../assets/tossIcon.png';
import banksaladIcon from '../../../assets/banksaladIcon.png';

export default function PC_Saving_Second() {
  return (
    <MainContainer>
      <BodyContainer>
        <TitleContainer>
          <TitleBox>
            <TitleBoxText>STEP 02</TitleBoxText>
          </TitleBox>
          <TitleText>절약할 때마다</TitleText>
          <TitleText>절약계좌에</TitleText>
          <TitleTextWrapper>
            <TitleText>절약금액&nbsp;</TitleText>
            <TitleBlueText>송금하기</TitleBlueText>
          </TitleTextWrapper>
          <TitleContentText>내가 주로 쓰던 뱅킹앱으로</TitleContentText>
          <TitleContentText>간단하게 송금할 수 있어요!</TitleContentText>
          <IconContainer>
            <Icon className="kakaopay" src={kakaopayIcon} alt="texi challenge" />
            <Icon className="toss" src={tossIcon} alt="delivery challenge" />
            <Icon className="banksalad" src={banksaladIcon} alt="delivery challenge" />
          </IconContainer>
        </TitleContainer>
        <VideoContainer>
          <RemitVideo>
            <video autoPlay muted loop width="265px">
              <source src={process.env.PUBLIC_URL + '/videos/remit.mp4'} type="video/mp4" />
            </video>
          </RemitVideo>
          <VideoWrapper src={videoWrapper} alt="videoWrapper" />
        </VideoContainer>
      </BodyContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 1440px;
  height: 928px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f9f9fa;
`;

const BodyContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 615px;
  margin-top: 158.5px; // 174 - 15.5
  padding-left: 236px;
  padding-right: 345px;
  display: flex;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
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

const IconContainer = styled.div`
  width: 304.37px;
  height: 78.86px;
  margin-top: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.img`
  &.kakaopay {
    width: 103px;
    height: 42.65px;
  }

  &.toss {
    width: 74.51px;
    height: 71.62px;
  }

  &.banksalad {
    width: 78.86px;
    height: 78.86px;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 315px; //285 30
  height: 615px; //584 31
  background-image: url(${phoneImage});
  background-size: 315px 615px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RemitVideo = styled.div`
  width: 265px;
  height: 552px;
  border-radius: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const VideoWrapper = styled.img`
  position: absolute;
  width: 285px;
  height: 584px;
`;
