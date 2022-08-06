const addTodo = (inputData)=>{
  if(inputData){
const wholeData = {
  id:new Date().getTime.toString(),
  neme:inputData,
}
setData([...todoData,wholeData]);
setInputData("");
        setIcons(true);
    }
     if(inputData && toggleIcons){
       setData(todoData.map((e)=>{
           if(e.id === editData){
            return {...todoData,name:inputData};
        }
        return e;
    }));
    }
        else{
            alert("place fill the data▼o・ェ・o▼");
        }
        setInputData("");
        setEditData(null);
        setIcons(false);
   }
  }
}

export default addTodo;