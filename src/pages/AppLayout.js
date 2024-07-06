import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { FrameBox, withBleeps, styled } from '@arwes/core';
import { AnimatorGeneralProvider } from '@arwes/animation';

import usePlanets from "../hooks/usePlanets";
import useLaunches from "../hooks/useLaunches";
import Centered from "../components/Centered";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Launch from "./Launch";
import History from "./History";
import Upcoming from "./Upcoming";

const ContentDiv = styled('div')({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  margin: "auto",
});

const CenteredDiv = styled('div')(({ theme }) => ({
  flex: 1,
  paddingTop: theme.space(5),
  paddingBottom: theme.space(2.5),
}));

const AppLayout = ({ bleeps }) => {
  const [frameVisible, setFrameVisible] = useState(true);

  const animateFrame = () => {
    setFrameVisible(false);
    setTimeout(() => {
      setFrameVisible(true);
    }, 600);
  };

  const onSuccessSound = () => bleeps.success?.play();
  const onAbortSound = () => bleeps.abort?.play();
  const onFailureSound = () => bleeps.warning?.play();

  const {
    launches,
    isPendingLaunch,
    submitLaunch,
    abortLaunch,
  } = useLaunches(onSuccessSound, onAbortSound, onFailureSound);

  const planets = usePlanets();
  
  return (
    <ContentDiv>
      <Header onNav={animateFrame} />
      <CenteredDiv>
        <AnimatorGeneralProvider animator={{ activate: frameVisible }}>
          <FrameBox>
            <div style={{padding: "20px"}}>
              <Routes>
                <Route path="/" element={
                  <Launch 
                    planets={planets}
                    submitLaunch={submitLaunch}
                    isPendingLaunch={isPendingLaunch}
                  />
                } />
                <Route path="/launch" element={
                  <Launch
                    planets={planets}
                    submitLaunch={submitLaunch}
                    isPendingLaunch={isPendingLaunch}
                  />
                } />
                <Route path="/upcoming" element={
                  <Upcoming
                    launches={launches}
                    abortLaunch={abortLaunch}
                  />
                } />
                <Route path="/history" element={
                  <History launches={launches} />
                } />
              </Routes>
            </div>
          </FrameBox>
        </AnimatorGeneralProvider>
      </CenteredDiv>
      <Footer />
    </ContentDiv>
  );
};

export default withBleeps()(AppLayout);
