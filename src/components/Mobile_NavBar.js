import React, { useState } from 'react';
import PropTypes from 'prop-types';
import menuIcon from '../assets/menuIconGray.png';
import styled from 'styled-components';
import gasomannLogoBlack from '../assets/gasomannLogoBlack.png';

export default function Mobile_NavBar({ setOpen }) {
  Mobile_NavBar.propTypes = {
    setOpen: PropTypes.func.isRequired,
  };
  const [visible, setVisible] = useState(false);

  document.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 10) {
      if (!visible) {
        setVisible(true);
      }
    } else {
      if (visible) {
        setVisible(false);
      }
    }
  });
  return (
    <NavBarContainer visible={visible}>
      <LogoImage
        src={gasomannLogoBlack}
        alt="gasomann logo"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
      <MenuIcon src={menuIcon} alt="menu icon" onClick={() => setOpen(true)} />
    </NavBarContainer>
  );
}

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 44px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
  z-index: 200;
  display: ${({ visible }) => visible || 'none'};
`;

const LogoImage = styled.img`
  width: 123px;
  cursor: pointer;
`;

const MenuIcon = styled.img`
  width: 30px;
  cursor: pointer;
`;
