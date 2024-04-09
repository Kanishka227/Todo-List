import { useRef } from "react"

function AddTodo({handleItem}){
  const todoName = useRef()
  const todoDate = useRef()

  const handleAddButton = (event) => {
    event.preventDefault()
    const todoNameValue = todoName.current.value
    const todoDateValue = todoDate.current.value
    todoName.current.value = ''
    todoDate.current.value = ''
    handleItem(todoNameValue,todoDateValue)
  }
  return(
    <div className="container text-center">
          <form className="row" onSubmit={handleAddButton}>
            <div className="col">
              <input type="text" 
               ref={todoName} placeholder="Enter your todo" />
            </div>
            <div className="col-md-auto">
              <input type="date" ref={todoDate} />
            </div>
            <div className="col col-lg-2">
              <button className="btn btn-success"
              type="submit"
              >Add</button>
            </div>
          </form>
      </div>
  )
}

export default AddTodo