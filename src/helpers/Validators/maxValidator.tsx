import { ErrorType } from "../helperTypes"
// todo > mac characters allowed for pass, userName, city......

export const createMaxValidator = (value:string, isFormdirty:boolean) :ErrorType =>{
    const valid =true;
  
    return {
        valid, message:'Required length is 3 characters'
    }
}