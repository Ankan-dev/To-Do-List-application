import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import TaskList from "./TaskList";

function Container() {
  //state

  const [title, settitle] = useState("");
  const [start, setstart] = useState("");
  const [end, setend] = useState("");
  const [MainTask, setMainTask] = useState([]);
  const [flag, setflag] = useState(false);

  // functions
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...MainTask, { title, start, end }]);
    settitle("");
    setstart("");
    setend("");
    setflag(false);
    console.log(MainTask);
  };

  const addFirstTask=()=>{
    setflag(true);
  }

  const deleteTask=(index)=>{
    const updatedTask=[...MainTask];
    updatedTask.splice(index,1);
    setMainTask(updatedTask);
  }

  return (
    <div className=" py-10 flex justify-center items-center  relative">
      {MainTask.length === 0 && (
        <button className="border-2 border-black" onClick={addFirstTask}>
          <IoAdd className="text-black w-10 h-10" />
        </button>
      )}
      {flag && (
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center w-[40vh] bg-white bg-opacity-90  rounded-xl shadow-xl absolute z-50"
        >
          <h1 className=" font-extrabold text-3xl">Enter your Task</h1>
          <input
            className="border-black border-2 m-5 border-t-0 border-x-0 bg-transparent w-[80%] outline-none"
            placeholder="enter your task"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          ></input>
          <input
            className="border-black border-2 m-5 border-t-0 border-x-0 bg-transparent w-[80%] outline-none"
            placeholder="enter starting time"
            value={start}
            onChange={(e) => {
              setstart(e.target.value);
            }}
          ></input>
          <input
            className="border-black border-2 m-5 border-t-0 border-x-0 bg-transparent w-[80%] outline-none"
            placeholder="enter ending time"
            value={end}
            onChange={(e) => {
              setend(e.target.value);
            }}
          ></input>
          <button className="border-black border-2 m-5 text-white font-bold bg-violet-500 px-10 py-1 rounded shadow-xl">
            Submit
          </button>
        </form>
      )}
      {
        MainTask.length!==0 &&(
          <div className="w-full h-full bg-white shadow-2xl flex flex-col items-center justify-center py-10">
              <TaskList MainTask={MainTask} deleteTask={deleteTask}/>
              <button className="bg-violet-500 py-2 px-10 font-extrabold text-white rounded-full shadow-2xl relative" onClick={addFirstTask}>Add Task</button>
          </div>
        )
      }
    </div>
  );
}

export default Container;
