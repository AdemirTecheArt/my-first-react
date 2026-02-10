function TaskItem({ task, onRemove }) {
    return (
      <li>
        {task.text}
        <button onClick={() => onRemove(task.id)}>
          Remover
        </button>
      </li>
    )
  }
  
  export default TaskItem  