import { Link, Outlet } from "react-router-dom"
import { getTasks } from "../mocks/mockTasks"

function TasksPage() {
    let tasks = getTasks()

    return (
        <div>
            <h2 className='page-name'>Tasks Page</h2>
            {tasks.map((task) => (
                <Link
                    style={{ display: "block", margin: "2rem 0" }}
                    to={`/tasks/${task.taskId + 1}`}
                    key={task.taskId}
                >
                    {task.name}
                </Link>
            ))}
            <Outlet />
        </div>
    )
}

export default TasksPage
