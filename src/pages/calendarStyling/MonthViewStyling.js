import { styled, alpha } from "@mui/material/styles"
import { MonthView } from "@devexpress/dx-react-scheduler-material-ui"

const PREFIX = "MonthViewPrefix"

const classes = {
    todayCell: `${PREFIX}-todayCell`,
    weekendCell: `${PREFIX}-weekendCell`,
    today: `${PREFIX}-today`,
    weekend: `${PREFIX}-weekend`,
}

const StyledMonthViewTimeTableCell = styled(MonthView.TimeTableCell)(
    ({ theme }) => ({
      [`&.${classes.todayCell}`]: {
        // backgroundColor: alpha(theme.palette.secondary.light, 0.7),
        backgroundColor: '#9332cb81',
        "&:hover": {
          backgroundColor: alpha(theme.palette.primary.main, 0.64),
        },
        "&:focus": {
          backgroundColor: alpha(theme.palette.primary.main, 0.16),
        },
      },
      [`&.${classes.weekendCell}`]: {
        backgroundColor: alpha(
          theme.palette.action.disabledBackground,
          0.04
          ),
          "&:hover": {
            backgroundColor: alpha(
              theme.palette.action.disabledBackground,
              0.04
              ),
            },
            "&:focus": {
                backgroundColor: alpha(
                    theme.palette.action.disabledBackground,
                    0.04
                ),
            },
        },
    })
)

const StyledMonthViewDayScaleCell = styled(MonthView.DayScaleCell)(
    ({ theme }) => ({
        [`&.${classes.today}`]: {
            backgroundColor: alpha(theme.palette.primary.main, 0.16),
        },
        [`&.${classes.weekend}`]: {
            backgroundColor: alpha(
                theme.palette.action.disabledBackground,
                0.06
            ),
        },
    })
)

export const MonthTimeTableCell = (props) => {
    const { startDate } = props
    const date = new Date(startDate)

    if (date.getDate() === new Date().getDate()) {
        return (
            <StyledMonthViewTimeTableCell
                {...props}
                className={classes.todayCell}
            />
        )
    }
    if (date.getDay() === 0 || date.getDay() === 6) {
        return (
            <StyledMonthViewTimeTableCell
                {...props}
                className={classes.weekendCell}
            />
        )
    }
    return <StyledMonthViewTimeTableCell {...props} />
}

export const MonthDayScaleCell = (props) => {
    const { startDate, today } = props

    if (today) {
        return (
            <StyledMonthViewDayScaleCell {...props} className={classes.today} />
        )
    }
    if (startDate.getDay() === 0 || startDate.getDay() === 6) {
        return (
            <StyledMonthViewDayScaleCell
                {...props}
                className={classes.weekend}
            />
        )
    }
    return <StyledMonthViewDayScaleCell {...props} />
}
