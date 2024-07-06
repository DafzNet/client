import React from 'react';
import { Text, LoadingBars } from '@arwes/core';
import Centered from "./Centered";

const Footer = () => {
  return (
    <footer>
      <LoadingBars
        animate
        full
        size={2}
      />
      <Centered>
        <Text as="p" style={{ fontSize: 14, margin: "10px 0" }}>
          This is not an official site and is not affiliated with NASA or SpaceX in any way. For educational purposes only.
        </Text>
      </Centered>
    </footer>
  );
};

export default Footer;
