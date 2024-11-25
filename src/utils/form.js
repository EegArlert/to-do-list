import { addEvent } from "../store/localStorage";


export function submitForm() {
    console.log("submitForm function invoked")
    const name = document.querySelector('#name').value;
    const description = document.querySelector('#description').value;
    const priority = document.querySelector('input[name="priority"]:checked').value;
    const difficulty = document.querySelector('input[name="difficulty"]:checked').value;
    const duration = document.querySelector('input[name="duration"]:checked').value;

    addEvent(name, description, priority, difficulty, duration);
}