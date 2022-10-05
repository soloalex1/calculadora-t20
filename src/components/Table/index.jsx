import * as S from "./styles";

import { ATRIBUTOS } from "constants";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <S.TableContainer>
      <TableHeader />
      <tbody>
        {ATRIBUTOS.map((atributo, index) => (
          <TableRow key={index} {...atributo} />
        ))}
      </tbody>
    </S.TableContainer>
  );
};

export default Table;
