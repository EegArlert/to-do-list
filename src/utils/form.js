
import { addEvent, getAllEventKey, getEvent } from "../store/localStorage";
import { selectDOMElement } from "./domHelper";

let usedKey = getAllEventKey();

function processForm() {
    console.log("submitForm function invoked");
    const createKey = () => {

      let calculate = () => Math.floor(Math.random() * 100);

      let randomNum = calculate();

      while(usedKey.includes(randomNum)){
          randomNum = calculate();
      }

      return randomNum
    }

    const key = createKey();
    const name = selectDOMElement('#name').value;
    const description = selectDOMElement('#description').value;
    const dueDate = selectDOMElement('#date').value;
    const priority = selectDOMElement('input[name="priority"]:checked').value;
    const difficulty = selectDOMElement('input[name="difficulty"]:checked').value;
    const duration = selectDOMElement('input[name="duration"]:checked').value;

    addEvent(key, name, description, dueDate, priority, difficulty, duration, false);

    return key
};

export function submitForm(callback) {
        const key = processForm();
        console.log(key)
        callback(key);
}