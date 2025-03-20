import React, { useState } from 'react';
import styles from '../styles/EditTaskForm.module.css';

interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    completed: boolean; // Add the 'completed' property
}

interface EditTaskFormProps {
    task: Task;
    onSave: (updatedTask: Task) => void;
    onCancel: () => void;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({ task, onSave, onCancel }) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [dueDate, setDueDate] = useState(task.dueDate);
    const [completed, setCompleted] = useState(task.completed);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSave({ ...task, title, description, dueDate, completed });
    };

    return (
        <form className={styles.editTaskForm} onSubmit={handleSubmit}>
            <h2>Edit Task</h2>
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
            <div>
                <label htmlFor="deadline">Deadline:</label>
                <input
                    type="date"
                    id="deadline"
                    value={dueDate} // Use dueDate or a separate state for deadline
                    onChange={(e) => setDueDate(e.target.value)} // Update state accordingly
                    required
                />
            </div>
            <div>
                <label htmlFor="completed">Completed:</label>
                <input
                    type="checkbox"
                    id="completed"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                />
            </div>
            <button type="submit" className={styles.saveButton}>
                Save
            </button>
            <button type="button" className={styles.cancelButton} onClick={onCancel}>
                Cancel
            </button>
        </form>
    );
};

export default EditTaskForm;
