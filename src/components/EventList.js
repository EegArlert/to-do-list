import { editEvent, getAllEventKey, getEvent } from "../store/localStorage";
import { checkBoxClicked, selectEventListener } from "../utils/appLogic";
import { createDOMElement, selectDOMElement } from "../utils/domHelper";
import { intlFormat } from "date-fns";


const contentParentContainer = selectDOMElement('#list-content-event');
const finishedContentParentContainer = selectDOMElement('#finished-task-content-grid');

export const renderEvent = (key) => {
    
    const event = getEvent(key);
    const listCardContainer = createDOMElement('div', 'list-card-container content', `event-${key}`);

    //creating label for each attribute
    const eventName = createDOMElement('span', 'event-input name', null);
    eventName.innerText = event.name;
    listCardContainer.appendChild(eventName);

    const eventDescription = createDOMElement('span', 'event-input description', null);
    eventDescription.innerText = event.description;
    listCardContainer.appendChild(eventDescription);

    const eventDueDate = createDOMElement('span', 'event-input due-date', null);
    const dueDateArr = event.dueDate.split('-')
    const formatDate = new Intl.DateTimeFormat('en-US').format(new Date(dueDateArr[0], dueDateArr[1]-1, dueDateArr[2]));
    eventDueDate.innerText = formatDate;
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


    //checkbox element
    const checkboxWrapper = createDOMElement('div', 'checkbox-wrapper-40', null);

    //child of checkboxWrapper
    
    const checkboxLabel = createDOMElement('label', null, null);
    checkboxWrapper.appendChild(checkboxLabel)
    //child of checkboxLabel
    const inputCheckbox = createDOMElement('input', 'event-checkbox', null);
    inputCheckbox.type = "checkbox";
    checkboxLabel.appendChild(inputCheckbox);

    const spanCheckbox = createDOMElement('span', 'checkbox', null);
    checkboxLabel.appendChild(spanCheckbox);

    listCardContainer.appendChild(checkboxWrapper);

    if(event.finished == true) {
        inputCheckbox.checked = true;
    };

    inputCheckbox.addEventListener('click', (e) => {
        e.stopPropagation();
        inputCheckbox.checked ?  event.finished = true : event.finished = false;
        editEvent(
            key,
            event.name,
            event.description,
            event.dueDate,
            event.priority,
            event.difficulty,
            event.duration,
            event.finished
        )
        checkBoxClicked();
    })

    if (inputCheckbox.checked){
        finishedContentParentContainer.appendChild(listCardContainer);
    } else {
        contentParentContainer.appendChild(listCardContainer);
    }

}

export const renderAllEventList = () => {
    resetEventList();
    getAllEventKey().forEach(key => {
        renderEvent(key);
    });
    selectEventListener();
}

export const resetEventList = () => {
    contentParentContainer.innerHTML = '';
    finishedContentParentContainer.innerHTML = '';
};

export const getEventContainer = () => {

}