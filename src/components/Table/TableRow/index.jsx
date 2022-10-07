import Input from "components/Input";
import TextBlock from "components/TextBlock";

import * as S from "./styles";

const TableRow = ({ nome, sigla }) => {
  return (
    <tr>
      <S.RowCell>
        <TextBlock nome={nome} sigla={sigla} />
      </S.RowCell>
      <S.RowCell>
        <Input />
      </S.RowCell>
      <S.RowCell>
        <Input />
      </S.RowCell>
      <S.RowCell>
        <Input />
      </S.RowCell>
      <S.RowCell>
        <Input />
      </S.RowCell>
      <S.RowCell>
        <Input />
      </S.RowCell>
    </tr>
  );
};

export default TableRow;
