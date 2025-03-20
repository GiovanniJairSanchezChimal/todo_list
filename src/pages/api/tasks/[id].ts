import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const { id } = req.query;

    switch (method) {
        case 'GET':
            try {
                const task = await prisma.task.findUnique({
                    where: { id: Number(id) },
                });
                if (!task) {
                    return res.status(404).json({ message: 'Task not found' });
                }
                return res.status(200).json(task);
            } catch (error) {
                return res.status(500).json({ message: 'Error retrieving task' });
            }

        case 'PUT':
            try {
                const { title, description, dueDate, completed } = req.body;
                const updatedTask = await prisma.task.update({
                    where: { id: Number(id) },
                    data: { title, description, dueDate, completed },
                });
                return res.status(200).json(updatedTask);
            } catch (error) {
                return res.status(500).json({ message: 'Error updating task' });
            }

        case 'DELETE':
            try {
                await prisma.task.delete({
                    where: { id: Number(id) },
                });
                return res.status(204).end();
            } catch (error) {
                return res.status(500).json({ message: 'Error deleting task' });
            }

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}