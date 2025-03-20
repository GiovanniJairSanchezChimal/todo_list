import React from 'react';
import styles from '../styles/TaskList.module.css';

// Define the type for the task
interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    completed: boolean;
}

// Define the props for TaskList
interface TaskListProps {
    tasks: Task[];
    onDeleteTask: (id: number) => void;
    onEditTask: (task: Task) => void;
    onNewTask: () => void;
    onToggleComplete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask, onEditTask, onNewTask, onToggleComplete }) => {
    const handleDelete = (id: number) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this task?');
        if (confirmDelete) {
            onDeleteTask(id);
        }
    };

    return (
        <div className={styles.taskList}>
            <h2>Task List</h2>
            <button className={styles.newTaskButton} onClick={onNewTask}>
                New Task
            </button>
            {tasks.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li
                            key={task.id} // Use the unique 'id' property as the key
                            className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}
                        >
                            <div>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => onToggleComplete(task.id)}
                                />
                                <h3>{task.title}</h3>
                            </div>
                            <p>{task.description}</p>
                            <p><strong>Due Date:</strong> {task.dueDate}</p>
                            <button
                                className={styles.editButton}
                                onClick={() => onEditTask(task)}
                            >
                                Edit
                            </button>
                            <button
                                className={styles.deleteButton}
                                onClick={() => handleDelete(task.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;