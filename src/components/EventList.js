import { getAllEvent, getEvent } from "../store/localStorage";
import { createDOMElement, selectDOMElement } from "../utils/domHelper";



export const eventList = () => {
    
    const key = localStorage.length - 1;
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

export const allEventList = () => {

    let key = 1;

    getAllEvent().forEach(anEvent => {
    
        const parentContainer = selectDOMElement('#list-content-event');
        const listCardContainer = createDOMElement('div', 'list-card-container content', `event-${key}`);
    
        //creating label for each attribute
        const eventName = createDOMElement('span', 'event-input name', null);
        eventName.innerText = anEvent.name;
        listCardContainer.appendChild(eventName);
    
        const eventDescription = createDOMElement('span', 'event-input description', null);
        eventDescription.innerText = anEvent.description;
        listCardContainer.appendChild(eventDescription);
    
        const eventDueDate = createDOMElement('span', 'event-input due-date', null);
        eventDueDate.innerText = anEvent.dueDate;
        listCardContainer.appendChild(eventDueDate);
    
        const eventPriority = createDOMElement('span', 'event-input priority', null);
        eventPriority.innerText = anEvent.priority;
        listCardContainer.appendChild(eventPriority);
    
        const eventDifficulty = createDOMElement('span', 'event-input difficulty', null);
        eventDifficulty.innerText = anEvent.difficulty;
        listCardContainer.appendChild(eventDifficulty);
    
        const eventDuration = createDOMElement('span', 'event-input duration', null);
        eventDuration.innerText = anEvent.duration;
        listCardContainer.appendChild(eventDuration);
    
        const statusCheckbox = createDOMElement('input', 'event-checkbox', null);
        statusCheckbox.type = "checkbox";
        listCardContainer.appendChild(statusCheckbox);
    
        parentContainer.appendChild(listCardContainer);

        
        key++;
    });
}