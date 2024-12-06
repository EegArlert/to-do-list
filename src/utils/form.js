
import { addEvent, getEvent } from "../store/localStorage";
import { selectDOMElement } from "./domHelper";


function processForm() {
    console.log("submitForm function invoked");
    let key = localStorage.length
    const name = selectDOMElement('#name').value;
    const description = selectDOMElement('#description').value;
    const dueDate = selectDOMElement('#date').value;
    const priority = selectDOMElement('input[name="priority"]:checked').value;
    const difficulty = selectDOMElement('input[name="difficulty"]:checked').value;
    const duration = selectDOMElement('input[name="duration"]:checked').value;

    addEvent(name, description, dueDate, priority, difficulty, duration);

    return key
};

export function submitForm(callback) {
        const key = processForm();
        console.log(key)
        callback(key);
}