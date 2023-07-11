/* eslint-disable */
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import gasomannLogoWhite from '../../assets/gasomannLogoWhite.png';
import menuIcon from '../../assets/menuIcon.png';
import appstoreLogo from '../../assets/appstoreLogo.png';
import playstoreLogo from '../../assets/playstoreLogo.png';
import gasomannAppLogo from '../../assets/gasomannAppLogo.webp';
import mainAppImage from '../../assets/mainAppImage.webp';

export default function Tablet_Main(props) {
  return (
    <ContainerWrapper>
      <NavBarContainer>
        <LogoImage src={gasomannLogoWhite} alt="gasomann logo" onClick={() => window.location.reload()} />
        <MenuIcon src={menuIcon} alt="menu icon" onClick={() => props.setOpen(true)} />
      </NavBarContainer>
      <MainContainer>
        <BodyContainer>
          <TitleText>당신의 소비를 가치있게</TitleText>
          <SubtitleText>절약챌린지 & 가치소비추천 솔루션</SubtitleText>
          <SubtitleText>GASOMANN</SubtitleText>
          <LineWrapper>
            <Line />
          </LineWrapper>
          <DownloadText>GASOMANN 앱 다운로드</DownloadText>
          <DownloadButtonContainer>
            <DownloadButton
              onClick={() =>
                window.open('https://play.google.com/store/apps/details?id=com.gasomann.GASOMANN', '_blank')
              }
            >
              <DownloadButtonImage src={playstoreLogo} alt="google play logo" />
              <DownloadButtonText>Google Play</DownloadButtonText>
            </DownloadButton>
            <DownloadButton onClick={() => window.open('https://apple.co/42Ih5li', '_blank')}>
              <DownloadButtonImage src={appstoreLogo} alt="app store logo" />
              <DownloadButtonText>App Store</DownloadButtonText>
            </DownloadButton>
          </DownloadButtonContainer>
        </BodyContainer>
        <ImageContainer>
          <GasomannAppLogo src={gasomannAppLogo} alt="gasomann app logo" />
          <MainAppImage src={mainAppImage} alt="gasomann app logo" onLoad={() => props.setLoadedPage(1)} />
        </ImageContainer>
      </MainContainer>
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 860px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2484f3;
  overflow: hidden;
`;

const NavBarContainer = styled.div`
  display: flex;
  height: 71px;
  width: 100%;
  padding: 0 36px;
  align-items: center;
  justify-content: space-between;
`;

const LogoImage = styled.img`
  width: 145px;
  cursor: pointer;
`;

const MenuIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const MainContainer = styled.div`
  width: 768px;
  height: calc(100% - 71px);
`;

const BodyContainer = styled.div`
  margin-top: 85px;
  padding-left: 40px;
  padding-right: 18px;
`;

const TitleText = styled.div`
  height: 58px;
  font-family: 'Pretendard';
  font-size: 45px;
  font-weight: 800;
  color: white;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  animation: fadeInObject 0.8s backwards;
  animation-delay: 0.6s;
`;

const SubtitleText = styled.div`
  height: 32px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;

  animation: fadeInObject 0.8s backwards;
  animation-delay: 1.1s;
`;

const LineWrapper = styled.div`
  position: relative;
  height: 321px;
`;

const Line = styled.div`
  position: absolute;
  top: 157px;
  right: 40%;
  height: 1px;
  width: 72vw;
  background-color: white;
  animation: fadeInLine 1.2s ease-in-out backwards;
  animation-delay: 1.1s;
`;

const DownloadText = styled.div`
  height: 22px;
  margin-bottom: 17px;
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

const ImageContainer = styled.div`
  position: absolute;
  top: 235px;
  margin-left: 290px;
`;

const GasomannAppLogo = styled.img`
  position: relative;
  height: 437px;
  animation: fadeInApp 0.8s backwards;
  animation-delay: 0.6s;
`;

const MainAppImage = styled.img`
  position: absolute;
  left: 62px;
  height: 480px;
  animation: fadeInApp 0.8s backwards;
  animation-delay: 1.1s;
`;
