import React from 'react';
import { Link } from "react-router-dom";
import { Text, Figure, FrameBox } from '@arwes/core';
import { AnimatorGeneralProvider } from '@arwes/animation';
import { styled } from '@arwes/core';

import Clickable from "./Clickable";
import Centered from "./Centered";

const HeaderContainer = styled('header')(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  lineHeight: "80px",
  [theme.breakpoints.down('md')]: {
    '& .logo, & .banner': {
      display: 'none',
    },
  },
}));

const Nav = styled('nav')(({ theme }) => ({
  display: "inherit",
  '& .clickable': {
    fontSize: 21,
    padding: [0, theme.space(2)],
    color: theme.palette.primary.main,
    textDecoration: "none",
    '& i': {
      marginRight: theme.space(1),
      fontSize: 24,
    },
  },
  [theme.breakpoints.down('md')]: {
    '& .clickable': {
      fontSize: 16,
      padding: [0, theme.space(1)],
    },
  },
}));

const Header = ({ onNav }) => {
  return (
    <AnimatorGeneralProvider animator={{ duration: { enter: 200, exit: 200 } }}>
      <HeaderContainer>
        <Centered>
          <Figure
            src="/favicon.png"
            alt=""
            style={{
              margin: "15px 10px 15px 0",
              height: "50px",
              width: "auto",
            }}
          />
          <Text className="banner" as="h1">
            NASA Mission Control
          </Text>
          <Nav>
            <Clickable onClick={onNav}>
              <FrameBox className="clickable" animator={{ activate: true }}>
                <Link to="/launch">
                  <i className="material-icons">check_circle_outline</i>Launch
                </Link>
              </FrameBox>
            </Clickable>
            <Clickable onClick={onNav}>
              <FrameBox className="clickable" animator={{ activate: true }}>
                <Link to="/upcoming">
                  <i className="material-icons">update</i>Upcoming
                </Link>
              </FrameBox>
            </Clickable>
            <Clickable onClick={onNav}>
              <FrameBox className="clickable" animator={{ activate: true }}>
                <Link to="/history">
                  <i className="material-icons">history</i>History
                </Link>
              </FrameBox>
            </Clickable>
          </Nav>
        </Centered>
      </HeaderContainer>
    </AnimatorGeneralProvider>
  );
};

export default Header;
