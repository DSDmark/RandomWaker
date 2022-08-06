// DELETING ALL DATA WHEN CLICK 
const deleteTodo = ()=>{
  setData([]);
};
// REMOVE PERTICOLER DATA 
const deleteData = ((id)=>{
  const deleteList = todoData.filter((e)=>{
      return e.id !== id;
  });
  setData(deleteList);
});

export default deleteTodo;