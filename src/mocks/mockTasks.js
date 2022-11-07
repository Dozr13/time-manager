let mockTasks = [
  {
    taskId: 0,
    name: "Clean House",
    estimatedTime: "2 hours",
    startTime: "8:00am",
    endTime: "10:00am",
    goalTime: "1.5 hours",
    alarm: true
  },
  {
    taskId: 1,
    name: "Work on car",
    estimatedTime: "1.5 hours",
    startTime: "10:30am",
    endTime: "12:00pm",
    goalTime: "1 hour",
    alarm: true
  },
  {
    taskId: 2,
    name: "Write code",
    estimatedTime: "3 hours",
    startTime: "12:00pm",
    endTime: "3:00pm",
    goalTime: "",
    alarm: false
  },
  {
    taskId: 3,
    name: "Eat dinner",
    estimatedTime: "1 hours",
    startTime: "4:00pm",
    endTime: "5:00pm",
    goalTime: "1 hour",
    alarm: true
  },
];

export function getTasks() {
  return mockTasks;
}

export function getTask(number) {
  return mockTasks.find(
    (task) => task.taskId === number
  );
}