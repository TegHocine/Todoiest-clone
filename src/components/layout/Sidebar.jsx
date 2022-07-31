import React, { useState } from 'react'

import { useSelectedProjectValue } from '../../context'

import Projects from '../Projects'
import AddProject from '../AddProject'

import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar
} from 'react-icons/fa'

const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue()

  const [active, setActive] = useState('inbox')
  const [showProjects, setShowProjects] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  const showSidebar = () => {
    setIsVisible(!isVisible)
  }
  const hideSidebar = () => {
    setIsVisible(false)
  }

  return (
    <>
      {' '}
      <button
        className={`sidebar__button ${isVisible && 'active'}`}
        onClick={showSidebar}>
        <span className={`buger ${isVisible && 'bugerOne'}`}></span>
        <span className={`buger ${isVisible && 'bugerTwo'}`}></span>
        <span className={`buger ${isVisible && 'bugerThree'}`}></span>
      </button>
      <div className={`sidebar ${isVisible && 'active'}`} data-testid='sidebar'>
        <ul className='sidebar__generic'>
          <li
            data-testid='inbox'
            className={active === 'inbox' ? 'active' : ''}>
            <div
              data-testid='inbox-action'
              aria-label='Show inbox tasks'
              tabIndex={0}
              role='button'
              onClick={() => {
                setActive('inbox')
                setSelectedProject('INBOX')
                showSidebar()
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setActive('inbox')
                  setSelectedProject('INBOX')
                  showSidebar()
                }
              }}>
              <span>
                <FaInbox />
              </span>
              <span>Inbox</span>
            </div>
          </li>
          <li
            data-testid='today'
            className={active === 'today' ? 'active' : ''}>
            <div
              data-testid='today-action'
              aria-label="Show today's tasks"
              tabIndex={0}
              role='button'
              onClick={() => {
                setActive('today')
                setSelectedProject('TODAY')
                showSidebar()
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setActive('today')
                  setSelectedProject('TODAY')
                  showSidebar()
                }
              }}>
              <span>
                <FaRegCalendar />
              </span>
              <span>Today</span>
            </div>
          </li>
          <li
            data-testid='next_7'
            className={active === 'next_7' ? 'active' : ''}>
            <div
              data-testid='next_7-action'
              aria-label='Show tasks for the next 7 days'
              tabIndex={0}
              role='button'
              onClick={() => {
                setActive('next_7')
                setSelectedProject('NEXT_7')
                showSidebar()
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setActive('next_7')
                  setSelectedProject('NEXT_7')
                  showSidebar()
                }
              }}>
              <span>
                <FaRegCalendarAlt />
              </span>
              <span>Next 7 days</span>
            </div>
          </li>
        </ul>
        <div
          className='sidebar__middle'
          onClick={() => setShowProjects(!showProjects)}>
          <span>
            <FaChevronDown className={!showProjects ? 'hidden-projects' : ''} />
          </span>
          <h2>Projects</h2>
        </div>
        <ul className='sidebar__projects'>
          {showProjects && <Projects onclick={showSidebar} />}{' '}
        </ul>
        {showProjects && <AddProject />}
      </div>
    </>
  )
}

export default Sidebar
