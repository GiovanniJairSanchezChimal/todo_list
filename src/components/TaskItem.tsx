import React from 'react';
import styles from '../styles/TaskItem.module.css';

interface TaskItemProps {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, title, description, dueDate, completed, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className={styles.taskItem}>
      <h3 className={completed ? styles.completed : ''}>{title}</h3>
      <p>{description}</p>
      <p>Due: {new Date(dueDate).toLocaleDateString()}</p>
      <div className={styles.actions}>
        <button onClick={() => onEdit(id)}>Edit</button>
        <button onClick={() => onDelete(id)}>Delete</button>
        <button onClick={() => onToggleComplete(id)}>
          {completed ? 'Mark as Incomplete' : 'Mark as Complete'}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;