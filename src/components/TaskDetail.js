import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css'; // Importing App.css

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/tasks/${id}`);
        setTask(response.data);
      } catch (error) {
        setError('Failed to fetch task details');
        console.error(error);
      }
    };
    fetchTask();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!task) return <div>Loading...</div>;

  return (
    <div className="task-detail">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskDetail;