import React from 'react';
import { useBleeps } from '@arwes/sounds';

const Clickable = ({ children, onClick, ...rest }) => {
  const bleeps = useBleeps();

  const clickWithSound = (e) => {
    bleeps.click.play();
    onClick && onClick(e);
  };

  return (
    <span {...rest} onClick={clickWithSound}>
      {children}
    </span>
  );
};

export default Clickable;
