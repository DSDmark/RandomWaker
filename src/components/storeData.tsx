import { FC, useEffect } from "react";

const StoreData: FC = (todoData) => {
  useEffect(() => {
    localStorage.setItem("todoListData", JSON.stringify(todoData));
  }, [todoData]);
  const localStorageData = localStorage.getItem("todoData");
  if (localStorageData) {
    return JSON.parse(localStorageData);
  } else {
    return [];
  }
};

export default StoreData;
