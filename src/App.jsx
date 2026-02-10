import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  function handleAddTask() {
    if (task.trim() === '') return

    const newTask = {
      id: Date.now(),
      text: task,
    }

    setTasks([...tasks, newTask])
    setTask('')
  }

  function handleRemoveTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h1>To-Do List</h1>

      <TaskForm
        task={task}
        onChange={setTask}
        onAdd={handleAddTask}
      />

      <TaskList
        tasks={tasks}
        onRemove={handleRemoveTask}
      />
    </div>
  )
}

export default App