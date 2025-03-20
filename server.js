const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Permitir solicitudes desde cualquier origen

app.get('/api/tasks', (req, res) => {
    res.json([
        { title: 'Task 1', description: 'Description 1', dueDate: '2023-10-01' },
        { title: 'Task 2', description: 'Description 2', dueDate: '2023-10-02' },
    ]);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
