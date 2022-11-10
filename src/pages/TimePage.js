// // import * as React from "react"
// // import { useState } from "react"
// // import Paper from "@mui/material/Paper"
// // import Radio from "@mui/material/Radio"
// // import RadioGroup from "@mui/material/RadioGroup"
// // import FormControlLabel from "@mui/material/FormControlLabel"
// // import { ViewState } from "@devexpress/dx-react-scheduler"
// // import {
// //     Scheduler,
// //     WeekView,
// //     MonthView,
// //     Appointments as Tasks,
// //     DayView,
// //     // AllDayPanel,
// //     TodayButton,
// //     Toolbar,
// //     DateNavigator,
// // } from "@devexpress/dx-react-scheduler-material-ui"

// // // import { CurrentTimeIndicatorBar } from "./calendarStyling/CurrentTimeIndicatorBar"

// // import { TimeTableCell, DayScaleCell } from "./calendarStyling/WeekViewStyling"
// // import {
// //     MonthTimeTableCell,
// //     MonthDayScaleCell,
// // } from "./calendarStyling/MonthViewStyling"
// // import { tasks } from "../mocks/month-tasks"

// // // const TimePage = () => {
// // //     const [state, setState] = useState({
// // //         data: tasks,
// // //         currentViewName: "Month",
// // //     })

// // //     const currentViewNameChange = (currentViewName) => {
// // //         setState({ currentViewName })
// // //     }

// // //   const ExternalViewSwitcher = ({ props }) => (
// // //     <RadioGroup
// // //         aria-label='Views'
// // //         style={{ flexDirection: "row" }}
// // //         name='views'
// // //         value={props.currentViewName}
// // //         onChange={propscurrentViewNameChange}
// // //     >
// // //         <FormControlLabel value='Day' control={<Radio />} label='Day' />
// // //         <FormControlLabel value='Week' control={<Radio />} label='Week' />
// // //         <FormControlLabel
// // //             value='Work Week'
// // //             control={<Radio />}
// // //             label='Work Week'
// // //         />
// // //         <FormControlLabel value='Month' control={<Radio />} label='Month' />
// // //     </RadioGroup>
// // // )

// // //     // render() {
// // //     // const { data, currentViewName } = this.state
// // //     // let todaysDate = new Date()

// // //     console.log("HIIIIIIII")
// // //     return (
// // //         <React.Fragment>
// // //             <ExternalViewSwitcher
// // //                 currentViewName={state.currentViewName}
// // //                 onCurrentViewNameChange={currentViewNameChange}
// // //             />
// // //             <Paper>
// // //                 <Scheduler data={state.data} height={660}>
// // //                     <ViewState
// // //                         defaultCurrentDate={state.currentViewName}
// // //                         currentViewName={state.currentViewName}
// // //                         onCurrentViewNameChange={currentViewNameChange}
// // //                     />
// // //                     <Toolbar
// // //                         style={{
// // //                             display: "block",
// // //                             position: "absolute",
// // //                             right: 0,
// // //                         }}
// // //                     />
// // //                     <DateNavigator />
// // //                     <TodayButton />
// // //                     <DayView startDayHour={9} endDayHour={18} />
// // //                     <WeekView
// // //                         startDayHour={10}
// // //                         endDayHour={19}
// // //                         timeTableCellComponent={TimeTableCell}
// // //                         dayScaleCellComponent={DayScaleCell}
// // //                     />
// // //                     <WeekView
// // //                         name='Work Week'
// // //                         excludedDays={[0, 6]}
// // //                         startDayHour={9}
// // //                         endDayHour={19}
// // //                         timeTableCellComponent={TimeTableCell}
// // //                         dayScaleCellComponent={DayScaleCell}
// // //                     />
// // //                     <MonthView
// // //                         timeTableCellComponent={MonthTimeTableCell}
// // //                         dayScaleCellComponent={MonthDayScaleCell}
// // //                     />

// // //                     <Tasks />

// // //                     {/* <CurrentTimeIndicatorBar /> */}
// // //                 </Scheduler>
// // //             </Paper>
// // //         </React.Fragment>
// // //     )
// // //     // }
// // // }

// // const ExternalViewSwitcher = ({ props }) => (
// //     <RadioGroup
// //         aria-label='Views'
// //         style={{ flexDirection: "row" }}
// //         name='views'
// //         value={props.currentViewName}
// //         onChange={props.handleInputChange}
// //     >
// //         <FormControlLabel value='Day' control={<Radio />} label='Day' />
// //         <FormControlLabel value='Week' control={<Radio />} label='Week' />
// //         <FormControlLabel
// //             value='Work Week'
// //             control={<Radio />}
// //             label='Work Week'
// //         />
// //         <FormControlLabel value='Month' control={<Radio />} label='Month' />
// //     </RadioGroup>
// // )
// // const NotWorking = (props) => {
// //     return (
// //         <RadioGroup aria-label='two' name='two' row onChange={props.onChange}>
// //             <FormControlLabel
// //                 value='3'
// //                 control={<Radio color='primary' />}
// //                 label='3'
// //                 labelPlacement='end'
// //             />
// //             <FormControlLabel
// //                 value='4'
// //                 control={<Radio />}
// //                 label='4'
// //                 labelPlacement='end'
// //             />
// //         </RadioGroup>
// //     )
// // }

// // const TimePage = (props) => {
// //     const [data, useData] = useState(tasks)
// //     const [currentViewName, setCurrentViewName] = useState("work-week")

// //     const [inputs, setInputs] = useState({})
// //     const handleInputChange = (event) => {
// //         event.persist()
// //         setInputs((inputs) => ({
// //             ...inputs,
// //             [event.target.name]: event.target.value,
// //         }))

// //         const currentViewNameChange = (currentViewName) => {
// //             setCurrentViewName(currentViewName)
// //         }

// //         return (
// //             <React.Fragment>
// //             <ExternalViewSwitcher onChange={handleInputChange} />
// //                 <RadioGroup
// //                     aria-label='one'
// //                     name='one'
// //                     row
// //                     onChange={handleInputChange}
// //                 >
// //                     <Paper>
// //                         <Scheduler data={data} height={660}>
// //                             <ViewState
// //                                 defaultCurrentDate='2018-07-25'
// //                                 currentViewName={currentViewName}
// //                                 onCurrentViewNameChange={currentViewNameChange}
// //                             />

// //                             <WeekView startDayHour={10} endDayHour={19} />
// //                             <WeekView
// //                                 name='work-week'
// //                                 displayName='Work Week'
// //                                 excludedDays={[0, 6]}
// //                                 startDayHour={9}
// //                                 endDayHour={19}
// //                             />
// //                             <MonthView />
// //                             <DayView />

// //                             <Toolbar />
// //                             <Tasks />
// //                         </Scheduler>
// //                     </Paper>
// //                 </RadioGroup>
// //             </React.Fragment>
// //         )
// //     }
// // }

// // export default TimePage



// import React from 'react';
// import Scheduler from 'devextreme-react/scheduler';
// import { CheckBox } from 'devextreme-react/check-box';
// import notify from 'devextreme/ui/notify';

// import { tasks } from './calendarStyling/MonthViewStyling';
// import { Timelapse } from '@mui/icons-material'

// const currentDate = new Date(2021, 3, 29);
// const views = ['day', 'week'];

// class TimePage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       allowAdding: true,
//       allowDeleting: true,
//       allowResizing: true,
//       allowDragging: true,
//       allowUpdating: true,
//     };
//     this.onAllowAddingChanged = this.onAllowAddingChanged.bind(this);
//     this.onAllowDeletingChanged = this.onAllowDeletingChanged.bind(this);
//     this.onAllowResizingChanged = this.onAllowResizingChanged.bind(this);
//     this.onAllowDraggingChanged = this.onAllowDraggingChanged.bind(this);
//     this.onAllowUpdatingChanged = this.onAllowUpdatingChanged.bind(this);
//     this.showAddedToast = this.showAddedToast.bind(this);
//     this.showUpdatedToast = this.showUpdatedToast.bind(this);
//     this.showDeletedToast = this.showDeletedToast.bind(this);
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Scheduler
//           timeZone="America/Los_Angeles"
//           dataSource={tasks}
//           views={views}
//           defaultCurrentView="week"
//           defaultCurrentDate={currentDate}
//           startDayHour={9}
//           endDayHour={19}
//           height={600}
//           editing={this.state}
//           onAppointmentAdded={this.showAddedToast}
//           onAppointmentUpdated={this.showUpdatedToast}
//           onAppointmentDeleted={this.showDeletedToast}
//         />
//         <div className="options">
//           <div className="caption">Options</div>
//           <div className="options-container">
//             <div className="option">
//               <CheckBox
//                 defaultValue={this.state.allowAdding}
//                 text="Allow adding"
//                 onValueChanged={this.onAllowAddingChanged}
//               />
//             </div>
//             <div className="option">
//               <CheckBox
//                 defaultValue={this.state.allowDeleting}
//                 text="Allow deleting"
//                 onValueChanged={this.onAllowDeletingChanged}
//               />
//             </div>
//             <div className="option">
//               <CheckBox
//                 defaultValue={this.state.allowUpdating}
//                 text="Allow updating"
//                 onValueChanged={this.onAllowUpdatingChanged}
//               />
//             </div>
//             <div className="option">
//               <CheckBox
//                 defaultValue={this.state.allowResizing}
//                 text="Allow resizing"
//                 onValueChanged={this.onAllowResizingChanged}
//                 disabled={!this.state.allowUpdating}
//               />
//             </div>
//             <div className="option">
//               <CheckBox
//                 defaultValue={this.state.allowDragging}
//                 text="Allow dragging"
//                 onValueChanged={this.onAllowDraggingChanged}
//                 disabled={!this.state.allowUpdating}
//               />
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }

//   onAllowAddingChanged(e) {
//     this.setState({ allowAdding: e.value });
//   }

//   onAllowDeletingChanged(e) {
//     this.setState({ allowDeleting: e.value });
//   }

//   onAllowResizingChanged(e) {
//     this.setState({ allowResizing: e.value });
//   }

//   onAllowDraggingChanged(e) {
//     this.setState({ allowDragging: e.value });
//   }

//   onAllowUpdatingChanged(e) {
//     this.setState({ allowUpdating: e.value });
//   }

//   showToast(event, value, type) {
//     notify(`${event} "${value}" task`, type, 800);
//   }

//   showAddedToast(e) {
//     this.showToast('Added', e.appointmentData.text, 'success');
//   }

//   showUpdatedToast(e) {
//     this.showToast('Updated', e.appointmentData.text, 'info');
//   }

//   showDeletedToast(e) {
//     this.showToast('Deleted', e.appointmentData.text, 'warning');
//   }
// }

// export default TimePage;
