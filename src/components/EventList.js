import { getAllEventKey, getEvent } from "../store/localStorage";
import { selectEventListener } from "../utils/appLogic";
import { createDOMElement, selectDOMElement } from "../utils/domHelper";
import { renderEventCard } from "./EventCard";


export const renderEvent = (key) => {

    const event = getEvent(key);

    const parentContainer = selectDOMElement('#list-content-event');
    const listCardContainer = createDOMElement('div', 'list-card-container content', `event-${key}`);

    //creating label for each attribute
    const eventName = createDOMElement('span', 'event-input name', null);
    eventName.innerText = event.name;
    listCardContainer.appendChild(eventName);

    const eventDescription = createDOMElement('span', 'event-input description', null);
    eventDescription.innerText = event.description;
    listCardContainer.appendChild(eventDescription);

    const eventDueDate = createDOMElement('span', 'event-input due-date', null);
    eventDueDate.innerText = event.dueDate;
    listCardContainer.appendChild(eventDueDate);

    const eventPriority = createDOMElement('span', 'event-input priority', null);
    eventPriority.innerText = event.priority;
    listCardContainer.appendChild(eventPriority);

    const eventDifficulty = createDOMElement('span', 'event-input difficulty', null);
    eventDifficulty.innerText = event.difficulty;
    listCardContainer.appendChild(eventDifficulty);

    const eventDuration = createDOMElement('span', 'event-input duration', null);
    eventDuration.innerText = event.duration;
    listCardContainer.appendChild(eventDuration);

    const statusCheckbox = createDOMElement('input', 'event-checkbox', null);
    statusCheckbox.type = "checkbox";
    listCardContainer.appendChild(statusCheckbox);

    parentContainer.appendChild(listCardContainer);
}

export const renderAllEventList = () => {

    console.log("try to render");
    const parentContainer = selectDOMElement('#list-content-event');
    parentContainer.innerHTML = ''; 
    getAllEventKey().forEach(key => {
        renderEvent(key);
    });
    selectEventListener();

}

export const resetEventList = () => {
    const parentContainer = selectDOMElement('#list-content-event');
    parentContainer.innerHTML = '';
};

export const getEventContainer = () => {
    
}