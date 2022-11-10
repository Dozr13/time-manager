import { Link, Outlet } from "react-router-dom"
// import { getTasks } from "../mocks/mockTasks"
import { getTasks } from "../mocks/mockScheduleData"


function TasksPage() {
    let mockScheduleData = getTasks()

    return (
        <div id='flex-container' className='flex-container'>
            <h3 className='todays-tasks'>Todays Tasks</h3>
            {mockScheduleData.map((task) => (
                <Link
                    className='single-task'
                    style={{ display: "block", margin: "1rem 0", color: "#000" }}
                    to={`/tasks/${task.taskId}`}
                    key={task.taskId}
                >
                    {task.title}
                </Link>
            ))}
            <Outlet />
        </div>
    )
}

export default TasksPage
