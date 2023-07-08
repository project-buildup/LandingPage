import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import gasomannLogoBlack from '../assets/gasomannLogoBlack.png';

const PC_NavBar = forwardRef(function PC_NavBar(props, ref) {
  const [visible, setVisible] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  document.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 10) {
      if (!visible) {
        setVisible(true);
      }
    } else {
      if (visible) {
        setVisible(false);
      }
    }
  });
  const handleContactClick = () => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <NavBarContainer visible={visible}>
      <LogoImage
        src={gasomannLogoBlack}
        alt="gasomann logo"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
      <LinkContainer>
        <NavBarText onClick={() => alert('준비 중이에요. 조금만 기다려주세요!')}>ABOUT</NavBarText>
        <NavBarText onClick={() => handleContactClick()}>CONTACT</NavBarText>
        <NavBarText onClick={() => alert('준비 중이에요. 조금만 기다려주세요!')}>BLOG</NavBarText>
        <AppDownloadButtonWrapper>
          <AppDownloadButton onClick={() => setMouseOver(true)}>앱 다운로드</AppDownloadButton>
          <HiddenDownloadButtonWrapper onMouseLeave={() => setMouseOver(false)} mouseOver={mouseOver}>
            <AppDownloadButton onClick={() => window.open('https://play.google.com/store/apps/details?id=com.gasomann.GASOMANN', '_blank')}>
              <DownloadButtonText>Android</DownloadButtonText>
            </AppDownloadButton>
            <AppDownloadButton onClick={() => window.open('https://apple.co/42Ih5li', '_blank')}>
              <DownloadButtonText>iOS</DownloadButtonText>
            </AppDownloadButton>
          </HiddenDownloadButtonWrapper>
        </AppDownloadButtonWrapper>
      </LinkContainer>
    </NavBarContainer>
  );
});

export default PC_NavBar;

const NavBarContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  height: 60px;
  padding-left: 59px;
  padding-right: 82.5px;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
  z-index: 200;

  display: ${({ visible }) => visible || 'none'};
`;

const LogoImage = styled.img`
  width: 162px;
  cursor: pointer;
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
  color: black;
  cursor: pointer;
`;

const AppDownloadButtonWrapper = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const AppDownloadButton = styled.div`
  width: 112px;
  height: 35px;
  border-radius: 50px;
  background-color: #0047cf;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;

const DownloadButtonText = styled.div`
  height: 26px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const HiddenDownloadButtonWrapper = styled.div`
  position: absolute;
  padding-top: 35px;
  visibility: ${(props) => (props.mouseOver ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.mouseOver ? '1' : '0')};
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  max-height: ${(props) => (props.mouseOver ? '105px' : '0')};
`;
