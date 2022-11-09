import moment from 'moment';
import { tasks } from './tasks';

const currentDate = moment();
let date = currentDate.date();

const makeTodayTask = (startDate, endDate) => {
  const days = moment(startDate).diff(endDate, 'days');
  const nextStartDate = moment(startDate)
    .year(currentDate.year())
    .month(currentDate.month())
    .date(date);
  const nextEndDate = moment(endDate)
    .year(currentDate.year())
    .month(currentDate.month())
    .date(date + days);

  return {
    startDate: nextStartDate.toDate(),
    endDate: nextEndDate.toDate(),
  };
};

export default tasks.map(({ startDate, endDate, ...restArgs }) => {
  const result = {
    ...makeTodayTask(startDate, endDate),
    ...restArgs,
  };
  date += 1;
  if (date > 31) date = 1;
  return result;
});
