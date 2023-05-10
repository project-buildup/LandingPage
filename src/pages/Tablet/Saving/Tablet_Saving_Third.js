import React from 'react';
import styled from 'styled-components';
import phoneImage from '../../../assets/savingSecondPhoneImage.png';
import videoWrapper from '../../../assets/videoWrapper.png';
import kakaopayIcon from '../../../assets/kakaopayIcon.png';
import tossIcon from '../../../assets/tossIcon.png';
import banksaladIcon from '../../../assets/banksaladIcon.png';
import { useAnimationOnScroll } from '../../../hooks/useAnimationOnScroll';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function Tablet_Saving_Third() {
  const [setRef, isVisible] = useAnimationOnScroll();
  const videoRef = useRef(false);

  useEffect(() => {
    if (isVisible) {
      videoRef.current.play();
    }
  }, [isVisible]);

  return (
    <ContainerWrapper>
      <MainContainer>
        <BodyContainer ref={setRef}>
          <TitleContainer className={isVisible && 'animation'}>
            <TitleBox>
              STEP 02
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
              <Icon id="kakaopay" className={isVisible && 'animation'} src={kakaopayIcon} alt="texi challenge" />
              <Icon id="toss" className={isVisible && 'animation'} src={tossIcon} alt="delivery challenge" />
              <Icon id="banksalad" className={isVisible && 'animation'} src={banksaladIcon} alt="delivery challenge" />
            </IconContainer>
          </TitleContainer>
          <VideoContainer className={isVisible && 'animation'}>
            <RemitVideo>
              <video ref={videoRef} muted loop width="240px">
                <source src={process.env.PUBLIC_URL + '/videos/remit.mp4'} type="video/mp4" />
              </video>
            </RemitVideo>
            <VideoWrapper src={videoWrapper} alt="videoWrapper" />
          </VideoContainer>
        </BodyContainer>
      </MainContainer>
    </ContainerWrapper>
  );
}
const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f9f9fa;
`;

const MainContainer = styled.div`
  width: 768px;
  height: 748px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  position: relative;
  width: 768px;
  margin-top: 93px; //115 - 13
  padding-left: 41px;
  padding-right: 103px;
  display: flex;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  width: 322px;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  &.animation {
    animation: fadeInObject 0.8s forwards;
  }
`;

const TitleBox = styled.div`
  width: 98px;
  height: 27px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2484f3;
  font-family: 'GmarketSans';
  font-size: 12px;
  font-weight: 700;
  color: white;
`;

const TitleTextWrapper = styled.div`
  height: 39px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
`;

const TitleText = styled.div`
  height: 39px;
  display: flex;
  align-items: center;
  color: black;
  font-weight: 700;
  font-size: 30px;
`;

const TitleBlueText = styled.div`
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2484f3;
  font-weight: 700;
  font-size: 30px;
`;

const TitleContentText = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
`;

const IconContainer = styled.div`
  width: 234px;
  height: 60.63px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.img`
  &#kakaopay {
    width: 79.19px;
    height: 32.79px;
    opacity: 0;
    &.animation {
      animation: fadeInObject 0.8s forwards;
      animation-delay: 0.6s;
    }
  }

  &#toss {
    width: 57.28px;
    height: 55.06px;
    opacity: 0;
    &.animation {
      animation: fadeInObject 0.8s forwards;
      animation-delay: 0.8s;
    }
  }

  &#banksalad {
    width: 60.63px;
    height: 60.63px;
    opacity: 0;
    &.animation {
      animation: fadeInObject 0.8s forwards;

      animation-delay: 1s;
    }
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 240px; //233 26
  height: 477.45px; //477.45 27
  background-image: url(${phoneImage});
  background-size: 259px 504px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  &.animation {
    animation: fadeInApp 0.8s forwards;
    animation-delay: 0.6s;
  }
`;

const RemitVideo = styled.div`
  width: 259px; //233 26
  height: 477.45px; //477.45 27
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const VideoWrapper = styled.img`
  position: absolute;
  width: 259px; //233 26
  height: 504px; //477.45 27
`;
