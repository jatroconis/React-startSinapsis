import React from 'react'
import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from '../../../../context/Globalstate';

import Heading from '../heading/heading';

const HomeUsers = () => {
    const [task, setTask] = useState({
      id: "",
      title: "",
      description: "",
    });
    const { addTask, updateTask, tasks } = useContext(GlobalContext);

    const navigate = useNavigate();
    const params = useParams();

    const handleChange = (e) =>
      setTask({ ...task, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!task.id) {
        addTask(task);
      } else {
        updateTask(task);
      }
      navigate("/users");
    };

    useEffect(() => {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setTask({
          id: taskFound.id,
          title: taskFound.title,
          description: taskFound.description,
        });
      }
    }, [params.id, tasks]);

  return (
    <>
    <Heading/>
            <div className="flex justify-center items-center h-3/4">
        <form onSubmit={handleSubmit} className="border border-indigo-600 p-10">
          <h2 className="text-3xl mb-7">
            {task.id ? "Actualizar " : "Crear "} Usuario
          </h2>
          <div className="mb-5">
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Write a name"
              className="py-3 px-4 border border-indigo-600 w-full"
              autoFocus
            />
          </div>
          <div className="mb-5">
            <textarea
              value={task.description}
              name="description"
              rows="2"
              placeholder="write a description"
              onChange={handleChange}
              className="py-3 px-4 border border-indigo-600 w-full"
            ></textarea>
            <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
              {task.id ? "Actualizar Usuario" : "Crear Usuario"}
            </button>
            
          </div>
        </form>
      </div>
    </>
  )
}

export default HomeUsers