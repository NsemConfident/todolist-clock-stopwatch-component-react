// eslint-disable-next-line no-unused-vars
import React,{ useState } from "react"
import './todo.css'

function Todo(){
    const [task, setTask] = useState([]);
    const [newtask, setNewtask] = useState("");

    function handleInputchange(event){
        setNewtask(event.target.value)
    }

    function addTask(){
        if(newtask.trim() !=""){
            setTask(t=>([...t, newtask]));
            setNewtask([]);
        }
    }

    function deleteTask(index){
     const UpdatedTask = task.filter((_, i)=> i !=index);
       setTask(UpdatedTask); 
    }

    function moveup(index){
        if(index > 0){
           const UpdatedTask = [...task];
           [UpdatedTask[index],UpdatedTask[index-1]] =[UpdatedTask[index-1],UpdatedTask[index]];
           setTask(UpdatedTask);
        }

    }

    function movedown(index){

        if(index < task.length -1){
           const UpdatedTask = [...task];
           [UpdatedTask[index],UpdatedTask[index+1]] =[UpdatedTask[index+1],UpdatedTask[index]];
           setTask(UpdatedTask);
           console.log(task.length)
        }

    }

    return(
        <div className="todo-list">

        <h1>Todo List</h1>
        <div className="addto-list">
            <input type="text" placeholder="Enter new task..." value={newtask} onChange={handleInputchange}/>
            <button onClick={addTask} className="add-button">Add</button>

        </div>
        <ol>
            {task.map(
                (task, index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                    <button className="move-button" onClick={()=>moveup(index)}>☝</button>
                    <button className="move-button" onClick={()=>movedown(index)}>👇</button>
                </li>
            )}
        </ol>
        </div>
    )

}

export default Todo