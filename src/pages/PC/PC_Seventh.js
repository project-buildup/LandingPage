import React from 'react';
import styled from 'styled-components';
import partner1 from '../../assets/partner1.png';
import partner2 from '../../assets/partner2.png';
import partner3 from '../../assets/partner3.png';
import partner4 from '../../assets/partner4.png';
import partner5 from '../../assets/partner5.png';
import partner6 from '../../assets/partner6.png';

export default function PC_Seventh() {
  return (
    <MainContainer>
      <TitleContainer>
        <TitleBox>PARTNER</TitleBox>
        <TitleText>GASOMANN을 만드는 프로젝트빌드업은</TitleText>
        <TitleText>이런 분들과 함께하고 있어요</TitleText>
      </TitleContainer>
      <PartnerContainer>
        <PartnerWrapper className="line1">
          <PartnerImg className="partner1" src={partner1} alt="partner1" />
          <PartnerImg className="partner2" src={partner2} alt="partner2" />
          <PartnerImg className="partner3" src={partner3} alt="partner3" />
        </PartnerWrapper>
        <PartnerWrapper className="line2">
          <PartnerImg className="partner4" src={partner4} alt="partner4" />
          <PartnerImg className="partner5" src={partner5} alt="partner5" />
          <PartnerImg className="partner6" src={partner6} alt="partner6" />
        </PartnerWrapper>
      </PartnerContainer>
      <QuestionButton>파트너 및 제휴 문의하기</QuestionButton>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 880px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f9f9fa;
`;

const TitleContainer = styled.div`
  margin-top: 177px;
  margin-bottom: 41px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleBox = styled.div`
  width: 111px;
  height: 34px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-family: 'GmarketSans';
  font-size: 16px;
`;

const TitleText = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 40px;
`;

const PartnerContainer = styled.div`
  width: 1178px;
  height: 254px;
  border-radius: 24px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PartnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.line1 {
    width: 652px;
    margin-bottom: 26px;
  }
  &.line2 {
    width: 909px;
  }
`;
const PartnerImg = styled.img`
  &.partner1 {
    width: 266px;
    height: 38px;
  }

  &.partner2 {
    width: 100px;
    height: 69px;
  }

  &.partner3 {
    width: 129px;
    height: 30px;
  }

  &.partner4 {
    width: 247px;
    height: 47px;
  }

  &.partner5 {
    width: 228px;
    height: 55px;
  }

  &.partner6 {
    width: 201px;
    height: 56px;
  }
`;

const QuestionButton = styled.div`
  width: 202px;
  height: 49px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin-top: 50px;
  cursor: pointer;
`;
