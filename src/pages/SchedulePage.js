import { useCallback, useState } from "react"
import { Scheduler, View, Editing, Resource } from "devextreme-react/scheduler"
import { mockScheduleData } from "../mocks/mockScheduleData"
import TasksPage from '../components/TasksPage'

// import 'devextreme/dist/css/dx.light.css';

//* diff

// const views = [
//     "timelineDay",
//     "timelineWeek",
//     "timelineWorkWeek",
//     "month",
// ]
// const groups = ["priority"]

const Schedule = () => {
    //TODO Check current date working properly
    const [currentDate, setCurrentDate] = useState(new Date())
    const handlePropertyChange = useCallback((e) => {
        if (e.name === "currentDate") {
            setCurrentDate(e.value)
        }
    }, [])
    //TODO end

    // TODO Double check time

    return (
      <>
        <Scheduler
            defaultCurrentView='month'
            height={"70vh"}
            id='scheduler'
            adaptivityEnabled={true}
            dataSource={mockScheduleData}
            textExpr='title'
            allDayExpr='dayLong'
            shadeUntilCurrentTime={true}
            recurrenceRuleExpr='recurrence'
            currentDate={currentDate}
            showCurrentTimeIndicator={true}
            indicatorUpdateInterval={10}
            onOptionChanged={handlePropertyChange}
        >
            <View type='day' startDayHour={10} endDayHour={22} />
            <View type='week' startDayHour={10} endDayHour={22} />
            <View type='month' />
            <Editing allowDragging={true} />
        </Scheduler>
        <TasksPage />
      </>
    )
}

export default Schedule
