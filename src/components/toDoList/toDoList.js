import { FaTrash, FaPen } from 'react-icons/fa';

import { Button } from "../button/button"
import { Input } from "../input/input"

export const ToDoList = ({taskList, setTaskList, value, setValue}) => {
    const showAllTasks = () => setTaskList(taskList)

    const showDoneTasks = () => {
        setTaskList(taskList.filter((task) => task.finished))
    }

    const showTodoTasks = () => {
        setTaskList(taskList.filter((task) => !task.finished))
    }
    
    const handleChange = (item) => {
        setTaskList(taskList.map((task) => 
            (task.id === item.id ? { ...task, finished: !task.finished } : task)))
    };

    const deleteAll = () => {
        setTaskList([])
    }

    const deleteDoneTasks = () => {
        setTaskList(taskList.filter((task) => !task.finished))
    }

    const deleteTask = (item) => {
        setTaskList(taskList.filter((task) => task.id !== item.id))
    }

    const changeTask = (item) => {
        setValue(item.task)
        deleteTask(item)
        
        setTaskList((taskList) =>
            taskList.map((task) => 
                task.id === item.id ? { ...task, task: value } : task))
    }


    const chackedItemStyle = {
        color: 'red',
        textDecoration: 'line-through'
    }

    return (
        <div className='to-do-list'>
            <h2>TodoList</h2>
            <div className='to-do-list-buttons'>
                <Button onClick={showAllTasks} className={'to-do-list-buttons-all'} text={'All'}/>
                <Button onClick={showDoneTasks} className={'to-do-list-buttons-done'} text={'Done'}/>
                <Button onClick={showTodoTasks} className={'to-do-list-buttons-todo'} text={'Todo'}/>
            </div>
            <div className='task-list'>
                {
                    taskList?.map((item) => (
                        <div className='task' key={`${item.id}${item.task}`}>
                            <p style={item.finished ? chackedItemStyle : {}}>{item.task}</p>
                            <div className='task-list-buttons'>
                                <Input className={item.finished ? 'checkbox-checked' : 'checkbox'} onChange={() => handleChange(item)}  type={'checkbox'}/>
                                <FaPen className={'edit'} onClick={() => changeTask(item)}/>
                                <FaTrash className={'trash'} onClick={() => deleteTask(item)}/>
                            </div>
                        </div>
                    ))

                }
            </div>
            <div className='telete-tasks'>
                <Button className={'delete-done-tasks'} onClick={deleteDoneTasks} text={'Delete done tasks'}/>
                <Button className={'delete-all-tasks'} onClick={deleteAll} text={'Delete all tasks'}/>
            </div>
        </div>
    )
}