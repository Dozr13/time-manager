export const mockScheduleData = [
    {
        id: 1,
        title: "Install New Database",
        startDate: new Date("2022-11-09T08:45:00.000Z"),
        endDate: new Date("2022-11-09T09:45:00.000Z"),
    },
    {
        id: 2,

        title: "Create New Online Marketing Strategy",
        startDate: new Date("2022-11-10T09:00:00.000Z"),
        endDate: new Date("2022-11-10T11:00:00.000Z"),
    },
    {
        id: 3,
        title: "Upgrade Personal Computers",
        startDate: new Date("2022-11-11T10:15:00.000Z"),
        endDate: new Date("2022-11-11T13:30:00.000Z"),
    },
    {
        id: 4,
        title: "Customer Workshop",
        startDate: new Date("2022-11-13T08:00:00.000Z"),
        endDate: new Date("2022-11-13T10:00:00.000Z"),
        dayLong: true,
        recurrence: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10",
    },
    {
        id: 5,
        title: "Prepare Development Plan",
        startDate: new Date("2022-11-12T08:00:00.000Z"),
        endDate: new Date("2022-11-12T10:30:00.000Z"),
    },
    {
        id: 6,
        title: "Testing",
        startDate: new Date("2022-11-09T09:00:00.000Z"),
        endDate: new Date("2022-11-09T10:00:00.000Z"),
        recurrence: "FREQ=WEEKLY;INTERVAL=2;COUNT=2",
    },
    {
      id: 7,
      title: "Meeting of Instructors",
      startDate: new Date("2022-11-10T10:00:00.000Z"),
      endDate: new Date("2022-11-10T11:15:00.000Z"),
      recurrence: "FREQ=DAILY;BYDAY=WE;UNTIL=20221001",
  },
  {
      id: 8,
      title: "Recruiting students",
      startDate: new Date("2022-11-11T08:00:00.000Z"),
      endDate: new Date("2022-11-11T09:00:00.000Z"),
      recurrence: "FREQ=YEARLY",
  },
  {
      id: 9,
      title: "Monthly Planning",
      startDate: new Date("2022-11-13T09:30:00.000Z"),
      endDate: new Date("2022-11-13T10:45:00.000Z"),
      recurrence: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1",
  },
  {
      id: 10,
      title: "Open Day",
      startDate: new Date("2022-11-12T09:30:00.000Z"),
      endDate: new Date("2022-11-12T19:00:00.000Z"),
  },    {
    id: 11,
    title: "Meeting of Instructors",
    startDate: new Date("2022-11-10T10:00:00.000Z"),
    endDate: new Date("2022-11-10T11:15:00.000Z"),
    recurrence: "FREQ=DAILY;BYDAY=WE;UNTIL=20221001",
},
{
    id: 12,
    title: "Recruiting students",
    startDate: new Date("2022-11-11T08:00:00.000Z"),
    endDate: new Date("2022-11-11T09:00:00.000Z"),
    recurrence: "FREQ=YEARLY",
},
{
    id: 13,
    title: "Monthly Planning",
    startDate: new Date("2022-11-13T09:30:00.000Z"),
    endDate: new Date("2022-11-13T10:45:00.000Z"),
    recurrence: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1",
},
{
    id: 14,
    title: "Open Day",
    startDate: new Date("2022-11-12T09:30:00.000Z"),
    endDate: new Date("2022-11-12T19:00:00.000Z"),
},
]

export function getTasks() {
    return mockScheduleData
}

export function getTask(number) {
    return mockScheduleData.find((task) => mockScheduleData.id === number)
}
