import { useState } from "react";
import { TaskInputProps } from "./TaskInput.types";

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [taskName, setTaskName] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    onAddTask(taskName);

    setTaskName("");
  }

  return (
    <div className="task-input">
      <form onSubmit={handleSubmit}>
        <input name="task" type="text" placeholder="Add a new task..." value={taskName} onChange={e => setTaskName(e.target.value)} />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}