import { useContext } from "react"
import TodoItemContext from "../store/TodoItemContext"

function TodoList({handleDeleteButton}){

  const todoItemContext = useContext(TodoItemContext)

  return(
    <div className="container text-center">
          {
            todoItemContext.map((item,index) => {
             return (<div className="row" key={index}>
                  <div className="col">
                    {item.name}
                  </div>
                  <div className="col-md-auto">
                    {item.date}
                  </div>
                  <div className="col col-lg-2">
                  <button type="button" className="btn btn-danger" 
                  onClick={()=>handleDeleteButton(index)}>Delete</button>
                  </div>
        </div>)
            })
          }
      </div>
  )
}
export default TodoList