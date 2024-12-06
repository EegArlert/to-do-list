import { Event } from "../components/Event";

export function addEvent(name, description, dueDate, priority, difficulty, duration) {
    localStorage.setItem(localStorage.length, Event(name, description, dueDate, priority, difficulty, duration));
    console.log('task has been added to the local storage')
}

export function editEvent(key, name, description, dueDate, priority, difficulty, duration) {
    localStorage.setItem(key, Event(name, description, dueDate, priority, difficulty, duration));
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

export function getAllEventKey() {
    const arr = [];

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === 'debug') {
            continue;
        }
        let key = localStorage.key(i);
        arr.push(key)

    }
    return arr;
}



