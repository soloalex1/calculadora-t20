import TextBlock from "components/TextBlock";

const TableRow = ({ nome, sigla, children }) => {
  return (
    <tr>
      <TextBlock nome={nome} sigla={sigla} />
      {children}
    </tr>
  );
};

export default TableRow;
