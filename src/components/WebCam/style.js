import styled from "styled-components";

export const StyledWebCam = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .webcam {
    width: 100%;
    height: auto;
    max-height: 80vh; /* Adjust as needed to fit within the viewport */
    object-fit: cover; /* Ensures the video covers the container */
  }
`;
