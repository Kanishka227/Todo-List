import TodoTitle from "./components/TodoTitle";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import EmptyListMessage from "./components/EmptyListMessage"
import TodoItemContext from "./store/TodoItemContext";
import "./App.css"
import { useState } from "react";

function App() {

  const [todoList,setTodoList] = useState([])

  function handleItem(item,date){   
    setTodoList(currValue => {
      const newItemsList = [...currValue,{name: item, date: date}]
      return newItemsList
    })
    
  }
  function handleDeleteButton(index){
    const newList = [...todoList.slice(0,index),...todoList.slice(index+1)]
    setTodoList(newList)
  }
  return (
    <>
      <TodoItemContext.Provider value={todoList}>
        <center className="todo-container">
          <TodoTitle/>
          <AddTodo handleItem={handleItem}/>
          {todoList.length === 0 && <EmptyListMessage/>}
          <TodoList listItems={todoList} handleDeleteButton={handleDeleteButton}/>
        </center>
      </TodoItemContext.Provider>
    </>
  );
}

export default App;
