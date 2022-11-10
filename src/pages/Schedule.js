import { useCallback, useState } from "react"
import { Scheduler, View, Editing, Resource } from "devextreme-react/scheduler"
import { mockPriorityData, mockScheduleData } from "../mocks/mockScheduleData"

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
        <Scheduler
            defaultCurrentView='month'
            height={"85vh"}
            id='scheduler'
            adaptivityEnabled={true}
            dataSource={mockScheduleData}
            textExpr='title'
            allDayExpr='dayLong'
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
    )
}

export default Schedule
