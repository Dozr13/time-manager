import { CurrentTimeIndicator } from "@devexpress/dx-react-scheduler-material-ui"
import React, { useState } from "react"

const CurrentTimeIndicatorBar = () => {
    // const { shadePreviousCells, updateInterval, shadePreviousAppointments } = this.state
    const [shadePreviousCells] = useState(true)
    const [updateInterval] = useState(10)
    const [shadePreviousAppointments] = useState(true)

    return (
        <CurrentTimeIndicator
            shadePreviousCells={shadePreviousCells}
            shadePreviousAppointments={shadePreviousAppointments}
            updateInterval={updateInterval}
        />
    )
}

export default CurrentTimeIndicatorBar;