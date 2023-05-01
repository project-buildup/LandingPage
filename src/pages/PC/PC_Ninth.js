import React from 'react';
import styled from 'styled-components';
import whiteLogo from '../../assets/whiteLogo.png';
import locationIcon from '../../assets/locationIcon.png';
import mailIcon from '../../assets/mailIcon.png';

export default function PC_Ninth() {
  return (
    <ContainerWrapper>
      <MainContainer>
        <BodyContainer>
          <Logo src={whiteLogo} alt="logo" />
          <TextContainer>
            <TextWrapper className="box1">
              <Text>(주)프로젝트빌드업 | 대표 하동균</Text>
              <Text>사업자등록번호 166-86-02772</Text>
            </TextWrapper>
            <TextWrapper className="box2">
              <IconTextWrapper>
                <Icon src={locationIcon} alt="location" />
                <Text>대구광역시 북구 대학로 80 (산격동, 경북대학교 글로벌프라자 101호)</Text>
              </IconTextWrapper>
              <IconTextWrapper>
                <Icon src={mailIcon} alt="mail" />
                <Text>contact@projectbuildup.io</Text>
              </IconTextWrapper>
            </TextWrapper>
            <TextWrapper className="box3">
              <Text>SNS</Text>
              <TextBar>|</TextBar>
              <Text>채용</Text>
              <TextBar>|</TextBar>
              <Text>이용약관 및 개인정보처리방침</Text>
            </TextWrapper>
          </TextContainer>
          <Text className="copyright">Copyright PROJECT BUILDUP, All Rights Reserved</Text>
        </BodyContainer>
      </MainContainer>
    </ContainerWrapper>
  );
}
const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #242627;
`;

const MainContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 314px;
  display: flex;
  flex-direction: column;
`;
const BodyContainer = styled.div`
  margin-top: 74px;
  margin-left: 81px;
`;

const Logo = styled.img`
  width: 150px;
  height: 33px;
  margin-bottom: 10px;
`;

const TextContainer = styled.div`
  position: relative;
  display: flex;
`;

const TextWrapper = styled.div`
  &.box1 {
    margin-right: 70px;
  }
  &.box2 {
    margin-right: 378px;
  }
  &.box3 {
    width: 261px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    right: 81px;
    top: 0px;
  }
`;

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

const Text = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 13px;
  font-weight: 400;

  &.copyright {
    margin-top: 57px;
  }
`;

const TextBar = styled.div`
  height: 20px;
  color: white;
  font-size: 13px;
  font-weight: 400;
`;
