'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, deleteTask } from '../redux/taskSlice';
import Link from 'next/link';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <Link href="/tasks/create" className="bg-green-600 p-2 rounded-md mb-5">
        Create Task
      </Link>
      <ul className="w-full max-w-xl m-3">
        {tasks.map((task) => (
          <li key={task._id} className="bg-gray-100 p-4 rounded-md mb-4 shadow-md">
            <h2 className="text-2xl mb-2">{task.title}</h2>
            <p className="mb-4">{task.description}</p>
            <div className="flex justify-between">
              <Link href={`/tasks/edit/${task._id}`} className="bg-green-600 p-2 rounded-md">
                Edit
              </Link>
              <button
                onClick={() => handleDelete(task._id)}
                className="bg-red-600 p-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
