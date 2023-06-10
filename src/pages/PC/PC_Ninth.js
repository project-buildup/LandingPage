import React from 'react';
import styled from 'styled-components';
import whiteLogo from '../../assets/whiteLogo.png';
import locationIcon from '../../assets/locationIcon.png';
import mailIcon from '../../assets/mailIcon.png';
import doCopy from '../../hooks/dpCopy';

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
                <Text>(41585) 대구광역시 북구 호암로 51 대구 삼성 창조 캠퍼스 內 대구창조경제혁신센터 3층</Text>
              </IconTextWrapper>
              <IconTextWrapper>
                <Icon src={mailIcon} alt="mail" />
                <LinkText onClick={() => doCopy('contact@projectbuildup.io')}>contact@projectbuildup.io</LinkText>
              </IconTextWrapper>
            </TextWrapper>
            <TextWrapper className="box3">
              <LinkText onClick={() => alert('공고가 없어요!')}>공고</LinkText>
              <TextBar>|</TextBar>
              <LinkText onClick={() => window.open('https://www.instagram.com/gasomann/')}>SNS</LinkText>
              <TextBar>|</TextBar>
              <LinkText
                onClick={() =>
                  window.open('https://projectbuildup.notion.site/a4699397ede54d23847bf69e47d8818d', '_blank')
                }
              >
                채용
              </LinkText>
              <TextBar>|</TextBar>
              <LinkText
                onClick={() =>
                  window.open('https://projectbuildup.notion.site/88eb406b9d9e4908a344ca125d2ce8df?pvs=4', '_blank')
                }
              >
                이용약관 및 개인정보처리방침
              </LinkText>
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
    width: 300px;
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
  display: flex;
  align-items: center;
`;

const LinkText = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
`;
