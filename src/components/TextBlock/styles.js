import styled from "styled-components";

export const SingleBlock = styled.td`
  color: #5b5b5b;
  width: 80px;
  padding: 12px;
  margin: 4px;
  min-height: 50px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;

  h3 {
    font-size: 18px;
    margin: 4px 0;
    font-weight: 700;
  }

  span {
    font-size: 12px;
    font-weight: 400;
  }
`;
