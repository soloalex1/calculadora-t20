import Input from "components/Input";

const TableRow = ({ nome, sigla }) => {
  return (
    <tr>
      <td>
        <h6>{sigla}</h6>
        <span>{nome}</span>
      </td>
      <td>
        <Input />
      </td>
      <td>
        <Input />
      </td>
      <td>
        <Input />
      </td>
      <td>
        <Input />
      </td>
      <td>
        <Input />
      </td>
    </tr>
  );
};

export default TableRow;
