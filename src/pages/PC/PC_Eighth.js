import React from 'react';
import styled from 'styled-components';
import eighthBackgroundImage from '../../assets/eighthBackgroundImage.png';

export default function PC_Eighth() {
  return (
    <ContainerWrapper>
      <MainContainer>
        <TitleContainer>
          <Title>CONTACT US</Title>
          <TitleText>궁금한 점이 있나요?</TitleText>
          <MailBox>
            <MailText>MAIL</MailText>
            <MailAddress>contact@projectbuildup.io</MailAddress>
          </MailBox>
        </TitleContainer>
      </MainContainer>
    </ContainerWrapper>
  );
}
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
`;

const MailText = styled.div`
  height: 24px;
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
