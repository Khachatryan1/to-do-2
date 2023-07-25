import { ToDoInput } from "../components/toDoInput/toDoInput"
import { ToDoList } from "../components/toDoList/toDoList"

import '../assets/styles/styles.scss'

export const ToDo = () => {
    return (
        <div className="to-do">
            <ToDoInput/>
        </div>
    )
}