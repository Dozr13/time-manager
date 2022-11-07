import {useParams} from 'react-router-dom'
import { getTask } from '../mocks/mockTasks'

function SingleTask() {
  let params = useParams();
  let task = getTask(parseInt(params.taskId, 10))

  // <div>Task: {params.taskId}</div>
  return (
        <main style={{ padding: "1rem" }}>
      <h2>Task at hand: {task.name}</h2>
      <p>
      Time Estimate: {task.estimatedTime} <br/>
        {task.startTime} - {task.endTime}
      </p>
      <br/>
      <p>Alarm?</p>
    </main>
  )
}

export default SingleTask