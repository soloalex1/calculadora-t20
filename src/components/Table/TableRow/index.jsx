import Input from "components/Input";
import TextBlock from "components/TextBlock";

import * as S from "./styles";

const TableRow = ({ name, abbr, value, race, bonus, total, cost }) => {
  return (
    <tr>
      <S.RowCell>
        <TextBlock name={name} abbr={abbr} />
      </S.RowCell>
      <S.RowCell>
        <Input value={value} />
      </S.RowCell>
      <S.RowCell>
        <Input value={race} />
      </S.RowCell>
      <S.RowCell>
        <Input value={bonus} />
      </S.RowCell>
      <S.RowCell>
        <Input value={total} readOnly />
      </S.RowCell>
      <S.RowCell>
        <Input value={cost} readOnly />
      </S.RowCell>
    </tr>
  );
};

export default TableRow;
