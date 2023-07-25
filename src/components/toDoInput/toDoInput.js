import { useState, useEffect } from "react"

import { Button } from "../button/button"
import { Input } from "../input/input"
import { ToDoList } from "../toDoList/toDoList"
import { LoadingSpinner } from "../loading/loading"


export const ToDoInput = () => {
    const [value, setValue] = useState('')
    const [taskList, setTaskList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
            setTaskList(taskList)
        }, 2000)
        
    }, []);

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleClick = () => {
        if (value.trim().length) {
            setTaskList([...taskList, {
                            task: value, 
                            id: taskList.length + 1 + value,
                            finished: false
                }])
        }
        setValue('')
    }

    return (
        <div>
            {isLoading ? <LoadingSpinner/> :
            <div>
                <h2>TodoInput</h2>
                <div className="todoInput">
                    <Input className={'task-input'} value={value} onChange={handleChange} type={'text'} placeholder={'New Todo'}/>
                    <Button className={'add-button'} onClick={handleClick} text={'Add new task'}/>
                </div>
                <div>
                    <ToDoList value={value} setValue={setValue} taskList={taskList} setTaskList={setTaskList}/>
                </div>
            </div>}
        </div>
    )
}