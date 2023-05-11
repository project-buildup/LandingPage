/* eslint-disable */
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import exitIcon from '../assets/exitIcon.png';

const MenuBar = forwardRef(function MenuBar(props, ref) {
  const handleContactClick = () => {
    props.setOpen(false);
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container open={props.open}>
      <ExitIconWrapper>
        <ExitIcon src={exitIcon} alt="exit icon" onClick={() => props.setOpen(false)} />
      </ExitIconWrapper>
      <Text
        onClick={() => {
          props.setOpen(false);
          alert('준비 중이에요. 조금만 기다려주세요!');
        }}
      >
        ABOUT
      </Text>
      <Line />
      <Text onClick={() => handleContactClick()}>CONTACT</Text>
      <Line />
      <Text
        onClick={() => {
          props.setOpen(false);
          alert('준비 중이에요. 조금만 기다려주세요!');
        }}
      >
        BLOG
      </Text>
      <Line />
    </Container>
  );
});

export default MenuBar;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0' : '100%')};
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  transition: all 0.5s;
`;

const ExitIconWrapper = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  justify-content: flex-end;
`;

const ExitIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 24px;
  margin-right: 16px;
  cursor: pointer;
`;

const Text = styled.div`
  font-family: 'GmarketSans';
  color: #676767;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: #2484f3;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 20px 0;
  background-color: #dbdbdb;
`;
