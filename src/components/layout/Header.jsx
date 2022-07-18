import React from 'react'

import { FaPizzaSlice } from 'react-icons/fa'

const Header = () => {
  console.log(process.env.REACT_APP_APIKEY)
  return (
    <header className='header' data-testid='header'>
      <nav>
        <div className='logo'>
          <img src='/images/logo.png' alt='Todoist' />
        </div>
        <div className='settings'>
          <ul>
            <li className='settings__add' data-testid='quick-add-task-action'>
              +
            </li>
            <li className='settings__darkmode' data-testid='darkmode-action'>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
