import React, { useMemo } from "react";
import { 
  Text,
  Table,
  FrameBox,
  Button,
  styled
} from '@arwes/core';
import { AnimatorGeneralProvider } from '@arwes/animation';
import Clickable from "../components/Clickable";

const StyledLink = styled('button')({
  color: 'red',
  textDecoration: 'none',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: 'inherit',
  padding: 0,
});

const Upcoming = ({ entered, launches, abortLaunch }) => {
  const tableBody = useMemo(() => {
    return launches?.filter((launch) => launch.upcoming)
      .map((launch) => ({
        abort: 
          <Clickable>
            <StyledLink onClick={() => abortLaunch(launch.flightNumber)}>
              ✖
            </StyledLink>
          </Clickable>,
        flightNumber: launch.flightNumber,
        date: new Date(launch.launchDate).toDateString(),
        mission: launch.mission,
        rocket: launch.rocket,
        target: launch.target
      }));
  }, [launches, abortLaunch]);

  const columns = [
    { name: 'abort', data: 'abort' },
    { name: 'flightNumber', data: 'flightNumber' },
    { name: 'date', data: 'date' },
    { name: 'mission', data: 'mission' },
    { name: 'rocket', data: 'rocket' },
    { name: 'target', data: 'target' }
  ];

  return (
    <AnimatorGeneralProvider animator={{ activate: entered }}>
      <FrameBox id="upcoming">
        <Text as="p">Upcoming missions including both SpaceX launches and newly scheduled Zero to Mastery rockets.</Text>
        <Text as="p" style={{ color: 'red' }}>Warning! Clicking on the ✖ aborts the mission.</Text>
        <Table
          headers={[
            { id: 'abort', data: '' },
            { id: 'flightNumber', data: 'No.' },
            { id: 'date', data: 'Date' },
            { id: 'mission', data: 'Mission' },
            { id: 'rocket', data: 'Rocket' },
            { id: 'target', data: 'Destination' }
          ]}
          dataset={tableBody}
          columnWidths={['3rem', '3rem', '10rem', '11rem', '11rem', 'auto']}
        >
          {(tableProps) => (
            <Table.Body {...tableProps}>
              {(rowProps) => (
                <Table.Row {...rowProps}>
                  {(columnProps) => (
                    <Table.Data {...columnProps} />
                  )}
                </Table.Row>
              )}
            </Table.Body>
          )}
        </Table>
      </FrameBox>
    </AnimatorGeneralProvider>
  );
}

export default Upcoming;
