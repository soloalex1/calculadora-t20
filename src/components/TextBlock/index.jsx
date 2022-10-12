import * as S from "./styles";

const TextBlock = ({ name, abbr }) => {
  return (
    <S.SingleBlock>
      <h3>{abbr}</h3>
      {name && <span>{name}</span>}
    </S.SingleBlock>
  );
};

export default TextBlock;
