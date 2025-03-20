import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir solicitudes desde cualquier origen
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end(); // Manejar preflight requests
        return;
    }

    // ...existing code for handling GET or POST requests...
    if (req.method === 'GET') {
        const tasks = [
            { title: 'Task 1', description: 'Description 1', dueDate: '2023-10-01' },
            { title: 'Task 2', description: 'Description 2', dueDate: '2023-10-02' },
        ];
        res.status(200).json(tasks);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};

export default handler;
