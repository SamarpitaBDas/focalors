import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get the current month name and year
  const getMonthName = () => {
    const options = { year: 'numeric', month: 'long' };
    return currentDate.toLocaleDateString('en-US', options);
  };

  // Get the number of days in the current month
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month + 1, 0).getDate(); // Days in the current month
  };

  // Get the day of the week for the 1st of the current month
  const getStartDayOfMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month, 1).getDay();
  };

  // Generate the calendar days for the current month
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth();
    const startDay = getStartDayOfMonth();

    const days = [];
    // Add empty days before the start of the month
    for (let i = 0; i < startDay; i++) {
      days.push(null); // Empty spaces for days before the 1st
    }

    // Add actual days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  return (
    <StyledWrapper>
      <div className="card">
        <CalendarHeader>{getMonthName()}</CalendarHeader>
        <CalendarGrid>
          {generateCalendarDays().map((day, index) => (
            <DayCell key={index}>
              {day ? <span>{day}</span> : null}
            </DayCell>
          ))}
        </CalendarGrid>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 17em;
    height: 15em;
    background-color: rgba(255, 255, 255, 0.15);
    transition: 1s ease-in-out;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 1em;
    box-sizing: border-box;
  }
`;

const CalendarHeader = styled.h3`
  text-align: center;
  color: white;
  margin-bottom: 1em;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* 7 columns for the days of the week */
  gap: 5px;
  text-align: center;
`;

const DayCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px;
  border-radius: 5px;
  color: white;

  span {
    font-size: 0.3em;
  }

  &:nth-child(7n) {
    background-color: rgba(255, 255, 255, 0.3); /* Highlight Sundays */
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export default Calendar;
