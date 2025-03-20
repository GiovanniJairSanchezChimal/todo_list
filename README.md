<<<<<<< HEAD
# todo_list
=======
# Task Manager

This is a task management application built with Next.js, TypeScript, and PostgreSQL. It allows users to create, read, update, and delete tasks, providing a simple and intuitive interface for managing daily tasks.

## Features

- **Task List**: View all tasks in a list format.
- **Add Task**: Create new tasks with a title, description, and due date.
- **Edit Task**: Modify existing tasks.
- **Delete Task**: Remove tasks from the list.
- **Complete Task**: Mark tasks as completed.
- **Responsive Design**: The application is designed to be responsive and user-friendly on various devices.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Prisma**: An ORM for Node.js and TypeScript that simplifies database access.
- **PostgreSQL**: A powerful, open-source relational database system.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- PostgreSQL (version 12 or higher)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Set up the environment variables:

   Create a `.env` file in the root directory and add your PostgreSQL connection string:

   ```
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
   ```

4. Set up the database:

   Run the following command to create the database and apply the Prisma migrations:

   ```
   npx prisma migrate dev --name init
   ```

### Running the Application

To start the development server, run:

```
npm run dev
```

The application will be available at `http://localhost:3000`.

## API Endpoints

- **GET /api/tasks**: Retrieve all tasks.
- **POST /api/tasks**: Create a new task.
- **GET /api/tasks/[id]**: Retrieve a specific task by ID.
- **PUT /api/tasks/[id]**: Update a specific task by ID.
- **DELETE /api/tasks/[id]**: Delete a specific task by ID.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
>>>>>>> master
