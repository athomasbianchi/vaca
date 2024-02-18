import dayjs from "dayjs";

const format = "dd MMM D"

const mholidays = [
  "1-15-24",
  "2-19-24",
  "5-27-24",
  "6-19-24",
  "7-4-24",
  "9-2-24",
  "10-14-24",
  "11-11-24",
  "11-28-24",
  "11-29-24",
  "12-25-24"
]

const Calendar = () => {

  return (
    <div>
      {mholidays.map(x => {
        return (
          <div
            key={x}
          >{dayjs(x).format(format)}</div>
        );
      })}
    </div>
  );
}

export default Calendar;