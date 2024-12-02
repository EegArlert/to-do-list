import { submitForm } from './utils/form';
import { getAllEvent } from './store/localStorage';
import { eventKeyListener } from './utils/EventLogic';
import { renderEventCard } from './components/EventCard';
import { renderAddedEvent, renderAllEventList } from './components/EventList';
import './styles/template.css'


renderAllEventList();

const formSubmitButton = document.querySelector('#submit-btn');
const arr = document.querySelectorAll('.list-card-container');
let keyClicked = eventKeyListener(arr, returnKey);


formSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    submitForm();
    renderAddedEvent();
    // const updateArr = getAllEvent();
    // eventKeyListener(updateArr, consoleKey);
})



function returnKey(key) {
    const parentContainer = document.querySelector("#display-edit-wrapper");
    parentContainer.innerHTML = "";
    let clickedKey = key;
    console.log(clickedKey)
    renderEventCard(clickedKey);
    return clickedKey;
}