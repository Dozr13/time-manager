import * as React from "react"
import { useState } from "react"
import Paper from "@mui/material/Paper"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import { ViewState } from "@devexpress/dx-react-scheduler"
import {
    Scheduler,
    WeekView,
    MonthView,
    Appointments as Tasks,
    DayView,
    // AllDayPanel,
    TodayButton,
    Toolbar,
    DateNavigator,
} from "@devexpress/dx-react-scheduler-material-ui"

// import { CurrentTimeIndicatorBar } from "./calendarStyling/CurrentTimeIndicatorBar"

import { TimeTableCell, DayScaleCell } from "./calendarStyling/WeekViewStyling"
import {
    MonthTimeTableCell,
    MonthDayScaleCell,
} from "./calendarStyling/MonthViewStyling"
import { tasks } from "../mocks/month-tasks"

// const TimePage = () => {
//     const [state, setState] = useState({
//         data: tasks,
//         currentViewName: "Month",
//     })

//     const currentViewNameChange = (currentViewName) => {
//         setState({ currentViewName })
//     }

//   const ExternalViewSwitcher = ({ props }) => (
//     <RadioGroup
//         aria-label='Views'
//         style={{ flexDirection: "row" }}
//         name='views'
//         value={props.currentViewName}
//         onChange={propscurrentViewNameChange}
//     >
//         <FormControlLabel value='Day' control={<Radio />} label='Day' />
//         <FormControlLabel value='Week' control={<Radio />} label='Week' />
//         <FormControlLabel
//             value='Work Week'
//             control={<Radio />}
//             label='Work Week'
//         />
//         <FormControlLabel value='Month' control={<Radio />} label='Month' />
//     </RadioGroup>
// )

//     // render() {
//     // const { data, currentViewName } = this.state
//     // let todaysDate = new Date()

//     console.log("HIIIIIIII")
//     return (
//         <React.Fragment>
//             <ExternalViewSwitcher
//                 currentViewName={state.currentViewName}
//                 onCurrentViewNameChange={currentViewNameChange}
//             />
//             <Paper>
//                 <Scheduler data={state.data} height={660}>
//                     <ViewState
//                         defaultCurrentDate={state.currentViewName}
//                         currentViewName={state.currentViewName}
//                         onCurrentViewNameChange={currentViewNameChange}
//                     />
//                     <Toolbar
//                         style={{
//                             display: "block",
//                             position: "absolute",
//                             right: 0,
//                         }}
//                     />
//                     <DateNavigator />
//                     <TodayButton />
//                     <DayView startDayHour={9} endDayHour={18} />
//                     <WeekView
//                         startDayHour={10}
//                         endDayHour={19}
//                         timeTableCellComponent={TimeTableCell}
//                         dayScaleCellComponent={DayScaleCell}
//                     />
//                     <WeekView
//                         name='Work Week'
//                         excludedDays={[0, 6]}
//                         startDayHour={9}
//                         endDayHour={19}
//                         timeTableCellComponent={TimeTableCell}
//                         dayScaleCellComponent={DayScaleCell}
//                     />
//                     <MonthView
//                         timeTableCellComponent={MonthTimeTableCell}
//                         dayScaleCellComponent={MonthDayScaleCell}
//                     />

//                     <Tasks />

//                     {/* <CurrentTimeIndicatorBar /> */}
//                 </Scheduler>
//             </Paper>
//         </React.Fragment>
//     )
//     // }
// }

const ExternalViewSwitcher = ({ props }) => (
    <RadioGroup
        aria-label='Views'
        style={{ flexDirection: "row" }}
        name='views'
        value={props.currentViewName}
        onChange={props.handleInputChange}
    >
        <FormControlLabel value='Day' control={<Radio />} label='Day' />
        <FormControlLabel value='Week' control={<Radio />} label='Week' />
        <FormControlLabel
            value='Work Week'
            control={<Radio />}
            label='Work Week'
        />
        <FormControlLabel value='Month' control={<Radio />} label='Month' />
    </RadioGroup>
)
const NotWorking = (props) => {
    return (
        <RadioGroup aria-label='two' name='two' row onChange={props.onChange}>
            <FormControlLabel
                value='3'
                control={<Radio color='primary' />}
                label='3'
                labelPlacement='end'
            />
            <FormControlLabel
                value='4'
                control={<Radio />}
                label='4'
                labelPlacement='end'
            />
        </RadioGroup>
    )
}

const TimePage = (props) => {
    const [data, useData] = useState(tasks)
    const [currentViewName, setCurrentViewName] = useState("work-week")

    const [inputs, setInputs] = useState({})
    const handleInputChange = (event) => {
        event.persist()
        setInputs((inputs) => ({
            ...inputs,
            [event.target.name]: event.target.value,
        }))

        const currentViewNameChange = (currentViewName) => {
            setCurrentViewName(currentViewName)
        }

        return (
            <React.Fragment>
            <ExternalViewSwitcher onChange={handleInputChange} />
                <RadioGroup
                    aria-label='one'
                    name='one'
                    row
                    onChange={handleInputChange}
                >
                    <Paper>
                        <Scheduler data={data} height={660}>
                            <ViewState
                                defaultCurrentDate='2018-07-25'
                                currentViewName={currentViewName}
                                onCurrentViewNameChange={currentViewNameChange}
                            />

                            <WeekView startDayHour={10} endDayHour={19} />
                            <WeekView
                                name='work-week'
                                displayName='Work Week'
                                excludedDays={[0, 6]}
                                startDayHour={9}
                                endDayHour={19}
                            />
                            <MonthView />
                            <DayView />

                            <Toolbar />
                            <Tasks />
                        </Scheduler>
                    </Paper>
                </RadioGroup>
            </React.Fragment>
        )
    }
}

export default TimePage
