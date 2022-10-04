import * as S from "./styles";

const TextBlock = ({ nome, sigla }) => {
  return (
    <S.SingleBlock>
      <h3>{sigla}</h3>
      {nome && <span>{nome}</span>}
    </S.SingleBlock>
  );
};

export default TextBlock;
