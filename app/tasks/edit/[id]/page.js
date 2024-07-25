'use client';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import TaskForm from '../../../../components/TaskForm';

const EditTaskPage = ({ params }) => {
  const router = useRouter();
  const { id } = params;
  const task = useSelector((state) => state.tasks.tasks.find((task) => task._id === id));

  if (!task) {
    return (
      <div className="flex justify-center mt-10 m-2 p-3">
        <p>Task not found</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-10  m-2 p-3 ">
      <TaskForm task={task} />
    </div>
  );
};

export default EditTaskPage;
