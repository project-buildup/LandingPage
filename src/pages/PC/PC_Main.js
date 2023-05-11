import React from 'react';
import styled from 'styled-components';
import gasomannLogoWhite from '../../assets/gasomannLogoWhite.png';
import appstoreLogo from '../../assets/appstoreLogo.png';
import playstoreLogo from '../../assets/playstoreLogo.png';
import gasomannAppLogo from '../../assets/gasomannAppLogo.webp';
import mainAppImage from '../../assets/mainAppImage.webp';

export default function PC_Main() {
  return (
    <ContainerWrapper>
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
            <Blank />
            <TitleText>당신의 소비를 가치있게</TitleText>
            <SubtitleText>절약챌린지 & 가치소비추천 솔루션</SubtitleText>
            <SubtitleText>GASOMANN</SubtitleText>
            <LineWrapper>{window.innerHeight > 640 && <Line />}</LineWrapper>
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
          <RightSectionContainer>
            <GasomannAppLogo src={gasomannAppLogo} alt="gasomann app logo" />
            <MainAppImage src={mainAppImage} alt="gasomann app logo" />
          </RightSectionContainer>
        </BodyContainer>
      </MainContainer>
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 640px;
  display: flex;
  justify-content: center;
  background-color: #2484f3;
`;

const MainContainer = styled.div`
  width: 1440px;
  height: 100%;
`;

const NavBarContainer = styled.div`
  display: flex;
  height: 71px;
  padding-left: 59px;
  padding-right: 82.5px;
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
  display: flex;
  justify-content: space-between;
  padding-left: 132px;
  padding-right: 195px;
`;

const LeftSectionContainer = styled.div``;

const Blank = styled.div`
  height: 20.3vh;
  min-height: 130px;
`;
const TitleText = styled.div`
  height: 65px;
  font-family: 'Pretendard';
  font-size: 50px;
  font-weight: 800;
  color: white;
  margin-bottom: 1vh;
  display: flex;
  align-items: center;
  animation: fadeInObject 0.8s backwards;
  animation-delay: 0.6s;
`;

const SubtitleText = styled.div`
  height: 38px;
  font-size: 24px;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;

  animation: fadeInObject 0.8s backwards;
  animation-delay: 1.1s;
`;

const LineWrapper = styled.div`
  position: relative;
  height: 11.26vh;
  min-height: 65px;
`;

const Line = styled.div`
  position: absolute;
  top: 53%;
  right: -74%;
  height: 1px;
  width: 74vw;
  background-color: white;
  animation: fadeInLine 1.2s ease-in-out backwards;
  animation-delay: 1.1s;
`;

const DownloadText = styled.div`
  height: 22px;
  margin-bottom: 2.1vh;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;

  animation: fadeInObject 0.8s backwards;
  animation-delay: 1.1s;
`;

const DownloadButtonContainer = styled.div`
  display: flex;
  width: 336px;
  justify-content: space-between;

  animation: fadeInObject 0.8s backwards;
  animation-delay: 1.1s;
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

const RightSectionContainer = styled.div`
  position: relative;
  margin-top: 4.45vh;
`;

const GasomannAppLogo = styled.img`
  height: 75.25vh;
  min-height: 482px;
  padding-top: 9px;
  animation: fadeInApp 0.8s backwards;
  animation-delay: 0.6s;
`;

const MainAppImage = styled.img`
  position: absolute;
  left: 62px;
  height: 81.3vh;
  min-height: 520px;
  animation: fadeInApp 0.8s backwards;
  animation-delay: 1.1s;
`;
