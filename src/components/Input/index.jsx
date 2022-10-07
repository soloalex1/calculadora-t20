import { useState } from "react";

import * as S from "./styles";

const Input = ({ ...attr }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
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
