import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { addTodo, fetchTodos, createToDo } from '../store/todosReducer'
import { useNavigate } from 'react-router-dom'

const NewToDoLIst = () => {
  const [newTodo, setNewTodo] = useState('')
  const todos = useSelector(state => state.todos.newItem)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onButtonClick = () => {
    if (newTodo.trim() !== '') {
      dispatch(createToDo(newTodo))
      setNewTodo('')
    }
  }
  useEffect(() => {
    if (todos?.length > 0) {
      navigate('/ToDoList')
    }
  }, [todos])
  
  return (
    <div>
      <h4>TodoList</h4>
      <input type='text' onChange={e => setNewTodo(e.target.value)} value={newTodo} />
      <button onClick={onButtonClick}>Добавить</button>
    </div>
  )
}
export default NewToDoLIst
