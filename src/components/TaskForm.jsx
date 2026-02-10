function TaskForm({ task, onChange, onAdd }) {
    return (
      <div>
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={task}
          onChange={(e) => onChange(e.target.value)}
        />
  
        <button onClick={onAdd}>
          Adicionar
        </button>
      </div>
    )
  }
  
  export default TaskForm