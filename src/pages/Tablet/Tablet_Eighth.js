/* eslint-disable */
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import eighthBackgroundImage from '../../assets/eighthBackgroundImage.png';

const Tablet_Eighth = forwardRef(function Tablet_Eighth(props, ref) {
  return (
    <ContainerWrapper ref={ref}>
      <MainContainer>
        <TitleContainer>
          <Title>CONTACT US</Title>
          <TitleText>궁금한 점이 있나요?</TitleText>
          <MailBox>
            <MailText onClick={() => window.open('mailto:contact@projectbuildup.io', 'emailWindow')}>MAIL</MailText>
            <MailAddress>contact@projectbuildup.io</MailAddress>
          </MailBox>
        </TitleContainer>
      </MainContainer>
    </ContainerWrapper>
  );
});
export default Tablet_Eighth;
const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${eighthBackgroundImage});
  background-size: 100% 395px;
`;

const MainContainer = styled.div`
  position: relative;
  width: 768px;
  height: 315px;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  margin-top: 87px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  height: 24px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  color: white;
  font-family: 'GmarketSans';
  font-size: 16px;
`;

const TitleText = styled.div`
  height: 45px;
  margin-bottom: 13px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 30px;
`;

const MailBox = styled.div`
  width: 338px;
  height: 49px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  background-color: white;
`;

const MailText = styled.div`
  height: 27px;
  margin-left: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2585f4;
  font-family: 'GmarketSans';
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`;

const MailAddress = styled.div`
  height: 27px;
  margin-left: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
`;
