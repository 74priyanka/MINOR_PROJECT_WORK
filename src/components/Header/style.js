import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bfeaf5;

  .logo {
    width: 60px;
    margin: 16px;
  }

  .nav-items {
    padding: 0px 20px;
  }

  .nav-items-list {
    display: flex;
    list-style-type: none;
  }

  .nav-items > ul > li {
    padding: 10px;
    margin: 10px;
    font-size: 24px;
    font-weight: 600;
  }
`;
