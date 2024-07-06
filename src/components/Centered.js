import React from 'react';
import { styled } from '@arwes/core';

const CenteredDiv = styled('div')(({ theme }) => ({
  margin: '0 auto',
  maxWidth: 800,

  [theme.breakpoints.down('md')]: {
    margin: '0 12px',
  }
}));

const Centered = ({ className, children, ...rest }) => (
  <CenteredDiv className={className} {...rest}>
    {children}
  </CenteredDiv>
);

export default Centered;
