import React, { useMemo } from "react";
import { Text, Table, FrameBox } from '@arwes/core';
import { AnimatorGeneralProvider } from '@arwes/animation';

const History = ({ launches, entered }) => {
  const tableBody = useMemo(() => {
    return launches?.filter((launch) => !launch.upcoming)
      .map((launch) => ({
        success: launch.success ? "greenyellow" : "red",
        flightNumber: launch.flightNumber,
        date: new Date(launch.launchDate).toDateString(),
        mission: launch.mission,
        rocket: launch.rocket,
        customers: launch.customers?.join(", ")
      }));
  }, [launches]);

  const columns = [
    { name: 'success', data: (row) => <span style={{color: row.success}}>█</span> },
    { name: 'flightNumber', data: 'flightNumber' },
    { name: 'date', data: 'date' },
    { name: 'mission', data: 'mission' },
    { name: 'rocket', data: 'rocket' },
    { name: 'customers', data: 'customers' }
  ];

  return (
    <AnimatorGeneralProvider animator={{ activate: entered }}>
      <article id="history">
        <FrameBox>
          <Text as="p">History of mission launches including SpaceX launches starting from the year 2006.</Text>
          <Table
            headers={[
              { id: 'success', data: '' },
              { id: 'flightNumber', data: 'No.' },
              { id: 'date', data: 'Date' },
              { id: 'mission', data: 'Mission' },
              { id: 'rocket', data: 'Rocket' },
              { id: 'customers', data: 'Customers' }
            ]}
            dataset={tableBody}
            columnWidths={['2rem', '3rem', '9rem', 'auto', '7rem', 'auto']}
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
      </article>
    </AnimatorGeneralProvider>
  );
}

export default History;
