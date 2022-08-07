import React, { FC, useState } from "react";
import { TodoList } from "./components";
import "./styles.css";

const App: FC = () => {
  const [toggleIcons, setIcons] = useState<boolean>(true);
  const [inputData, setInput] = useState<string>("");
  return (
    <>
      <TodoList toggleIcons={toggleIcons} hendleInput={{inputData,setInput}}/>
    </>
  );
};

export default App;
