import { Event } from "../components/Event";

export function addEvent(name, description, priority, difficulty, duration) {
    localStorage.setItem(localStorage.length - 1, Event(name, description, priority, difficulty, duration));
    console.log('task has been added to the local storage')
}

export function deleteEvent(key) {
    localStorage.removeItem(key);
    console.log(`task with key number ${key} has been removed`)
}

export function getEvent(key) {
    // console.log(`getting ${localStorage.getItem(key)}`)
    return JSON.parse(localStorage.getItem(key));
    // return localStorage.getItem(key);
}

export function getAllEvent(){
    const arr = [];
    
    for(let i = 0; i < localStorage.length - 1; i++){
        arr.push(getEvent(i));
    }

    console.log(`getting a total number of ${arr.length} task`)
    return arr;
}

