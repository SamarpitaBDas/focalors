import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Global styles for fonts
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Grey+Qo&family=Keania+One&display=swap');
`;

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
  const month = currentDate.toLocaleString('default', { month: 'short' }); // Short month name (e.g., 'Feb')
  const date = currentDate.getDate(); // Day of the month
  const day = currentDate.toLocaleString('default', { weekday: 'long' }); // Full weekday name

  return (
    <>
      <GlobalStyle /> {/* Inject global styles for fonts */}
      <StyledWrapper>
        <div className="card">
          <div className="content">
            <Day>{day}</Day>
            <DateContainer>
              <Month>{month}</Month>
              <DateText>{date}</DateText> 
            </DateContainer>
          </div>
          <div className='statistics'>
            
          </div>
        </div>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 43em;
    height: 10em;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.15);
    display: flex;
    justify-content: flex-start; /* Align content to the left */
    align-items: flex-start; /* Align content to the top */
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
    flex-direction: column; /* Stack the DateContainer and Day vertically */
    justify-content: flex-start;
    align-items: flex-start;
    width: auto; /* Let the content take its natural width */
    margin-top: 50px;
  }
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: row; /* Align the month and date in a row */
  align-items: center; /* Vertically center month and date */
`;

const Month = styled.div`
  font-size: 2.5em;
  font-weight: bold;
  font-family: 'Keania One', cursive;
  color: white;
  margin-left: 10px;
`;

const DateText = styled.div`
  font-size: 2.5em;
  font-weight: bold;
  font-family: 'Keania One', cursive; 
  color: white;
  margin-left: 0.5em; /* Add some space between month and date */
`;

const Day = styled.div`
  font-size: 3em;
  font-weight: bold;
  text-align: left; /* Align text to the left */
  font-family: "Arizonia", serif;
  font-weight: 400;
  font-style: normal;
  color: white;
`;

export default Dashboard;
