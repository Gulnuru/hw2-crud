import axios from 'axios'

const initialState = {
  items: [],
  newItem: []
}

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { items: [...state.items, action.payload] }
    case 'REMOVE_TODO':
      return { items: state.items }
    case 'SET_TODOS':
      return { items: action.payload }
    case 'NEW_TODO':
      return { newItem: [...state.items, action.payload] }
    default:
      return state
  }
}


export const fetchTodos = () => {
  return dispatch => {
    axios.get('https://dummyjson.com/todos').then(res => {
      dispatch({ type: 'SET_TODOS', payload: res.data.todos }) 
    })
  }
}

export const createToDo = newTodo => {
  return dispatch => {
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: newTodo,
        userId: 5
      })
    })
      .then(res => res.json())
      .then(res => {
        dispatch({ type: 'NEW_TODO', payload: res.title })
      })
  }
}

export const addTodo = payload => {
  return { type: 'ADD_TODO', payload }
}

export const removeTodo = payload => ({ type: 'REMOVE_TODO', payload })
