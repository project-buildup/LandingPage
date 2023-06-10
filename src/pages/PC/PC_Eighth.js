import React, { forwardRef } from 'react';
import styled from 'styled-components';
import eighthBackgroundImage from '../../assets/eighthBackgroundImage.png';

const PC_Eighth = forwardRef(function PC_Eighth(props, ref) {
  return (
    <ContainerWrapper ref={ref}>
      <MainContainer>
        <TitleContainer>
          <Title>CONTACT US</Title>
          <TitleText>궁금한 점이 있나요?</TitleText>
          <MailBox onClick={() => window.open('mailto:contact@projectbuildup.io', 'emailWindow')}>
            <MailText>MAIL</MailText>
            <MailAddress>contact@projectbuildup.io</MailAddress>
          </MailBox>
        </TitleContainer>
      </MainContainer>
    </ContainerWrapper>
  );
});

export default PC_Eighth;

const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${eighthBackgroundImage});
  background-size: 100% 395px;
`;

const MainContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 395px;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  margin-top: 126px;
  margin-left: 168px;
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
  height: 48px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 32px;
`;

const MailBox = styled.div`
  width: 338px;
  height: 49px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  background-color: white;
  cursor: pointer;
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
