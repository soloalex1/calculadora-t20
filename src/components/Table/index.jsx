import TableHeader from "./TableHeader";

import * as S from "./styles";
import { ATRIBUTOS } from "constants";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Valor</th>
          <th>Raça</th>
          <th>Bônus</th>
          <th>Total</th>
          <th>Custo</th>
        </tr>
      </thead>
      <tbody>
        {ATRIBUTOS.map((atributo, index) => (
          <TableRow key={index} {...atributo} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
