import * as S from "./styles";

const Input = ({ value, onChange, ...attr }) => {
  const handleChange = (event) => {
    console.log("change", event.target.value);
  };

  return (
    <S.StyledInput
      type="text"
      value={value}
      onChange={handleChange}
      {...attr}
    />
  );
};

export default Input;
