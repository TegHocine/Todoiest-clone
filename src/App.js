import React from 'react'

import Header from './components/layout/Header'
import Content from './components/layout/Content'

import { ProjectsProvider, SelectedProjectProvider } from './context'

import './App.scss'

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
