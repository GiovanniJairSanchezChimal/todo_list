import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const tasks = await prisma.task.findMany();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch tasks' });
        }
    } else if (req.method === 'POST') {
        const { title, description, dueDate } = req.body;

        if (!title || !description || !dueDate) {
            return res.status(400).json({ error: 'Title, description, and due date are required' });
        }

        try {
            const newTask = await prisma.task.create({
                data: {
                    title,
                    description,
                    dueDate: new Date(dueDate), // Ensure this is a Date object
                    completed: false,
                },
            });
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create task' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}