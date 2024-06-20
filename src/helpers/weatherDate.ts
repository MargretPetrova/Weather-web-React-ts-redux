import { DateFormater } from "./helperTypes";
//todo better solution
export const weatherDateFormater: DateFormater = {
  formatCurrentDay(date: string) {
    return new Date(date).toLocaleDateString('en-EN', {weekday: 'long'});
  },
  formatDaysDate(date: string) {
    let newDate = new Date(date).toDateString().split(' ').reverse().splice(1,3);
    return `${newDate[0]} ${newDate[1]}, ${newDate[2]}`;
  },
  formatCurrentHour(date:string) {
    const hours = new Date(date).getHours();
    const min = new Date(date).getMinutes();
    return `${hours}:${min}`;     
  }
};


