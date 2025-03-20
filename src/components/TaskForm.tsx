import React, { useState } from 'react';
import styles from '../styles/TaskForm.module.css';

// Define the type for the task
interface Task {
    title: string;
    description: string;
    dueDate: string;
}

// Define the props for TaskForm
interface TaskFormProps {
    onAddTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask = () => {} }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title || !description || !dueDate) return;

        const newTask = {
            title,
            description,
            dueDate,
        };

        onAddTask(newTask); // Pass the new task to the parent component
        setTitle('');
        setDescription('');
        setDueDate('');
    };

    return (
        <form className={styles.taskForm} onSubmit={handleSubmit}>
            <h2>Add New Task</h2>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="dueDate">Due Date:</label>
                <input
                    type="date"
                    id="dueDate"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;