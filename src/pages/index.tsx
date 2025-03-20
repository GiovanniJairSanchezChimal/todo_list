import React, { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import EditTaskModal from '../components/EditTaskModal';
import NewTaskModal from '../components/NewTaskModal';

interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    completed: boolean; // Add the 'completed' property
}

const HomePage: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [editingTask, setEditingTask] = useState<Task | null>(null);
    const [isCreatingTask, setIsCreatingTask] = useState(false);

    // Fetch tasks from the API
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_API_URL || '/api/tasks');
                const data = await response.json();
                // Add the 'completed' property to each task
                const tasksWithCompleted = data.map((task: Task) => ({
                    ...task,
                    completed: false, // Default value for 'completed'
                }));
                setTasks(tasksWithCompleted);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    // Delete a task
    const handleDeleteTask = (id: number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    // Edit a task
    const handleEditTask = (updatedTask: Task) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
        );
        setEditingTask(null); // Close the modal after saving
    };

    // Add a new task
    const handleAddTask = (newTask: Task) => {
        setTasks((prevTasks) => [...prevTasks, { ...newTask, completed: false }]);
        setIsCreatingTask(false); // Close the modal after saving
    };

    // Toggle task completion
    const handleToggleComplete = (id: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskList
                tasks={tasks}
                onDeleteTask={handleDeleteTask}
                onEditTask={(task) => setEditingTask(task)}
                onNewTask={() => setIsCreatingTask(true)}
                onToggleComplete={handleToggleComplete} // Pass the missing prop
            />
            {editingTask && (
                <EditTaskModal
                    task={editingTask}
                    onSave={handleEditTask}
                    onClose={() => setEditingTask(null)}
                />
            )}
            {isCreatingTask && (
                <NewTaskModal
                    onSave={handleAddTask}
                    onClose={() => setIsCreatingTask(false)}
                />
            )}
        </div>
    );
};

export default HomePage;