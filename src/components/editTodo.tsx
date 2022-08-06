// EDIT DATA
const todoEdit = (id) => {
  const edittodoData = todoData.find((e) => {
    return e.id === id;
  });
  setInputData(edittodoData.name);
  setEditData(id);
  setIcons(true);
};
export default todoEdit;
