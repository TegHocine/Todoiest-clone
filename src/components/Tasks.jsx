import React, { useEffect } from 'react'
import Checkbox from './Checkbox'
import { useTasks } from '../hooks'
import { collatedTasks } from '../constants'
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers'
import {
  useSelectedProjectValue,
  useProjectsValue,
  SelectedProjectContext
} from '../context'

const Tasks = () => {
  const { SelectedProject } = useSelectedProjectValue()
  const { projects } = useProjectsValue()
  const { tasks } = useTasks(SelectedProject)

  let projectName = ''

  if (projects && SelectedProject && !collatedTasksExist(SelectedProject)) {
    projectName = getTitle(projects, SelectedProject).name
  }

  if (collatedTasksExist(SelectedProject) && SelectedProject) {
    projectName = getCollatedTitle(collatedTasks, SelectedProject).name
  }

  useEffect(() => {
    document.title = `${projectName}: Todoist`
  }, [projectName])
  return (
    <div className='tasks' data-testid='tasks'>
      <h2 data-test='project-name'> {projectName} </h2>

      <ul className='tasks__list'>
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks
