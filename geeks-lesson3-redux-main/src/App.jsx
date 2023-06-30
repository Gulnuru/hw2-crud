import './App.css'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewToDoLIst from './components/newToDoLIst'
import Header from './components/Header'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}></Route>
          <Route path='/newToDoList' element={<NewToDoLIst />}></Route>
          <Route path='/ToDoList' element={<TodoList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
