Task Management Application
Description
This is a Task Management Application that allows users to manage tasks. The application has a frontend built with React and a backend developed using Node.js and Express. Users can create, read, update, and delete tasks, each with a title, description, status, and due date.

Setup Instructions
Backend
Navigate to the Backend Directory:


cd backend
Install Dependencies:


npm install
Create a .env File:
Create a .env file in the backend directory with the following content:

MONGO_URI=mongodb://localhost:27017/taskdb
Start the Server:


npm start
The backend server will be accessible at http://localhost:5000.

Frontend
Navigate to the Frontend Directory:


cd frontend
Install Dependencies:


npm install
Start the React Application:


npm start
The frontend application will be accessible at http://localhost:3000.

API Endpoints
GET /api/tasks: Fetch all tasks
GET /api/tasks/:id: Fetch a specific task by ID
POST /api/tasks: Create a new task
PUT /api/tasks/:id: Update an existing task by ID
DELETE /api/tasks/:id: Delete a task by ID
Frontend Functionality
Task List View: Displays all tasks with pagination.
Task Detail View: Shows detailed information for a selected task.
Task Creation/Update View: Form to create or update tasks.
Code Comments
Backend
Server Setup (server.js): Configures the Express server, connects to MongoDB and sets up API routes.
Task Routes (routes/taskRoutes.js): Defines routes for CRUD operations related to tasks.
Frontend
TaskList Component (components/TaskList.js): Fetches and displays a list of tasks.
TaskForm Component (components/TaskForm.js): Provides a form to create or update tasks.
Contributing
I want you to know that contributions are welcome. Feel free to fork the repository and submit pull requests for improvements or bug fixes.
