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

export default function Mobile_Saving_Third() {
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
            <TitleBox>STEP 02</TitleBox>
            <TitleText>절약할 때마다 절약계좌에</TitleText>
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
              <video ref={videoRef} muted loop width="163px">
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
  width: 360px;
  height: 748px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  position: relative;
  margin-top: 83px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  color: white;
  font-weight: 700;
  font-size: 12px;
  font-family: 'GmarketSans';
`;

const TitleTextWrapper = styled.div`
  height: 32px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`;

const TitleText = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  color: black;
  font-weight: 700;
  font-size: 25px;
`;

const TitleBlueText = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2484f3;
  font-weight: 700;
  font-size: 25px;
`;

const TitleContentText = styled.div`
  height: 18px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
`;

const IconContainer = styled.div`
  width: 170px;
  height: 44px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.img`
  &#kakaopay {
    width: 57.53px;
    height: 23.82px;
    opacity: 0;
    &.animation {
      animation: fadeInObject 0.8s forwards;
      animation-delay: 0.6s;
    }
  }

  &#toss {
    width: 41.62px;
    height: 40px;
    opacity: 0;
    &.animation {
      animation: fadeInObject 0.8s forwards;
      animation-delay: 0.8s;
    }
  }

  &#banksalad {
    width: 44.05px;
    height: 44.05px;
    opacity: 0;
    &.animation {
      animation: fadeInObject 0.8s forwards;

      animation-delay: 1s;
    }
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 195px; //195 175.2
  height: 379px; //379 359
  margin-top: 5px;
  background-image: url(${phoneImage});
  background-size: 195px 379px;
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
  width: 175.2px;
  height: 359px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const VideoWrapper = styled.img`
  position: absolute;
  width: 175.2px;
  height: 359px;
`;
