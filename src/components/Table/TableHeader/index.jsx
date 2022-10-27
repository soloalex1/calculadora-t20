import TextBlock from "components/TextBlock";

import * as S from "./styles";

import { HEADERS } from "constants";

const TableHeader = () => {
  return (
    <S.HeaderContainer>
      <tr>
        <S.GhostCell>
          <TextBlock />
        </S.GhostCell>
        {HEADERS.map((header, index) => (
          <th key={index}>
            <TextBlock abbr={header} />
          </th>
        ))}
      </tr>
    </S.HeaderContainer>
  );
};

export default TableHeader;
