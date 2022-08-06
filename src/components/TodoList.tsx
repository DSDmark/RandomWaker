import { FC } from "react";
interface Props{
    toggleIcons:boolean;
    setIcons:(active: boolean) => void;
}

const TodoList: FC<Props> = ({toggleIcons,setIcons}) => {
  return (
    <>
      <main>
        <div className="bg_img">
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/130/882/non_2x/ds-d-s-letter-design-logo-logotype-concept-free-vector.jpg"
            alt="DS logo background"
            srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr9dYNwFgZ-j1j6sub-8E7BScLK75kY7ztGw&usqp=CAU"
          />
        </div>
        <div className="todo_content">
          <div className="todo_data">
            <img src="https://picsum.photos/200" alt="DS logo" />
            <h1 className="todo_title">
              add your todo list
              <span role="img" aria-labelledby="">
                🗒️
              </span>
            </h1>
            <div className="todo_input">
              <input className="" type="text" name="todo_text" value="" />
              {toggleIcons ?  <i className="icons">✏️</i> : <i className="icons" >➕</i>
              }
            </div>
            {/* {todoData.map((e)=>{
                    return (
                        <>
                        <div className="todo_list" key={e.id}>
                        <p className="todo_subtitle">{e.name}
                        </p>
                            <i className="list_icons" onClick={()=>todoEdit(e.id)}>✏️</i>
                            <i className="list_icons" onClick={()=>deleteData(e.id)}>❌</i>
                            </div>
                        </>active
                    )
                })} */}
            {/* <button className="button" onClick={deletewholeData}><a>remove all</a></button> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default TodoList;
