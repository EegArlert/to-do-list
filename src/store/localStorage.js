import { Event } from "../components/Event";

export function addEvent(taskId, name, description, dueDate, priority, difficulty, duration, finished) {
    localStorage.setItem(taskId, Event(taskId, name, description, dueDate, priority, difficulty, duration, finished));
    console.log('task has been added to the local storage')
}

export function editEvent(taskId, name, description, dueDate, priority, difficulty, duration, finished) {
    console.log(taskId)
    localStorage.setItem(taskId, Event(taskId, name, description, dueDate, priority, difficulty, duration, finished));
}

export function deleteEvent(key) {
    localStorage.removeItem(key);
    console.log(`task with key number ${key} has been removed`)
}

export function deleteAllEvents() {
    localStorage.clear();
}

export function getEvent(key) {
    // console.log(`getting ${localStorage.getItem(key)}`)
    return JSON.parse(localStorage.getItem(key));
    // return localStorage.getItem(key);
}

export function getAllEvent(){
    let allEvent = [];

    let keyArr = getAllEventKey();

    for(let i = 0; i < keyArr.length; i++){
        if (keyArr[i] === 'debug' || keyArr[i] === 'undefined'){
            continue
        }
        else {
            allEvent.push(getEvent(keyArr[i]));
        }
    }
    // getAllEventKey().forEach(key => {
    //     if(key === 'debug' || key === 'null'){
    //         return
    //     } else {
    //     allEvent.push(getEvent(key))
    //     }
    // })
    return allEvent
}


//the issue is, try to get only the index that is number from local storage,
// avoid honecore / undefined.
export function getAllEventKey() {
    const arr = [];

    for(let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i) === 'debug' || localStorage.key(i) === 'undefined' || localStorage.key(i) == 'honey:core-sdk:*'){
            continue
        }
        else {
            arr.push(localStorage.key(i));
        }
    }
    return arr;
}



