import React, { useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState(["Example Task"]);
    
    function handleAddTask() {
        const newTask = document.getElementById("taskInput").value;
        document.getElementById("taskInput").value = "";
        setTasks(t => [...t, newTask]);
        console.log(tasks);

        const taskWrapper = document.createElement('div');
        taskWrapper.classList.add("item")
        
        const item = document.createElement("h2");
        item.textContent = newTask;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete"
        deleteBtn.id = "delete-btn"

        const upBtn = document.createElement("button");
        upBtn.textContent = "👆"
        upBtn.id = "up-btn"

        const downBtn = document.createElement("button")
        downBtn.textContent = "👇"
        downBtn.id = "down-btn"

        taskWrapper.appendChild(item)
        taskWrapper.appendChild(deleteBtn)
        taskWrapper.appendChild(upBtn)
        taskWrapper.appendChild(downBtn)

        const itemList = document.querySelector(".item-list")
        itemList.appendChild(taskWrapper)

    }

    function handleRemoveTask(index) {
        setTasks(tasks.filter((_, i) => i !== index))
    }

    function handleMoveTask(index) {

    }

    
    return(
        <>
            <h1 style={{textAlign: "center"}}>To-Do List</h1>
            <div className='todo-form'>
                <input id="taskInput" type="text" placeholder='Enter task'/>
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <div className='item-list'>
                <div className="item">
                    <h2>{tasks}</h2>
                    <button>Delete</button>
                    <button>👆</button>
                    <button>👇</button>
                </div>

                <div className="item">
                    <h2>Do some react coding</h2>
                    <button>Delete</button>
                    <button>👆</button>
                    <button>👇</button>
                </div>

            </div>
        </>
    )
}

export default ToDoList;
