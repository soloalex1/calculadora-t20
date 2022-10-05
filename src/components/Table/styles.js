import styled from "styled-components";

export const TableContainer = styled.table`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 12px;

  > th:first-child {
    grid-column-start: 2;
  }
`;
