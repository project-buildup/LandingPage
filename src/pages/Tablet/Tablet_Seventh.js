import React from 'react';
import styled from 'styled-components';
import partner1 from '../../assets/partner1.png';
import partner2 from '../../assets/partner2.png';
import partner3 from '../../assets/partner3.png';
import partner4 from '../../assets/partner4.png';
import partner5 from '../../assets/partner5.png';
import partner6 from '../../assets/partner6.png';

export default function Tablet_Seventh() {
  return (
    <ContainerWrapper>
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
          </PartnerWrapper>
          <PartnerImg className="partner6" src={partner6} alt="partner6" />
        </PartnerContainer>
        <QuestionButton>파트너 및 제휴 문의하기</QuestionButton>
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
  position: relative;
  width: 768px;
  height: 834px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  margin-top: 108px;
  margin-bottom: 57px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleBox = styled.div`
  width: 90px;
  height: 27px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-family: 'GmarketSans';
  font-size: 12px;
`;

const TitleText = styled.div`
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 30px;
`;

const PartnerContainer = styled.div`
  width: 668px;
  height: 335px;
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
    width: 596px;
    margin-bottom: 25px;
  }
  &.line2 {
    width: 596px;
    margin-bottom: 25px
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
  margin-top: 37px;
  cursor: pointer;
`;
