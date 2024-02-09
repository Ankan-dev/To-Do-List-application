import React from 'react';
import { MdDelete } from "react-icons/md";

function TaskList({ MainTask, deleteTask }) {

  //functions
  const handleDelete=(index)=>{
    deleteTask(index);
  }

  return (
    <React.Fragment>
      {MainTask.map((task, index) => (
        <div key={index} className='relative   rounded-full border-2 border-black shadow-xl m-5  flex items-center justify-center gap-8 font-bold bg-white px-5'>
          <div className=' h-full break-words  relative'>{task.title}</div>
          <div className=' h-full break-words '>{task.start}</div>
          <div className=' h-full break'>{task.end}</div>
          <div className='flex justify-center items-center w-[25%] h-full '>
            <button className='w-5 h-5' onClick={handleDelete}>
              <MdDelete className='w-full h-full text-red-500' />
            </button>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default TaskList;
