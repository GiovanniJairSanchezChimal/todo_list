import React from 'react';
import EditTaskForm from './EditTaskForm';
import styles from '../styles/EditTaskModal.module.css';

interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    completed: boolean; // Add the 'completed' property
}

interface EditTaskModalProps {
    task: Task;
    onSave: (updatedTask: Task) => void;
    onClose: () => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ task, onSave, onClose }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <EditTaskForm task={task} onSave={onSave} onCancel={onClose} />
            </div>
        </div>
    );
};

export default EditTaskModal;
