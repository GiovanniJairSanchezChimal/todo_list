import React, { useState } from 'react';
import styles from '../styles/NewTaskModal.module.css';

interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    completed: boolean; // Add the 'completed' property
}

interface NewTaskModalProps {
    onSave: (newTask: Task) => void;
    onClose: () => void;
}

const NewTaskModal: React.FC<NewTaskModalProps> = ({ onSave, onClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTask: Task = {
            id: Date.now(),
            title,
            description,
            dueDate,
            completed: false, // Default value for 'completed'
        };
        onSave(newTask);
        onClose();
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                    <h2>New Task</h2>
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
                    <button type="submit" className={styles.saveButton}>
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewTaskModal;
