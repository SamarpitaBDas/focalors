import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Update the current date every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  // Get the month, date, and day
  const month = currentDate.toLocaleString('default', { month: 'long' }); // Full month name
  const date = currentDate.getDate(); // Day of the month
  const day = currentDate.toLocaleString('default', { weekday: 'long' }); // Full weekday name

  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <DateContainer>
            <Month>{month}</Month>
            <DateText>{date}</DateText> 
          </DateContainer>
          <Day>{day}</Day>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 43em;
    height: 10em;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    mask: right calc(var(--s) + var(--r)) top 0 var(--_m),
      right calc(var(--s) + var(--r)) var(--_m),
      radial-gradient(var(--s) at 100% 0, #0000 99%, #000 101%) calc(-1 * var(--r))
        var(--r) no-repeat,
      conic-gradient(at calc(100% - var(--s) - 2 * var(--r)) calc(var(--s) + 2 * var(--r)), #0000 25%, #000 0);
    transition: transform 1s ease-in-out;
    transform-style: preserve-3d;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Month = styled.div`
  font-size: 2em;
  font-weight: bold;
`;

const DateText = styled.div`
  font-size: 3em;
  font-weight: bold;
`;

const Day = styled.div`
  font-size: 4em;
  font-weight: bold;
  text-align: center;
`;

export default Dashboard;
