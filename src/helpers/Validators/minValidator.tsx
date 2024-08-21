import { ErrorType } from "../helperTypes"
// todo > only characters, required......

export const createMinValidator = (value:string, isFormdirty:boolean) :ErrorType =>{
    const valid = !(isFormdirty && value.length <3);
  
    return {
        valid, message:'Required length is 3 characters'
    }
}