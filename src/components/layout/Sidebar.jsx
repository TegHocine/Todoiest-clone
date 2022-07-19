import React, { useState } from 'react'

import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar
} from 'react-icons/fa'
import { useSelectedProjectValue } from '../../context'
import Projects from '../Projects'

const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue

  const [active, setActive] = useState('inbox')
  const [showProjects, setShowProjects] = useState(true)

  return (
    <div className='sidebar' data-testid='sidebar'>
      <ul className='sidebar__generic'>
        <li data-testid='inbox' className={active === 'inbox' ? 'active' : ''}>
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li data-testid='today' className={active === 'today' ? 'active' : ''}>
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li
          data-testid='next_7'
          className={active === 'next_7' ? 'active' : ''}>
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>
      <div className='sidebar__middle'>
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className='sidebar__projects'>{showProjects && <Projects />} </ul>
    </div>
  )
}

export default Sidebar
