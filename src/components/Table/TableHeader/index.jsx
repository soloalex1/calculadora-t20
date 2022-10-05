import TextBlock from "components/TextBlock";

import * as S from "./styles";

import { HEADERS } from "constants";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <S.GhostCell>
          <TextBlock />
        </S.GhostCell>
        {HEADERS.map((header, index) => (
          <S.HeaderCell key={index}>
            <TextBlock sigla={header} />
          </S.HeaderCell>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
