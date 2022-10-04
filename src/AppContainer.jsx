import Input from "components/Input";
import TextBlock from "components/TextBlock";

import { ATRIBUTOS } from "constants";

const AppContainer = () => {
  return (
    <main>
      <table>
        {ATRIBUTOS.map((atr, index) => (
          <TextBlock key={index} {...atr} />
        ))}
      </table>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </main>
  );
};

export default AppContainer;

