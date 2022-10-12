import Input from "components/Input";
import TextBlock from "components/TextBlock";

import * as S from "./styles";

const TableRow = ({ attribute, handleChange }) => {
  const { name, abbr, value, race, bonus, cost, total } = attribute;

  const onValueChange = (value) => {
    handleChange(name, value);
  };

  return (
    <tr>
      <S.RowCell>
        <TextBlock name={name} abbr={abbr} />
      </S.RowCell>
      <S.RowCell>
        <Input value={value} onChange={onValueChange} />
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
