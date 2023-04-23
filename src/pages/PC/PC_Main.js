import React from 'react';
import styled from 'styled-components';
import gasomannLogoWhite from '../../assets/gasomannLogoWhite.png';
import appstoreLogo from '../../assets/appstoreLogo.png';
import playstoreLogo from '../../assets/playstoreLogo.png';
import gasomannAppLogo from '../../assets/gasomannAppLogo.png';
import mainAppImage from '../../assets/mainAppImage.png';

export default function PC_Main() {
  return (
    <MainContainer>
      <NavBarContainer>
        <LogoImage src={gasomannLogoWhite} alt="gasomann logo" />
        <LinkContainer>
          <NavBarText>ABOUT</NavBarText>
          <NavBarText>CONTACT</NavBarText>
          <NavBarText>BLOG</NavBarText>
          <AppDownloadButton>사전 예약</AppDownloadButton>
        </LinkContainer>
      </NavBarContainer>
      <BodyContainer>
        <LeftSectionContainer>
          <TitleText>당신의 소비를 가치있게</TitleText>
          <SubtitleText>절약챌린지 & 가치소비추천 솔루션</SubtitleText>
          <SubtitleText>GASOMANN</SubtitleText>
          <DownloadText>GASOMANN 앱 다운로드</DownloadText>
          <DownloadButtonContainer>
            <DownloadButton>
              <DownloadButtonImage src={playstoreLogo} alt="google play logo" />
              <DownloadButtonText>Google Play</DownloadButtonText>
            </DownloadButton>
            <DownloadButton>
              <DownloadButtonImage src={appstoreLogo} alt="app store logo" />
              <DownloadButtonText>App Store</DownloadButtonText>
            </DownloadButton>
          </DownloadButtonContainer>
        </LeftSectionContainer>
        <Line />
        <RightSectionContainer>
          <GasomannAppLogo src={gasomannAppLogo} alt="gasomann app logo" />
          <MainAppImage src={mainAppImage} alt="gasomann app logo" />
        </RightSectionContainer>
      </BodyContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2484f3;
`;

const NavBarContainer = styled.div`
  display: flex;
  height: 71px;
  padding-left: 4.1vw;
  padding-right: 5.7vw;
  align-items: center;
  justify-content: space-between;
`;

const LogoImage = styled.img`
  width: 162px;
`;

const LinkContainer = styled.div`
  /* width: 34.4vw; */
  width: 496px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavBarText = styled.div`
  font-family: 'GmarketSans';
  font-size: 16px;
  color: white;
  cursor: pointer;
`;

const AppDownloadButton = styled.div`
  width: 112px;
  height: 35px;
  border-radius: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  color: #2484f3;
  cursor: pointer;
`;

const BodyContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-left: 9.16vw;
  padding-right: 13.5vw;
`;

const LeftSectionContainer = styled.div`
  width: 455px;
  margin-top: 20.3vh;
`;

const TitleText = styled.div`
  width: 455px;
  height: 65px;
  font-family: 'Pretendard';
  font-size: 50px;
  font-weight: 800;
  color: white;
  margin-bottom: 1vh;
  display: flex;
  align-items: center;

  animation: fadeIn 1s;
  animation-delay: 1s;
  animation-fill-mode: backwards;
`;

const SubtitleText = styled.div`
  height: 38px;
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;

  animation: fadeIn 1s;
  animation-delay: 1s;
  animation-fill-mode: backwards;
`;

const DownloadText = styled.div`
  height: 22px;
  margin-top: 11.26vh;
  margin-bottom: 2.1vh;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;

  animation: fadeIn 1s;
  animation-delay: 1s;
  animation-fill-mode: backwards;
`;

const DownloadButtonContainer = styled.div`
  display: flex;
  width: 336px;
  justify-content: space-between;

  animation: fadeIn 1s;
  animation-delay: 1s;
  animation-fill-mode: backwards;
`;

const DownloadButton = styled.div`
  width: 162px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 6px;
  cursor: pointer;
`;

const DownloadButtonImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;

const DownloadButtonText = styled.div`
  height: 26px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  position: absolute;
  top: 46.04vh;
  left: 0;
  height: 1px;
  width: 85vw;
  background-color: white;

  animation: fadeInLine 1.5s;
  animation-delay: 1.5s;
  animation-fill-mode: backwards;
  animation-timing-function: ease-in-out;
`;

const RightSectionContainer = styled.div`
  position: relative;
  margin-top: 4.45vh;
`;

const GasomannAppLogo = styled.img`
  height: 75.25vh;
  padding-top: 9px;

  animation: fadeIn 1s;
  animation-delay: 1s;
  animation-fill-mode: backwards;
`;

const MainAppImage = styled.img`
  position: absolute;
  left: 62px;
  height: 81.3vh;

  animation: fadeIn 1s;
  animation-delay: 1s;
  animation-fill-mode: backwards;
`;
