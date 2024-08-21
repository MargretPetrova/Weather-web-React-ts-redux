export interface DateFormater {
    formatCurrentDay(d: string): string;
    formatDaysDate(d: string): string;
    formatCurrentHour(d: string): string;
   
  }
  export type FullDate = {
    weekDay:string;
    hour: string;
    date:string;
}
export interface ErrorType {
  valid?: boolean;
  message?: string;
} 