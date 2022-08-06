import React, { FC, useState } from "react";
import { TodoList } from "./components";
import "./styles.css";

const App: FC = () => {
  const [toggleIcons, setIcons] = useState<boolean>(true);
  return (
    <>
      <TodoList toggleIcons={toggleIcons} setIcons={setIcons} />
    </>
  );
};

export default App;
