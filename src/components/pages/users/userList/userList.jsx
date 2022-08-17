import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from '../../../../context/Globalstate';
import Heading from "../heading/heading";

const UserList = () => {

const { tasks, deleteTask, toggleTaskDone } = useContext(GlobalContext);

  return (
    <>
    <Heading/>
    <div className="flex justify-left">
        {tasks.length > 0 ? (
        <div className="w-6/12 h-200p">
            {tasks.map((task) => (
            <div
                className=" px-20 py-5 text-black border mb-4 flex justify-between"
                key={task.id}
            >
                <div className="text-left">
                <h1 className="text-2xl uppercase">{task.title}</h1>
                <h6 className="text-gray-500">{task.id}</h6>
                <p>{task.description}</p>
                <button
                    className="bg-purple-600 hover:bg-purple-500 py-1 px-3 mt-2 "
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "Undone" : "Done"}
                </button>
                </div>
                <div>
                <Link
                    to={`/edit/${task.id}`}
                    className="bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2"
                >
                    Edit
                </Link>

                <button
                    className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2"
                    onClick={() => deleteTask(task.id)}
                >
                    Delete
                </button>
                </div>
            </div>
            ))}
        </div>
        ) : (
        <p className="bg-gray-600 text-gray-100 py-5 px-10">No Tasks yet</p>
        )}
    </div>
    </>
  )
}

export default UserList