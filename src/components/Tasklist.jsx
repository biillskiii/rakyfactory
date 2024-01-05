import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [status, setStatus] = useState('Active'); // Initial status

    useEffect(() => {
        // Fetch tasks from your API when the component mounts
        axios.get('https://api.sheety.co/645667418e9ea4e0a1593a42ff4c73f4/database/sheet1')
            .then(response => setTasks(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleStart = (taskId) => {
        // Send an API request to start the task with taskId
        axios.put(`https://api.sheety.co/645667418e9ea4e0a1593a42ff4c73f4/database/sheet1${taskId}/start`)
            .then(response => {
                // Update the task status to "Active"
                setTasks(tasks.map(task => (task.id === taskId ? { ...task, status: 'Active' } : task)));
            })
            .catch(error => console.error(error));
    };

    const handleStop = (taskId) => {
        // Send an API request to stop the task with taskId
        axios.put(`https://api.sheety.co/645667418e9ea4e0a1593a42ff4c73f4/database/sheet1${taskId}/stop`)
            .then(response => {
                // Update the task status to "Stop"
                setTasks(tasks.map(task => (task.id === taskId ? { ...task, status: 'Stop' } : task)));
            })
            .catch(error => console.error(error));
    };
    <div className="container mx-auto py-4">
        <h1 className="text-2xl font-bold mb-4">Task List</h1>
        <table className="table-auto">
            <thead>
                <tr>
                    <th className="px-4 py-2">Task</th>
                    <th className="px-4 py-2">Start Date</th>
                    <th className="px-4 py-2">End Date</th>
                    <th className="px-4 py-2">Status</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(task => (
                    <tr key={task.id}>
                        <td className="px-4 py-2">{task.name}</td>
                        <td className="px-4 py-2">{task.startDate}</td>
                        <td className="px-4 py-2">{task.endDate}</td>
                        <td className="px-4 py-2">
                            {task.status === 'Active' ? (
                                <button
                                    className="bg-blue-500 text-white px-2 py-1 rounded"
                                    onClick={() => handleStop(task.id)}
                                >
                                    Stop
                                </button>
                            ) : (
                                <button
                                    className="bg-green-500 text-white px-2 py-1 rounded"
                                    onClick={() => handleStart(task.id)}
                                >
                                    Start
                                </button>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}
export default TaskList