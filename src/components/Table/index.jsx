import { useStore } from "store";

import * as S from "./styles";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = () => {
  const { attributes, handleAttributeChange } = useStore((state) => state);

  return (
    <S.TableContainer>
      <TableHeader />
      <tbody>
        {attributes.map((attribute, index) => (
          <TableRow
            key={index}
            attribute={attribute}
            handleChange={handleAttributeChange}
          />
        ))}
      </tbody>
    </S.TableContainer>
  );
};

export default Table;
