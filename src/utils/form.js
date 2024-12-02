import { addEvent, getEvent } from "../store/localStorage";
import { selectDOMElement } from "./domHelper";


export function submitForm() {
    console.log("submitForm function invoked");
    const form = selectDOMElement('form');
    const name = selectDOMElement('#name').value;
    const description = selectDOMElement('#description').value;
    const dueDate = selectDOMElement('#date').value;
    const priority = selectDOMElement('input[name="priority"]:checked').value;
    const difficulty = selectDOMElement('input[name="difficulty"]:checked').value;
    const duration = selectDOMElement('input[name="duration"]:checked').value;

    addEvent(name, description, dueDate, priority, difficulty, duration);

    return {
        form, name, description, dueDate, priority, difficulty, duration
    }
}

export function editForm(key) {
    const currentEvent = getEvent(key);
    
}