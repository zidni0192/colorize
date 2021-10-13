import { colorItem } from "../constants/initialValue";

// set item to local storage
export const setItem: Function = (name: string, value: Array<colorItem>) => {
    const temp: string = JSON.stringify(value)
    localStorage.setItem(name, temp)
}

// get item from local storage
export const getItem: Function = (name: string) => {
    const temp: string = localStorage.getItem(name) || '[]'
    const tempJson: Array<colorItem> = JSON.parse(temp)
    return tempJson
}