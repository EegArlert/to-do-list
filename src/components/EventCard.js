import { createDOMElement, selectDOMElement, toggle } from "../utils/domHelper";
import { getEvent, deleteEvent, editEvent } from "../store/localStorage";
import { eventKeyListener } from "../utils/appLogic";
import { renderAllEventList, resetEventList } from "./EventList";


/*

*/
export const renderEventCard = (key) => {

    const focusEvent = getEvent(key);

    const eventCardContainer = createDOMElement('div', 'card-container', null);

    const parentContainer = selectDOMElement('#display-edit-wrapper');
    parentContainer.appendChild(eventCardContainer);

    //creating label for each attribute
    const eventCardNameLabel = createDOMElement('label', 'focus-label name', null);
    setChildLabelProperty(eventCardNameLabel, eventCardContainer, 'Name', 'focus-input-name');

    const eventCardDescriptionLabel = createDOMElement('label', 'focus-label description', null);
    setChildLabelProperty(eventCardDescriptionLabel, eventCardContainer, 'Description', 'focus-input-description');

    const eventCardDueDateLabel = createDOMElement('label', 'focus-label due-date', null);
    setChildLabelProperty(eventCardDueDateLabel, eventCardContainer, 'Due Date', 'focus-input-due-date');

    const eventCardPriorityLabel = createDOMElement('label', 'focus-label priority', null);
    setChildLabelProperty(eventCardPriorityLabel, eventCardContainer, 'Priority', 'focus-input-priority');

    const eventCardDifficultyLabel = createDOMElement('label', 'focus-label difficulty', null);
    setChildLabelProperty(eventCardDifficultyLabel, eventCardContainer, 'Difficulty', 'focus-input-difficulty')

    const eventCardDurationLabel = createDOMElement('label', 'focus-label duration', null);
    setChildLabelProperty(eventCardDurationLabel, eventCardContainer, 'Duration', 'focus-input-duration');


    //creating label for each attribute
    const eventCardName = createDOMElement('input', 'focus-input', 'focus-input-name');
    setChildInputProperty(eventCardName, eventCardContainer, focusEvent.name);

    const eventCardDescription = createDOMElement('input', 'focus-input', 'focus-input-description');
    setChildInputProperty(eventCardDescription, eventCardContainer, focusEvent.description);

    const eventCardDueDate = createDOMElement('input', 'focus-input', 'focus-input-due-date');
    setChildInputProperty(eventCardDueDate, eventCardContainer, focusEvent.dueDate);

    const eventCardPriority = createDOMElement('input', 'focus-input', 'focus-input-priority');
    setChildInputProperty(eventCardPriority, eventCardContainer, focusEvent.priority);

    const eventCardDifficulty = createDOMElement('input', 'focus-input', 'focus-input-difficulty');
    setChildInputProperty(eventCardDifficulty, eventCardContainer, focusEvent.difficulty);

    const eventCardDuration = createDOMElement('input', 'focus-input', 'focus-input-duration');
    setChildInputProperty(eventCardDuration, eventCardContainer, focusEvent.duration);


    const eventCardButtonContainer = createDOMElement('div', 'focus-button-container', null);

    const cardSubmitButton = createDOMElement('button', 'card-submit-btn', null);
    eventCardButtonContainer.appendChild(cardSubmitButton);
    cardSubmitButton.innerText = "Submit";

    const cardCancelButton = createDOMElement('button', 'card-cancel-btn', null);
    eventCardButtonContainer.appendChild(cardCancelButton);
    cardCancelButton.innerText = "Cancel"

    cardSubmitButton.addEventListener('click', () => {
        editEvent(
            focusEvent.taskId,
            eventCardName.value,
            eventCardDescription.value,
            eventCardDueDate.value,
            eventCardPriority.value,
            eventCardDifficulty.value,
            eventCardDuration.value
        );

        eventCardContainer.innerHTML = '';
        eventCardContainer.style.display = 'none';
        resetEventList();
        renderAllEventList();
        toggle(parentContainer, 'active');
    });

    cardCancelButton.addEventListener('click', () => {
        eventCardContainer.innerHTML = '';
        eventCardContainer.style.display = 'none';
        toggle(parentContainer, 'active');
    });

    eventCardContainer.appendChild(eventCardButtonContainer);
}


function setChildInputProperty(element, parentElement, objAttribute) {
    element.value = objAttribute;
    element.readOnly = false;
    // element.disabled = true;
    parentElement.appendChild(element)
}


function setChildLabelProperty(element, parentElement, innerText, htmlFor) {
    element.innerText = innerText;
    element.htmlFor = htmlFor;
    parentElement.appendChild(element);
}