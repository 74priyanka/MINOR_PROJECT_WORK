import styled from "styled-components";

export const StyledAttendance = styled.div`
  background: #eafdfc;
  height: 100vh;
  display: flex;
  flex-direction: column;
  height: 100vh; /* Make sure the parent container takes full height */
  overflow: hidden; /* Prevent overflow issues */

  .card-container {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-evenly;
  }
`;
