import React, { useState } from 'react'
import AddTask from '../AddTask'
import { FaPizzaSlice } from 'react-icons/fa'

const Header = () => {
  const [shouldShowMain, setShouldShowMain] = useState(false)
  const [showQuickAddTask, setShowQuickAddTask] = useState(false)
  return (
    <header className='header' data-testid='header'>
      <nav>
        <div className='logo'>
          <img src='/images/logo.png' alt='Todoist' />
        </div>
        <div className='settings'>
          <ul>
            <li className='settings__add'>
              <button
                data-testid='quick-add-task-action'
                aria-label='Quick add task'
                type='button'
                onClick={() => {
                  setShowQuickAddTask(true)
                  setShouldShowMain(true)
                }}>
                +
              </button>
            </li>
            <li className='settings__darkmode' data-testid='darkmode-action'>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  )
}

export default Header
