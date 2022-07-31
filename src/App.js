import React from 'react'

import Header from './components/layout/Header'
import Content from './components/layout/Content'

import { ProjectsProvider, SelectedProjectProvider } from './context'

import './App.scss'
import './style/header.scss'
import './style/sidebar.scss'

import './style/addProject.scss'
import './style/projectOverlay.scss'

import './style/tasks.scss'
import './style/addTask.scss'
import './style/taskDate.scss'

const App = () => (
  <ProjectsProvider>
    <SelectedProjectProvider>
      <div className='App'>
        <Header />
        <Content />
      </div>
    </SelectedProjectProvider>
  </ProjectsProvider>
)

export default App
