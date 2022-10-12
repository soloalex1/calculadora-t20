import { useStore } from "store";

import * as S from "./styles";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = () => {
  const attributes = useStore((state) => state.attributes);

  return (
    <S.TableContainer>
      <TableHeader />
      <tbody>
        {attributes.map((atributo, index) => (
          <TableRow key={index} {...atributo} />
        ))}
      </tbody>
    </S.TableContainer>
  );
};

export default Table;
