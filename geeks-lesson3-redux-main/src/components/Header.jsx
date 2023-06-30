import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <NavLink to='/newToDoList' style={{ marginRight: '20px' }}>
        {' '}
        NewToDOLIst
      </NavLink>
      <NavLink to='/ToDoList'>TodoList</NavLink>
    </div>
  )
}

export default Header
