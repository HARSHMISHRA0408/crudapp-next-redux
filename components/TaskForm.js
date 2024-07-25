'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask, updateTask } from '../redux/taskSlice';
import { useRouter } from 'next/navigation';

const TaskForm = ({ task }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task) {
      await dispatch(updateTask({ id: task._id, task: { title, description } }));
    } else {
      await dispatch(createTask({ title, description }));
    }
    router.push('/');
  };

  return (
    <div className="flex items-center justify-center ">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <div className="mb-4">
          <input
            type="text"
            className='p-3 w-full border rounded'
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <textarea
            className='p-3 w-full border rounded'
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className='p-3 bg-green-500 text-white rounded-md w-full' type="submit">
          {task ? 'Update' : 'Create'} Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
