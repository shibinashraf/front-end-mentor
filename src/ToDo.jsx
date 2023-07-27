import React, { useState } from "react";
import add from './assets/add.png';
import remove from './assets/remove.png'

export default function ToDo(){
        const [tasks, setTasks] = useState([]);
        const [newTask, setNewTask] = useState("");
      
        const handleInputChange = (e) => {
          setNewTask(e.target.value);
        };
      
        const handleAddTask = () => {
          if (newTask.trim() !== "") {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask("");
          }
        };
      
        const handleDeleteTask = (index) => {
          const updatedTasks = [...tasks];
          updatedTasks.splice(index, 1);
          setTasks(updatedTasks);
        };

    const List = ({ tasks }) =>{
        return(
            <>
      
          {tasks.map((task, index) => (
            <div className="flex flex-row w-full justify-evenly p-2">
            <React.Fragment key={index}>
              <div className="w-3/4 bg-blue-300 rounded-xl p-4">
                <ul>
                  <li>{task.text}</li>
                </ul>
              </div>
              <button
                onClick={() => handleDeleteTask(index)}
                className="md:h-14 md:w-14 h-12 w-12 drop-shadow-lg flex items-center pl-1 hover:drop-shadow-xl"
              >
                <img src={remove} alt="remove"></img>
              </button>

            </React.Fragment>
            </div>
          ))}
      
      </>
    );
  };
    return(
        <div className="bg-blue-600 h-screen w-screen flex flex-col justify-center gap-4 items-center">
            <div className="text-white font-bold text-xl"><p>To DO App</p></div>
            
            <div className="h-3/4 w-3/4 bg-white rounded-xl flex flex-col items-center p-2 justify-evenly">

                <div className="w-full flex flex-col items-center border-dashed border-2 border-gray-200 overflow-auto no-scrollbar p-4 h-3/4">
                <List tasks= {tasks}/>
                </div>
                <div className='flex md:flex-row flex-col w-full items-center justify-evenly mt-4'>
                <input className='h-12 w-3/4 p-2 bg-slate-100 rounded-xl ' value={newTask} onChange={handleInputChange} placeholder="Enter task.."></input>
                <button onClick={handleAddTask}><div className='m-2 h-16 w-16 rounded-full hover:drop-shadow-xl'><img src={add} alt='add'></img></div></button>
                </div>
                
                
            </div>
        </div>
    
    )
    
}