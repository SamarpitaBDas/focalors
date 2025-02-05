import React, { useState } from 'react';
import styled from 'styled-components';

const HabitTracker = () => {
  const [habits, setHabits] = useState([
    { name: 'Exercise', daysCompleted: [] },
    { name: 'Read', daysCompleted: [] },
    { name: 'Drink Water', daysCompleted: [] }
  ]);

  const handleHabitCompletion = (habitIndex, day) => {
    const updatedHabits = [...habits];
    const habit = updatedHabits[habitIndex];
    const dayIndex = habit.daysCompleted.indexOf(day);

    if (dayIndex === -1) {
      habit.daysCompleted.push(day); 
    } else {
      habit.daysCompleted.splice(dayIndex, 1); 
    }

    setHabits(updatedHabits);
  };

  const generateWeekDays = () => {
    return Array.from({ length: 7 }, (_, index) => `Day ${index + 1}`);
  };

  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <CalendarHeader>Habit Tracker</CalendarHeader>
          <HabitList>
            {habits.map((habit, habitIndex) => (
              <HabitRow key={habitIndex}>
                <HabitName>{habit.name}</HabitName>
                <HabitDays>
                  {generateWeekDays().map((day, dayIndex) => (
                    <DayCell key={dayIndex}>
                      <input
                        type="checkbox"
                        checked={habit.daysCompleted.includes(day)}
                        onChange={() => handleHabitCompletion(habitIndex, day)}
                      />
                    </DayCell>
                  ))}
                </HabitDays>
              </HabitRow>
            ))}
          </HabitList>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 19em;
    height: 19em;
    border-top-right-radius: 200px;
    background-color: rgba(255, 255, 255, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;  
    padding: 1em;
    box-sizing: border-box;
    margin-left:20px;
    margin-top: 20px;
  }
`;

const CalendarHeader = styled.h3`
  text-align: center;
  color: white;
  margin-bottom: 1em;
`;

const HabitList = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const HabitRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;

const HabitName = styled.div`
  flex: 1;
  color: white;
  font-size: 1em;
  font-weight: bold;
`;

const HabitDays = styled.div`
  display: flex;
  gap: 5px;
`;

const DayCell = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;

  input[type='checkbox'] {
    cursor: pointer;
  }

  input[type='checkbox']:checked {
    background-color: rgba(0, 123, 255, 0.7);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export default HabitTracker;
