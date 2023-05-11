import React from 'react';
import styled from 'styled-components';
import gasomannLogoWhite from '../../assets/gasomannLogoWhite.png';
import menuIcon from '../../assets/menuIcon.png';
import appstoreLogo from '../../assets/appstoreLogo.png';
import playstoreLogo from '../../assets/playstoreLogo.png';
import gasomannAppLogo from '../../assets/gasomannAppLogo.webp';
import mainAppImage from '../../assets/mainAppImage.webp';

export default function Mobile_Main() {
  return (
    <ContainerWrapper>
      <NavBarContainer>
        <LogoImage src={gasomannLogoWhite} alt="gasomann logo" />
        <MenuIcon src={menuIcon} alt="menu icon" />
      </NavBarContainer>
      <MainContainer>
        <BodyContainer>
          <TitleText>당신의 소비를 가치있게</TitleText>
          <SubtitleText>절약챌린지 & 가치소비추천 솔루션</SubtitleText>
          <SubtitleText>GASOMANN</SubtitleText>
          <ImageContainer>
            <GasomannAppLogo src={gasomannAppLogo} alt="gasomann app logo" />
            <MainAppImage src={mainAppImage} alt="gasomann app logo" />
          </ImageContainer>
          <DownloadText>GASOMANN 앱 다운로드</DownloadText>
          <DownloadButtonContainer>
            <DownloadButton className="google">
              <DownloadButtonImage src={playstoreLogo} alt="google play logo" />
              <DownloadButtonText>Google Play</DownloadButtonText>
            </DownloadButton>
            <DownloadButton>
              <DownloadButtonImage src={appstoreLogo} alt="app store logo" />
              <DownloadButtonText>App Store</DownloadButtonText>
            </DownloadButton>
          </DownloadButtonContainer>
        </BodyContainer>
      </MainContainer>
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2484f3;
`;

const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  justify-content: space-between;
`;

const MainContainer = styled.div`
  width: 360px;
  height: calc(100% - 51px);
`;

const LogoImage = styled.img`
  width: 123px;
`;

const MenuIcon = styled.img`
  width: 30px;
  cursor: pointer;
`;

const BodyContainer = styled.div`
  height: calc(100% - 51.29px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.div`
  height: 39px;
  font-family: 'Pretendard';
  font-size: 30px;
  font-weight: 800;
  color: white;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  animation: fadeInObject 0.8s backwards;
  animation-delay: 0.6s;
`;

const SubtitleText = styled.div`
  height: 22px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;

  animation: fadeInObject 0.8s backwards;
  animation-delay: 1.1s;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 3px;
`;

const GasomannAppLogo = styled.img`
  height: 357px;
  animation: fadeInApp 0.8s backwards;
  animation-delay: 0.6s;
`;

const MainAppImage = styled.img`
  position: absolute;
  height: 339px;
  animation: fadeInApp 0.8s backwards;
  animation-delay: 1.1s;
`;

const DownloadText = styled.div`
  height: 22px;
  margin-top: 5px;
  margin-bottom: 15px;
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
  flex-direction: column;
  animation: fadeInObject 0.8s backwards;
  animation-delay: 1.1s;
  margin-bottom: 30px;
`;

const DownloadButton = styled.div`
  width: 328px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 6px;
  cursor: pointer;
  &.google {
    margin-bottom: 10px;
  }
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
